import React, { useState } from "react";
import { Button, ButtonToolbar } from "rsuite";

const Custom = () => {
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [service, setService] = useState(0.75);
  const [platform, setPlatform] = useState("");
  const [increment, setIncrement] = useState(100);
  const [loading, setLoading] = useState(false);

  
  return (
    <div className="w-100 h-[100%] flex flex-col items-center justify-center">
      <span className="text-green-600 mb-10"></span>
      <span className="h-[10%] flex items-baseline justify-center">
        <span className="text-lg me-1">₹</span>
        <span className="text-4xl text-purple-500 font-bold">{total}</span>
        <span className="text-4xl font-thin">/-</span>
      </span>
      <div>
        <div class="relative my-5 rounded-md shadow-sm border bottom-1 p-3">
          <select
            id="category"
            name="category"
            class="w-full h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-2 text-gray-500  sm:text-sm outline-none"
            onChange={(e) => {
              setAmount(0);
              setTotal(0);
              setPlatform(e.currentTarget.value);
            }}
          >
            <option value={"Youtube"}>Youtube</option>
            <option value={"Facebook"}>Facebook</option>
            <option value={"Instagram"}>Instagram</option>
            <option value={"X"}>X</option>
            <option value={"TikTok"}>TikTok</option>
            <option value={"Spotify"}>Spotify</option>
          </select>
        </div>
        <div class="relative mt-2 rounded-md shadow-sm border bottom-1 p-2">
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="0"
            disabled
            value={amount}
          />
          <div class="absolute inset-y-0 right-2 flex items-center">
            <select
              id="category"
              name="category"
              class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-2 text-gray-500  sm:text-sm outline-none"
              onChange={(e) => {
                setAmount(0);
                setTotal(0);
                const newService = e.currentTarget.value;
                setService(newService);
              }}
            >
              <option value={1.5}>Followers</option>
              <option value={0.75}>Views</option>
              <option value={0.5}>Likes</option>
              <option value={2}>Comments</option>
            </select>
          </div>
        </div>
      </div>
      <div class="relative my-5 rounded-md shadow-sm border bottom-1 p-3">
        <select
          id="category"
          name="category"
          class="w-full h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-2 text-gray-500  sm:text-sm outline-none"
          onChange={(e) => {
            setIncrement(parseInt(e.currentTarget.value));
          }}
        >
          <option value={100}>100</option>
          <option value={500}>500</option>
          <option value={1000}>1000</option>
          <option value={5000}>5000</option>
          <option value={10000}>10000</option>
        </select>
      </div>
      <div className="flex items-center gap-10 py-10">
        <button
          className="text-xl px-7 py-2 bg-purple-500 rounded-md text-white"
          onClick={() => {
            const newAmount = amount > increment ? amount - increment : 0;
            setAmount(newAmount);
            setTotal(newAmount * service);
          }}
        >
          -100
        </button>
        <button
          className="text-xl px-7 py-2 bg-purple-500 rounded-md text-white"
          onClick={() => {
            const newAmount = amount + increment;
            setAmount(newAmount);
            setTotal(newAmount * service);
          }}
        >
          +100
        </button>
      </div>
      <div className="w-100 h-10">
        {amount > 0 ? (
          <ButtonToolbar>
            {loading ? (
              <Button
                color="green"
                appearance="primary"
                onClick={() => {
                  setLoading(true);
                  const loader = setTimeout(() => {
                    setLoading(false);
                    clearTimeout(loader);
                    setTotal(0);
                    setIncrement(100);
                    setAmount(0);
                  }, 3000);
                }}
                loading
              >
                <span className="text-lg px-5 py-1">Order Now</span>
              </Button>
            ) : (
              <Button
                color="green"
                appearance="primary"
                onClick={() => {
                  setLoading(true);
                  const loader = setTimeout(() => {
                    setLoading(false);
                    clearTimeout(loader);
                    setTotal(0);
                    setIncrement(100);
                    setAmount(0);
                  }, 3000);
                }}
              >
                <span className="text-lg px-5 py-1">Order Now</span>
              </Button>
            )}
          </ButtonToolbar>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Custom;
