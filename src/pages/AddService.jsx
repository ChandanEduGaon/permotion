import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddServiceForm = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [stitle, setsTitle] = useState("");
  const [sdes, setsDes] = useState("");
  const [sprice, setsPrice] = useState(0);
  const [list, setList] = useState([]);
  const [platform, setPlatform] = useState("");
  useEffect(() => {
    document.title = "AddService";
  }, []);

  const item = {
    des: sdes,
    title: stitle,
    price: sprice,
  };
    const additem = () => {
      if (sdes === "" || stitle === "" || sprice === "") {
        alert("All fields are required!!");
      } else {
        setList([...list, item]);
      }
  };
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
      title:
        msg === "ok" ? "Services added successfully" : "Services not added!!",
    });
  };
  const addOffer = async () => {
    try {
      const docRef = await addDoc(collection(db, platform), {
        title: title,
        des: des,
        datetime:
          new Date().getFullYear() +
          "-" +
          new Date().getMonth() +
          "-" +
          new Date().getDate(),
        list: list,
      });
      console.log("Document written with ID: ", docRef.id);
      fire(200, "ok");
    } catch (e) {
      console.error("Error adding document: ", e);
      fire(500, "notOk");
    }
  };
  const add = () => {
    if (
      title === "" ||
      des === "" ||
      sdes === "" ||
      stitle === "" ||
      sprice === 0
    ) {
      alert("All fields are required!!");
    } else {
      addOffer();
    }
  };
  return (
    <div className="w-screen h-[80%] overflow-auto">
      <h2 className="w-full flex justify-center">Add Services</h2>
      <div className="w-[100%] flex sm:justify-center items-center">
        <div className="flex flex-col p-5 w-[100%] sm:w-[60%]">
          <span className="border-[.1px] border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label
              className="mb-1 ml-3 font-semibold text-gray-500"
              htmlFor="platform"
            >
              Platform
            </label>
            <select
              className="rounded-lg border px-2 py-2 shadow-sm outline-none"
              id="platform"
              onChange={(e) => {
                const platform = e.target.value; // Get the input value
                setPlatform(platform); // Call the setName function with the input value
              }}
            >
              <option value="youtube">Youtube</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="google">Google</option>
            </select>
          </span>
          <span className="border-[.1px] border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label htmlFor="title" className="text-sm mb-2">
              Title
            </label>
            <input
              id="title"
              className="border-none outline-none font-thin text-sm"
              type="text"
              placeholder="Write your services title..."
              onChange={(e) => {
                const title = e.target.value; // Get the input value
                setTitle(title); // Call the setName function with the input value
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
              placeholder="Write about your services..."
              onChange={(e) => {
                const des = e.target.value; // Get the input value
                setDes(des); // Call the setName function with the input value
              }}
            />
          </span>
          <span className="relative border-[.1px] border-gray-400 flex justify-around p-3 w-[100%] rounded mb-2">
            <span>Title</span>
            <span>Description</span>
            <span>Price</span>
            <span
              className="text-2xl absolute -right-5 top-0 cursor-pointer bg-purple-600 rounded-full flex items-center justify-center text-white h-[40px] w-[40px]"
              onClick={additem}
            >
              +
            </span>
          </span>
          <span className="border-[.1px] border-gray-400 flex justify-around p-3 w-[100%] rounded mb-2">
            <input
              id="des"
              className="border-none outline-none font-thin text-sm"
              type="text"
              placeholder="Write title..."
              onChange={(e) => {
                const v = e.target.value; // Get the input value
                setsTitle(v); // Call the setName function with the input value
              }}
            />
            <span>
              <input
                id="des"
                className="border-none outline-none font-thin text-sm"
                type="text"
                placeholder="Write description..."
                onChange={(e) => {
                  const v = e.target.value; // Get the input value
                  setsDes(v); // Call the setName function with the input value
                }}
              />
            </span>
            <span>
              <input
                id="price"
                className="border-none outline-none font-thin text-sm"
                type="number"
                placeholder="Write price..."
                onChange={(e) => {
                  const v = e.target.value; // Get the input value
                  setsPrice(v); // Call the setName function with the input value
                }}
              />
            </span>
          </span>

          <button
            type="submit"
            className="bg-purple-500 w-[100%] rounded py-2 text-white my-5"
            onClick={add}
          >
            Add {list.length} services
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddServiceForm;
const x = [
  {
    title: "Add Service",
    des: "",
    price: "",
  },
  {
    title: "Add Service",
    des: "",
    price: "",
  },
];
