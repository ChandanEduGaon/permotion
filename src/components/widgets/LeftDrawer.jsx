import React from "react";
import { Drawer, Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";

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
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm"
        onClick={() => handleOpen("All")}
      >
        All
      </span>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm"
        onClick={() => handleOpen("Youtube")}
      >
        Youtube
      </span>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm"
        onClick={() => handleOpen("Facebook")}
      >
        Facebook
      </span>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm"
        onClick={() => handleOpen("Instagram")}
      >
        Instagram
      </span>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm"
        onClick={() => handleOpen("X")}
      >
        X
      </span>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm"
        onClick={() => handleOpen("Spotify")}
      >
        Spotify
      </span>
      <span
        className="bg-purple-600 px-4 py-1 rounded text-white text-sm"
        onClick={() => handleOpen("TikTok")}
      >
        TikTok
      </span>

      <Drawer
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
        size="full"
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
