import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./css/bootstrap/sb-admin-2.min.css";
import "./css/fontawesome-free/css/all.min.css"

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
