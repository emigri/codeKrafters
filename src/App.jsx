import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./components/Products.json";
import "./components/SiteContent.json";

export default class App extends Component {
  render() {
    return <h1 className="text-3xl font-bold underline">Sample Text</h1>;
  }
}
