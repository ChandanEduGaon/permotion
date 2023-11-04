import { useState, useEffect } from "react";
import DiscoveryViewsComponent from "../components/widgets/DiscoveryViewsComponent";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../src/firebase";

const ServiceContainer = () => {
  const [service, setService] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "instagram")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setService(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <h1 className="p-6 text-2xl bg-gray-500 text-white">
        Instagram Services Price List🔥
      </h1>
      <div className="w-100 flex flex-col items-start sm:justify-center md:justify-start md:flex-row md:flex-wrap">
        {service.map((item, index) => (
          <DiscoveryViewsComponent
            key={index}
            data={item.list}
            title={item.title}
            des={item.des}
          />
        ))}
      </div>
    </>
  );
};

export default ServiceContainer;
