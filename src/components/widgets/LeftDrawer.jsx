import React from "react";
import { Drawer } from "rsuite";

const LeftDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState("Category");

  const handleOpen = (key) => {
    setOpen(true);
    setCategory(key);
  };
  return (
    <>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm cursor-pointer"
        onClick={() => handleOpen("All")}
      >
        All
      </span>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm cursor-pointer"
        onClick={() => handleOpen("Youtube")}
      >
        Youtube
      </span>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm cursor-pointer"
        onClick={() => handleOpen("Facebook")}
      >
        Facebook
      </span>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm cursor-pointer"
        onClick={() => handleOpen("Instagram")}
      >
        Instagram
      </span>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm cursor-pointer"
        onClick={() => handleOpen("X")}
      >
        X
      </span>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm cursor-pointer"
        onClick={() => handleOpen("Spotify")}
      >
        Spotify
      </span>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm cursor-pointer"
        onClick={() => handleOpen("TikTok")}
      >
        TikTok
      </span>

      <Drawer
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
        size="xs"
      >
        <Drawer.Header>
          <Drawer.Title>{category}</Drawer.Title>
        </Drawer.Header>
        <div></div>
      </Drawer>
    </>
  );
};

export default LeftDrawer;
