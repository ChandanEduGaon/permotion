import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "offers")).then((querySnapshot) => {
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
        await deleteDoc(doc(db, "offers", id));
      } catch (error) {
        console.log("Error removing document: ", error);
      }
    }
  };

  useEffect(() => {
    fetchPost();
  }, [deleteOffer]);
  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700">All Offers</h2>
          <span className="text-xs text-gray-500">
            View offers / delete offers
          </span>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-3 py-2">ID</th>
                <th className="px-3 py-2">Offer Name</th>
                <th className="px-3 py-2">Price</th>
                <th className="px-3 py-2">Status</th>
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
                    <p className="whitespace-no-wrap">{item.name}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">₹ {item.price}.00</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    {new Date().getTime() >
                    new Date(item.datetime).getTime() ? (
                      <span className="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">
                        Expired
                      </span>
                    ) : (
                      <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                        Active
                      </span>
                    )}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p
                      className=" bg-red-400 text-white px-2 rounded flex justify-center"
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
