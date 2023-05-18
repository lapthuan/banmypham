import React, { useState } from "react";
import "./UserInfor.css";
import { Link } from "react-router-dom";
import {
  BsCoin,
  BsPersonPlus,
  BsJournalBookmarkFill,
  BsExclamationTriangle,
  BsChatText,
} from "react-icons/bs";
import img1 from "../../Image/Ivite1.jpg";
const UserBody = () => {
  return (
    <>
      <div className="flex flex-col bg-[#f5f6f6] pt-2">
        <div className="bg-white rounded-[8px]">
          <div className="br w-[100%] h-[44px] bg-white flex">
            <div className="item_us">
              <div className="flex">
                <div className="User_item">Tất cả</div>
                <div className="User_item">Chưa thanh toán</div>
                <div className="User_item">Đã xác nhận</div>
                <div className="User_item">Đang đợi giao hàng</div>
                <div className="User_item">Đã nhận hàng </div>
                <div className="User_item">Đã hủy</div>
                <div className="User_item">Đã trả hàng</div>
              </div>
            </div>
          </div>
          <div>
            <div className="Ivite_loho ">
                Chết em 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBody;
