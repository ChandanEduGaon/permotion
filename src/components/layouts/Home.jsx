import { useState, useEffect } from "react";
import Hero from "../common/Hero";
import Offer from "../widgets/Offer";
import { Divider } from "rsuite";
import LeftDrawer from "../widgets/LeftDrawer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";


const Home = () => {
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

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="w-[100%] h-[100%]">
      <Hero />
      <div className="w-[100%] bg-white flex flex-col justify-center items-center py-10">
        <span className="max-w-[70%] text-center font-light md:text-xl">
          Lorem <span className="text-purple-600 font-normal md:text-2xl">20+</span> ipsum
          dolor sit amet Lorem, ipsum.
        </span>
        <div className="w-[100%] flex justify-center items-center overflow-x-scroll gap-6 pt-5">
          <img
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="yt"
            className="w-[20%] md:w-[10%]"
          />
          <img
            src="https://images.hindustantimes.com/tech/img/2023/09/21/1600x900/fb_1695273515215_1695273522698.jpg"
            alt="yt"
            className="w-[20%] md:w-[10%]"
          />
          <img
            src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg"
            alt="yt"
            className="w-[10%] md:w-[5%]"
          />
        </div>
      </div>
      <Divider>Latest offer!</Divider>
      <div className="w-[100%] bg-white flex justify-center items-center py-5 gap-3 flex-wrap">
        {offers.map((item, index) => (
          <Offer key={index} data={item} />
        ))}
      </div>
      <Divider>Choose your service</Divider>
      <div className="w-[100%] bg-white flex justify-center items-center py-5 gap-3 flex-wrap">
        <LeftDrawer />
      </div>
    </div>
  );
};

export default Home;

// anwa hqsx gerz trqj
