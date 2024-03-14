import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Products from './components/Products.json';
import SiteContent from './components/SiteContent.json';

import Home from './components/pages/Home' 

import '../src/App.css';

export default class App extends Component {
  render() {
    return (
      <>
      <h1 className="text-3xl font-bold underline">Sample Text</h1>
      <Home></Home>
      </>
    )
  }
}