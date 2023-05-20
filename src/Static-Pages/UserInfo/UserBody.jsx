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
const UserBody = ({ setTab, tab }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  console.log(tab);
  return (
    <>
      <div className="flex flex-col bg-[#f5f6f6] pt-2">
        <div className="bg-white rounded-[8px]">
          <div className="br w-[100%] h-[44px] bg-white flex">
            <div className="item_us">
              <div className="flex">
                <div
                  className={`User_item ${tab === 1 ? "active" : ""}`}
                  onClick={() => setTab(1)}
                >
                  Tất cả
                </div>
                <div
                  className={`User_item ${tab === 2 ? "active" : ""}`}
                  onClick={() => setTab(2)}
                >
                  Chưa thanh toán
                </div>
                <div
                  className={`User_item ${tab === 3 ? "active" : ""}`}
                  onClick={() => setTab(3)}
                >
                  Đã xác nhận
                </div>
                <div
                  className={`User_item ${tab === 4 ? "active" : ""}`}
                  onClick={() => setTab(4)}
                >
                  Đang đợi giao hàng
                </div>
                <div
                  className={`User_item ${tab === 5 ? "active" : ""}`}
                  onClick={() => setTab(5)}
                >
                  Đã nhận hàng{" "}
                </div>
                <div
                  className={`User_item ${tab === 6 ? "active" : ""}`}
                  onClick={() => setTab(6)}
                >
                  Đã hủy
                </div>
                <div
                  className={`User_item ${tab === 7 ? "active" : ""}`}
                  onClick={() => setTab(7)}
                >
                  Đã trả hàng
                </div>
              </div>
            </div>
          </div>
          <div>
            {tab == 1 ? (
              <div className="Ivite_loho ">Trang chủ</div>
            ) : tab == 2 ? (
              <div className="Ivite_loho ">Chết em</div>
            ) : tab == 3 ? (
              <div className="Ivite_loho ">Chết em 3</div>
            ) : tab == 4 ? (
              <div className="Ivite_loho ">Chết em 4</div>
            ) : tab == 5 ? (
              <div className="Ivite_loho ">Chết em 5</div>
            ) : tab == 6 ? (
              <div className="Ivite_loho ">Chết em 6</div>
            ) : (
              <div className="Ivite_loho ">Chết em 7</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBody;
