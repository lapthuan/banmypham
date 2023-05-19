import { useState } from "react";
import moment from "moment";

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

export const UserInfo = () => {
  // const userData1 = localStorage.getItem("token") || "";
  // const [userId1, userEmail1, userPassword1] = userData1.split(":");

  const userName = localStorage.getItem("username") || "";
  const userEmail = localStorage.getItem("useremail") || "";
  const userMobile = localStorage.getItem("usermobile") || "";
  const userFirstName = localStorage.getItem("userfirstname") || "";

  const userCreate = localStorage.getItem("usercreatedAt") || "";
  return (
    <div>
      <section
        style={{
          backgroundColor: "#f4f5f7",
          backgroundImage:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
        }}
      >
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle mx-auto"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1 mt-2">{userName}</p>

                  <div className="d-flex justify-content-center mb-2"></div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Họ tên</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userFirstName + " " + userName}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Địa chỉ Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userEmail}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Số điện thoại</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userMobile}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Ngày tạo tài khoản</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {moment(userCreate).format("DD/MM/YYYY")}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};
