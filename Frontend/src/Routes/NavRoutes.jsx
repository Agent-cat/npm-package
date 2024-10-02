import React from "react";
import { Route, Routes } from "react-router";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import About from "../Pages/About";
import Home from "../Pages/Home";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/About" element={<About />} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
  );
};

export default NavRoutes;
