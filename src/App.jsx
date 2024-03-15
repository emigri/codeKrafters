import React, { Component} from 'react';
import Navbar from "./components/Navbar";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

<<<<<<< HEAD
import Products from'./components/Products.json';
import './components/SiteContent.json';
=======
import Products from './components/Products.json';
import SiteContent from './components/SiteContent.json';
>>>>>>> 7c055a414ed6719671e5d89049025c99e2aa8b93

import Home from './components/pages/Home' 

import '../src/App.css';

export default class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <h1 className=''>sample</h1>
      <Navbar />
      <div className='w-full h-screen'></div>
      </div>
    );
=======
      <>
      <h1 className="text-3xl font-bold underline">Sample Text</h1>
      <Home></Home>
      </>
    )
>>>>>>> 7c055a414ed6719671e5d89049025c99e2aa8b93
  }
}