import React, { useState, useEffect } from "react";
import "./css/UserInfor.css";
import { Link } from "react-router-dom";
import UsrAcount from "./UserAcount";
import User from "./User";
import UserHistory from "./UserHistory";
import "moment-timezone";
import { Button, Input, Space, Select } from "antd";
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
                      <div className="text-center ">Cập nhật địa chỉ </div>
                    </div>
                    <div>
                      <div className="Ivite_loho ">

                        <div class="relative h-10 w-72 min-w-[200px]">
                          <select style={{ borderWidth: "1px", }} class="peer h-full w-full rounded-[7px] border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-[#fe2c6d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                            <option value="brazil">Brazil</option>
                            <option value="bucharest">Bucharest</option>
                            <option value="london">London</option>
                            <option value="washington">Washington</option>
                          </select>
                          <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Select a City
                          </label>
                        </div>
                        <div className="text-left ">
                          <Select
                            showSearch
                            style={{
                              width: 200,
                            }}
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                              {
                                value: '1',
                                label: 'Not Identified',
                              },
                              {
                                value: '2',
                                label: 'Closed',
                              },
                              {
                                value: '3',
                                label: 'Communicated',
                              },
                              {
                                value: '4',
                                label: 'Identified',
                              },
                              {
                                value: '5',
                                label: 'Resolved',
                              },
                              {
                                value: '6',
                                label: 'Cancelled',
                              },
                            ]}
                          />
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
