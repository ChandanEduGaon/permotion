import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const AddServiceForm = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [serviceName, setServiceName] = useState("");
  useEffect(() => {
    document.title = "AddServiceForm";
  }, []);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const fire = (status, msg) => {
    Toast.fire({
      icon: status === 200 ? "success" : "warning",
      title: msg === "ok" ? "Offer added successfully" : "Offer not added!!",
    });
  };
  const addOffer = async () => {
    try {
      const docRef = await addDoc(collection(db, "offers"), {
        name: name,
        description: des,
        price: price,
        service: serviceName,
        datetime: date,
      });
      console.log("Document written with ID: ", docRef.id);
      fire(200, "ok");
    } catch (e) {
      console.error("Error adding document: ", e);
      fire(500, "notOk");
    }
  };
  const add = () => {
    if (name === "" || serviceName === "" || des === "" || price === "" || date === '') {
      alert("All fields are required!!");
    } else {
      addOffer();
    }
  };
  return (
    <div className="w-screen h-[80%] overflow-auto">
      <h2 className="w-full flex justify-center">Add Offer</h2>
      <div className="w-[100%] flex sm:justify-center items-center">
        <div className="flex flex-col p-5 w-[100%] sm:w-[60%]">
          <span className="border-[.1px] border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label htmlFor="name" className="text-sm mb-2">
              Name
            </label>
            <input
              id="name"
              className="border-none outline-none font-thin text-sm"
              type="text"
              placeholder="Write your offer name..."
              onChange={(e) => {
                const name = e.target.value; // Get the input value
                setName(name); // Call the setName function with the input value
              }}
            />
          </span>
          <span className="border-[.1px] border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label htmlFor="price" className="text-sm mb-2">
              Price
            </label>
            <input
              id="price"
              className="border-none outline-none font-thin text-sm"
              type="number"
              placeholder="Enter your offer price..."
              onChange={(e) => {
                const price = e.target.value; // Get the input value
                setPrice(price); // Call the setName function with the input value
              }}
              autoComplete="off"
            />
          </span>
          <span className="border-[.1px] border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label htmlFor="s_name" className="text-sm mb-2">
              Service name
            </label>
            <input
              id="s_name"
              className="border-none outline-none font-thin text-sm"
              type="text"
              placeholder="Write your service name..."
              onChange={(e) => {
                const service = e.target.value; // Get the input value
                setServiceName(service); // Call the setName function with the input value
              }}
            />
          </span>
          <span className="border-[.1px] border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label htmlFor="date" className="text-sm mb-2">
              Expire Date
            </label>
            <input
              id="date"
              className="border-none outline-none font-thin text-sm"
              type="date"
              placeholder="Choose date of offer expire..."
              onChange={(e) => {
                const date = e.target.value; // Get the input value
                setDate(date); // Call the setName function with the input value
              }}
            />
          </span>
          <span className="border-[.1px] border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label htmlFor="des" className="text-sm mb-2">
              Description
            </label>
            <input
              id="des"
              className="border-none outline-none font-thin text-sm"
              type="text"
              placeholder="Write about your offer..."
              onChange={(e) => {
                const des = e.target.value; // Get the input value
                setDes(des); // Call the setName function with the input value
              }}
            />
          </span>
          <button
            type="submit"
            className="bg-purple-500 w-[100%] rounded py-2 text-white my-5"
            onClick={add}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddServiceForm;
