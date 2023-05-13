import React from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// import { Router } from "express";

export default function App() {
  const [user, setLoginUser] = useState({})
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            < Route exact path="/" element={
                user && user._id ?  <Homepage /> : <Login setLoginUser={setLoginUser} />
              
            } /> 
              
          
            <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
