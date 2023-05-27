import React, { useState } from "react";
import "./css/User.css";
import { Link } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { RiCoupon3Line } from "react-icons/ri";
import imgUser from "../../Image/level-member.webp";
const User = () => {
  const userName = localStorage.getItem("username") || "";
  const userEmail = localStorage.getItem("useremail") || "";
  const userMobile = localStorage.getItem("usermobile") || "";
  const userFirstName = localStorage.getItem("userfirstname") || "";

  const userCreate = localStorage.getItem("usercreatedAt") || "";
  return (
    <>
      <div className="flex-col">
        <div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="rounded-circle mx-auto"
            style={{ width: "100px" }}
            fluid
          />
          <div className="font-bold text-black mt-2 text-[20px]">
            {userFirstName + " " + userName}
          </div>
          <div className="d-flex justify-content-center mb-2 block text-center">
            <div className="inline-block h-[18px] w-auto mt-1">
              <img src={imgUser} alt="" className="h-[20px] block w-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
