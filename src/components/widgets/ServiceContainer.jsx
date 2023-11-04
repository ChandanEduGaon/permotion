import React from "react";
import DiscoveryViewsComponent from "./DiscoveryViewsComponent";

const ServiceContainer = () => {
  const IndSkipViews = [
    {
      views: "🇮🇳5k YouTube Google Ads Real Skip Views",
      price: "1100rs",
      quality: "( video-length : Under 3:20sec )",
    },
    {
      views: "🇮🇳10k YouTube Google Ads Real Skip Views",
      price: "1900rs",
      quality: "( video-length : Under 3:20sec )",
    },
    {
      views: "🇮🇳50k YouTube Google Ads Real Skip Views",
      price: "6990rs",
      quality: "( video-length : Under 3:20sec )",
    },
    {
      views: "🇮🇳100k YouTube Google Ads Real Skip Views",
      price: "13500rs",
      quality: "( video-length : Under 3:20sec )",
    },
    {
      views: "🇮🇳500k YouTube Google Ads Real Skip Views",
      price: "60000rs",
      quality: "( video-length : Under 3:20sec )",
    },
    {
      views: "🇮🇳1Million YouTube Google Ads Real Skip Views",
      price: "120000rs",
      quality: "( video-length : Under 3:20sec )",
    },
    {
      views: "🇮🇳50k YouTube Google Ads Real Skip Views",
      price: "7500rs",
      quality: "( video-length : Under 4:00sec )",
    },
    {
      views: "🇮🇳100k YouTube Google Ads Real Skip Views",
      price: "13500rs",
      quality: "( video-length : Under 4:00sec )",
    },
    {
      views: "🇮🇳500k YouTube Google Ads Real Skip Views",
      price: "67000rs",
      quality: "( video-length : Under 4:00sec )",
    },
    {
      views: "🇮🇳1Million YouTube Google Ads Real Skip Views",
      price: "120000rs",
      quality: "( video-length : Under 4:00sec )",
    },
  ];
  const WorldSkipViews = [
    {
      views: "👉🏻5k Google Ads Skip Views",
      price: "900rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "👉🏻10k Google Ads Skip Views",
      price: "1700rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "👉🏻50k Skip Views",
      price: "4800rs",
      quality: "(Length 3:20Min Max)",
    },
    {
      views: "👉🏻100k Skip Views",
      price: "9000rs",
      quality: "(Length 3:20Min Max)",
    },
    {
      views: "👉🏻500k Skip Views",
      price: "41500rs",
      quality: "(Length 3:20Min Max)",
    },
    {
      views: "👉🏻1M Skip Views",
      price: "75000rs",
      quality: "(Length 3:20Min Max)",
    },
    {
      views: "👉🏻50k Skip Views",
      price: "5100rs",
      quality: "(Length 3:20Min+)",
    },
    {
      views: "👉🏻100k Skip Views",
      price: "9500rs",
      quality: "(Length 3:20Min+)",
    },
    {
      views: "👉🏻500k Skip Views",
      price: "45000rs",
      quality: "(Length 3:20Min+)",
    },
    {
      views: "👉🏻1M Skip Views",
      price: "90000rs",
      quality: "(Length 3:20Min+)",
    },
  ];

  const WorldDiscoveryViews = [
    {
      views: "🌎10k Worldwide Discovery Views",
      price: "2100rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🌎50k Worldwide Discovery Views",
      price: "7800rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🌎100k Worldwide Discovery Views",
      price: "15000rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🌎500k Worldwide Discovery Views",
      price: "75000rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🌎1M Worldwide Discovery Views",
      price: "120000rs",
      quality: "(Non Drop-Best Quality)",
    },
  ];
  const IndDiscoveryViews = [
    {
      views: "🇮🇳5k IND Discovery Views",
      price: "1450rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳10k IND Discovery Views",
      price: "2400rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳50k Discovery Views",
      price: "12000rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳100k Discovery Views",
      price: "19000rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳500k Discovery Views",
      price: "90000rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳1M Discovery Views",
      price: "150000rs",
      quality: "(Non Drop-Best Quality)",
    },
  ];
  const NorthIndDiscoveryViews = [
    {
      views: "🇮🇳10k IND Discovery Views",
      price: "2000rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳50k Discovery Views",
      price: "12000rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳100k Discovery Views",
      price: "21500rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳500k Discovery Views",
      price: "210000rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳1M Discovery Views",
      price: "165000rs",
      quality: "(Non Drop-Best Quality)",
    },
  ];
  const SingleStateIndDiscoveryViews = [
    {
      views: "🇮🇳10k IND Discovery Views",
      price: "3000rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳50k Discovery Views",
      price: "12500rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳100k Discovery Views",
      price: "23000rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳500k Discovery Views",
      price: "89000rs",
      quality: "(Non Drop-Best Quality)",
    },
    {
      views: "🇮🇳1M Discovery Views",
      price: "180000rs",
      quality: "(Non Drop-Best Quality)",
    },
  ];

  return (
    <>
      <h1 className="p-6 text-2xl bg-gray-500 text-white">Google Ads YouTube Views Price List🔥</h1>
      <div className="w-100 flex flex-col items-start sm:justify-center md:justify-start md:flex-row md:flex-wrap">
        <DiscoveryViewsComponent
          data={WorldSkipViews}
          service={"👉🏻🌎Worlwide Google Ads Skip Views🌎"}
          title={"World Skip Views"}
        />
        <DiscoveryViewsComponent
          data={IndSkipViews}
          service={"👉🏻🇮🇳Google Ads Indian Skip Views Price List🇮🇳"}
          title={"Indian Skip Views"}
        />
        <DiscoveryViewsComponent
          data={WorldDiscoveryViews}
          service={"👉🏻🌎 Worldwide Discovery Views🌎"}
          title={"Worldwide Discovery Views"}
        />
        <DiscoveryViewsComponent
          data={IndDiscoveryViews}
          service={
            "👉🏻🇮🇳Real 100% Genuine YouTube Google Ads INDIAN DISCOVERY Views🇮🇳 (With Likes, Subscribers, Comments)"
          }
          title={"Indian Discovery Views"}
        />
        <DiscoveryViewsComponent
          data={NorthIndDiscoveryViews}
          service={
            "👉🏻🇮🇳Real 100% Genuine YouTube Google Ads NORTH INDIA (3STATES+) DISCOVERY Views (With Likes, Subscribers, Comments)"
          }
          title={"North Indian Discovery Views"}
        />
        <DiscoveryViewsComponent
          data={SingleStateIndDiscoveryViews}
          service={
            "👉🏻🇮🇳Real 100% Genuine YouTube Google Ads SINGLE STATE INDIA DISCOVERY Views (With Likes, Subscribers, Comments)"
          }
          title={"Single State Indian Discovery Views"}
        />
      </div>
    </>
  );
};

export default ServiceContainer;
