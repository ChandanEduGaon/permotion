import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [platform, setPlatform] = useState("youtube");

  const fetchPost = async () => {
    await getDocs(collection(db, platform)).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setOffers(newData);
    });
  };
  const deleteOffer = async (id) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        await deleteDoc(doc(db, platform, id));
      } catch (error) {
        console.log("Error removing document: ", error);
      }
    }
  };

  useEffect(() => {
    fetchPost();
  }, [deleteOffer, platform]);
  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700">All Services</h2>
          <span className="text-xs text-gray-500">
            View services / delete services
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <label
            className="mb-1 ml-3 font-semibold text-gray-500"
            htmlFor="platform"
          >
            Select Platform
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
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-3 py-2">ID</th>
                <th className="px-3 py-2">Title</th>
                <th className="px-3 py-2">Services</th>
                <th className="px-3 py-2">Description</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {offers.map((item, index) => (
                <tr key={index}>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">{index + 1}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">{item.title}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">{item.list.length} Services</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">{item.des}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p
                      className=" flex justify-center bg-red-400 text-white px-2 rounded"
                      onClick={() => {
                        deleteOffer(item.id);
                      }}
                    >
                      delete
                    </p>
                      </td>
                  </tr>
                  
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Offers;
