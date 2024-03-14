import React, { Component} from 'react';
import Navbar from "./components/Navbar";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Products from '../Products.json';
import StiteContent from '../SiteContent.json';


export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <div className='w-full h-screen'></div>
      </div>
    );
  }
}