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
      <h1 className="text-3xl font-bold underline">Sample Text</h1>
      {/* <Navbar/> */}
      <Home></Home>
      </>
    )
  }
  export default App;
