import React, { useState, useEffect } from "react";
import "./css/UserInfor.css";
import { Link } from "react-router-dom";
import UsrAcount from "./UserAcount";
import User from "./User";
import UserHistory from "./UserHistory";
import "moment-timezone";
import { Button, Input, Space } from "antd";
import Modal from "react-modal";
const EditMap = () => {
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
                      <div className="text-center ">Cập nhật mật khẩu </div>
                    </div>
                    <div>
                      <div className="Ivite_loho ">
                        <div className="text-left ">
                          <label className="ml-2 mb-2">Tên người nhận: </label>
                          <input
                            type="text"
                            className="w-[50%] ml-2 placeholder:text-black border-b-2 color-[black]"
                          />
                        </div>
                        <div className="text-left mt-2 ">
                          <label className="ml-2 mb-2">Số điện thoại: </label>
                          <input
                            type="text"
                            className="w-[50%] ml-2 placeholder:text-black border-b-2 color-[black]"
                          />
                        </div>
                        <div className="text-left ">
                          <label className="ml-2 mb-2">
                            Tỉnh / Thành phố:{" "}
                          </label>
                          <select
                            id="countries"
                            class="bg-white border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                        </div>
                        <div className="text-left ">
                          <label className="ml-2 mb-2">Quận / Huyện: </label>
                          <select
                            id="countries"
                            class="bg-white border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                        </div>
                        <div className="text-left ">
                          <label className="ml-2 mb-2">Phường / Xã: </label>
                          <select
                            id="countries"
                            class="bg-white border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                        </div>
                        <div className="text-left mt-2 ">
                          <label className="ml-2 mb-2">
                            Địa chỉ giao hàng:{" "}
                          </label>
                          <input
                            type="text"
                            className="w-[50%] ml-2 placeholder:text-black border-b-2 color-[black]"
                          />
                        </div>
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

export default EditMap;
