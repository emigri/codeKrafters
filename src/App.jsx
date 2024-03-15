import React, { Component} from 'react';
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Product from './components/pages/Product-Card';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products.json';
import SiteContent from './components/SiteContent.json';


 function App (){
 
    return (
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact ' element={<Contact />} />
          <Route path='/Basket ' element={<Basket />} />
          <Route path='/ProductCatalogue ' element={<ProductCatalogue />} />

        </Routes>
      </Router>
      <h1 className="text-3xl font-bold underline">Sample Text</h1>
  
      <Home></Home>
      </>
    )
  }
  export default App;
