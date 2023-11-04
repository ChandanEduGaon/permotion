import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/layouts/Home";
import About from "./components/layouts/About";
import Orders from "./components/layouts/Orders";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Profile from "./components/layouts/Profile";
import Custom from "./components/layouts/Custom";
import Google from "./pages/Google";
import Instagram from "./pages/Instagram";
import Facebook from "./pages/Facebook";
import Youtube from "./pages/Youtube";
import Services from "./components/layouts/Services";
import AddServiceForm from "./pages/AddServiceForm";
import AddService from "./pages/AddService";
import ListService from "./pages/ListService";
import Offers from "./pages/Offers";

const App = () => {
  return (
    <Router>
      <div className="w-screen h-screen">
        <Header />
        <div className="w-[100%] h-[80%] overflow-auto">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/admin900" element={<AddServiceForm />} />
            <Route exact path="/serviceadmin01" element={<AddService />} />
            <Route exact path="/serviceadmin01list" element={<ListService />} />
            <Route exact path="/adminoffers900" element={<Offers />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/custom" element={<Custom />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/google" element={<Google />} />
            <Route exact path="/instagram" element={<Instagram />} />
            <Route exact path="/facebook" element={<Facebook />} />
            <Route exact path="/youtube" element={<Youtube />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
