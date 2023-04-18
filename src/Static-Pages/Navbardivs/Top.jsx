import React from "react";
import "./Top.css";
import { FaTruck } from "react-icons/fa";
import { VscDeviceMobile } from "react-icons/vsc";
import { BsBagCheck } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
function Top() {
  return (
    <div>
      <div className="AdBottom_mainCon">
        <div className="AdBottom_innerCon">
          <div className="AdBottom_div">
            <div size="25px" />
            <FaTruck />
            <p>Giao hàng miễn phí</p>
          </div>
          <div className="AdBottom_div">
            <div size="25px" />
            <FaUserFriends />
            <p>Giới thiệu bạn bè nhận ngay mã giảm</p>
          </div>
          <div className="AdBottom_div">
            <div size="25px" />
            <BsBagCheck />
            <p>Khách hàng giảm 20%</p>
          </div>
          <div className="AdBottom_div">
            <div size="25px" />
            <VscDeviceMobile /> <p>Tải ứng dụng qua App</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
