import React from "react";
import MainNavbar from "../Static-Pages/MainNavbar/MainNavbar";
import Navbars from "../Static-Pages/Navbars/Navbars";
import Top from "../Static-Pages/Navbardivs/Top";
import Navbar from "../Static-Pages/Navbardivs/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function FinalNavbar() {
  return (
    <div style={{
      zIndex: 999,
      top: 0,
      backgroundColor: 'white'
    }}>

      <Navbars />
      <MainNavbar />
      <Top />
      <ToastContainer />
      {/* <Navbar/> */}
    </div>
  );
}

export default FinalNavbar;
