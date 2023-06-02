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
                  <div className="bg-white rounded-[8px] ">
                    <div className="w-[100%] h-[44px] bg-white text-[25px] text-black mt-2">
                      <div className="text-center ">Cập nhật địa chỉ </div>
                    </div>
                    <div>
                      <div className="Ivite_loho">
                        <div className="text-left my-2">
                          <label className="my-1">Tỉnh / Thành phố: </label>
                          <br />
                          <Select
                            showSearch
                            style={{
                              width: 200,
                            }}
                            placeholder="Chọn Tỉnh hoặc Thành phố"
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

                        <div className="text-left my-2">
                          <label className="my-1">Quận / Huyện: </label>
                          <br />
                          <Select
                            showSearch
                            style={{
                              width: 200,
                            }}
                            placeholder="Chọn Quận / Huyện"
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
                        <div className="text-left my-2">
                          <label className="my-1 ">Phường / Xã: </label>
                          <br />
                          <Select
                            showSearch
                            style={{
                              width: 200,
                            }}
                            placeholder="Chọn Phường / Xã"
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
                        <div className="text-left my-2 ">
                          <label className="my-1">
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
