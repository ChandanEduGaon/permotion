import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/layouts/Home";
import Services from "./components/layouts/Services";
import About from "./components/layouts/About";
import History from "./components/layouts/History";
import Orders from "./components/layouts/Orders";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Profile from "./components/layouts/Profile";

const App = () => {
  return (
    <Router>
      <div className="w-screen h-screen">
        <Header />
        <div className="w-[100%] h-[80%] overflow-auto">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;