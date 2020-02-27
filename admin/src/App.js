import React from 'react';
import { BrowserRouter } from "react-router-dom";
import "./css/bootstrap/sb-admin-2.min.css";
import "./css/fontawesome-free/css/all.min.css"
import Navbar from "./components/Navbar";
import Routes from "./Routes";

function App() {
  return (
    <div className="App" id="wrapper">
      <BrowserRouter >
        <Navbar />
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
