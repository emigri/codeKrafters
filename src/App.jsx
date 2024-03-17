import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import ProductCatalogue from "./components/pages/Product-Catalogue";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Basket from "./components/pages/Basket";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MeetOurTeam from "./components/pages/MeetOurTeam";
// import Product from "./components/pages/Product-Card";
// import Products from "./components/Products.json";
// import SiteContent from "./components/SiteContent.json";




function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact " element={<Contact />} />
          <Route path="/Basket " element={<Basket />} />
          <Route path="/ProductCatalogue " element={<ProductCatalogue />} />
        </Routes>
      </Router>



      <Footer></Footer>
    </>
  );
}
export default App;
