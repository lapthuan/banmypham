import { useState } from "react";
import "./UserInfor.css";
import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import UsrAcount from "./UserAcount";
import User from "./User";
import UserBody from "./UserBody";
import UserHistory from "./UserHistory";
export const UserInfo = () => {
  return (
    <div>
      <section
        style={{
          backgroundColor: "#f4f5f7",
          backgroundImage:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
        }}
      >
        <div className="Iv-container">
          <div className="Iv-style">
            <div className="wrapLayout">
              <div className="flex flex-wrap justify-between">
                <div className=" mt-2 w-[30%]">
                  <div className="UserNav">
                    <User />
                  </div>
                  <div className="mt-3 UserNavHis">
                    <UserHistory />
                  </div>
                  <div className="mt-3 UserAC pb-3">
                    <UsrAcount />
                  </div>
                </div>
                <div className="main_styler w-[100%] mb-2">
                  <UserBody />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
