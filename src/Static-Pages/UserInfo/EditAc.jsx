import React, { useState, useEffect } from "react";
import "./css/UserInfor.css";
import { Link } from "react-router-dom";
import UsrAcount from "./UserAcount";
import User from "./User";
import moment from "moment";
import UserBody from "./UserBody";
import UserHistory from "./UserHistory";
import "moment-timezone";

const EditAC = () => {
  const userName = localStorage.getItem("username") || "";
  const userEmail = localStorage.getItem("useremail") || "";
  const userMobile = localStorage.getItem("usermobile") || "";
  const userFirstName = localStorage.getItem("userfirstname") || "";

  const userCreate = localStorage.getItem("usercreatedAt") || "";
  const [Userdate, setUserDate] = useState("");
  useEffect(() => {
    // Giả sử bạn có giá trị ngày từ API là "2023-05-18"
    const apiDate = { userCreate };
    const formattedDate = moment(apiDate).format("YYYY-MM-DD");
    setUserDate(formattedDate);
  }, []);

  const handleDateChange = (event) => {
    setUserDate(event.target.value);
  };
  return (
    <>
      <div className="Iv-container">
        <div className="Iv-style">
          <div className="wrapLayout">
            <div className="flex flex-wrap justify-between">
              <div className=" mt-2 w-[30%]">
                <div className="UserNav">
                  <User />
                </div>
                {/* <div className="mt-3 UserNavHis">
                  <UserHistory />
                </div> */}
                <div className="mt-3 UserAC pb-3">
                  <UsrAcount />
                </div>
              </div>
              <div className="main_styler w-[100%] mb-2">
                <div className="flex flex-col bg-[#f5f6f6] pt-2">
                  <div className="bg-white rounded-[8px]">
                    <div className="w-[100%] h-[44px] bg-white text-[25px] text-black mt-2">
                      <div className="text-center ">
                        Chỉnh sửa thông tin cá nhân
                      </div>
                    </div>
                    <div>
                      <div className="Ivite_loho ">
                        <div className="text-left ">
                          <label>Tên tài khoản: </label>
                          <input
                            type="text"
                            placeholder={userFirstName + " " + userName}
                            className=" ml-2 placeholder:text-black border-b-2 color-[black]"
                          />
                        </div>
                        <div className="text-left mt-3">
                          <label>Email: </label>
                          <input
                            type="email"
                            placeholder={userEmail}
                            className="w-[40%] ml-2 placeholder:text-black border-b-2 color-[black]"
                          />
                        </div>
                        <div className="text-left mt-3">
                          <label>Số điện thoại: </label>
                          <input
                            required
                            type="number"
                            placeholder={userMobile}
                            className="ml-2 placeholder:text-black border-b-2 color-[black]"
                          />
                        </div>
                        <div className="text-left mt-3">
                          <label>Ngày tạo tài khoản: </label>
                          <input
                            required
                            type="date"
                            value={Userdate}
                            // onChange={handleDateChange}
                            className="ml-2 placeholder:text-black"
                          />
                        </div>
                        {/* <div className="text-left mt-3">
                          <label>Mật khẩu: </label>
                          <input
                            required
                            type="password"
                            className="ml-2 placeholder:text-black border-b-2 color-[black]"
                          />
                        </div> */}
                        <button className="btn btn-primary m-4">
                          Cập nhật
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAC;
