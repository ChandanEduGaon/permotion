import { useState, useEffect } from "react";
import minutesToHMS from "../../helper";


const Offer = (props) => {
  const [offerExpired, setOfferExpired] = useState(false);
  const checkExpiration = () => {
    const now = new Date().getTime();
    const expirationTime = new Date(props.data.datetime).getTime();

    if (now > expirationTime) {
      // Offer has expired
      setOfferExpired(true);
    }
  };
  useEffect(() => {
    checkExpiration();
  }, []);
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[80%] md:w-[30%] p-5 mb-5 rounded-lg text-white flex justify-between relative overflow-hidden">
      <div className="w-[70%]">
        <div>
          <h1 className="text-sm">{props.data.description}</h1>
          <h1 className="font-bold text-2xl py-1">{props.data.name}</h1>
          <span className="font-thin text-sm">Rs {props.data.price}/-</span>
        </div>
        <div>
          <a
            href={`https://wa.me/+916209776682?text=Hello Sir, I am intrested with this service, ${props.data.name}`}
            target="_blank"
            className="text-white"
          >
            <button className="bg-[#26b0ff] px-5 py-1 mt-5 rounded">
              Order Now
            </button>
          </a>
        </div>
      </div>
      <div className="w-[30%] flex justify-center items-center">
        {props.data.src ? (
          <img
            src={props.data.src}
            alt="yt"
            className="max-w-[80%] min-w-[80%] rounded-lg"
          />
        ) : (
          ""
        )}
      </div>
      <span className="absolute bottom-3 right-4">
        {offerExpired ? "Expired!" : "Till : " + props.data.datetime}
      </span>
      {offerExpired ? (
        ""
      ) : (
        <div class="bg-green-700 absolute transform rotate-45 text-center text-white font-semibold py-1 right-[-38px] top-[34px] w-[170px]">
          New Offer
        </div>
      )}
    </div>
  );
};

export default Offer;
