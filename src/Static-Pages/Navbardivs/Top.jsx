import React from "react";
import "./Top.css";
import { FaTruck } from "react-icons/fa";
import { VscDeviceMobile } from "react-icons/vsc";
import { BsBagCheck } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
function Top() {
  return (
    <div>
      <div className="AdBottom_mainCon">
        <div className="AdBottom_innerCon">
          <div className="animator_div">
            <div size="25px" />
            <section className="animation">
              <div className="first">
                <div>Free Quà 700.000đ đơn từ 1 Triệu - Nhập APR1000</div>
              </div>
              <div className="second">
                <div>Free Quà 1.295.000đ đơn từ 2 Triệu - Nhập APR2000</div>
              </div>
              <div className="third">
                <div>Cập nhật ngày sinh nhật để nhận quà hằng năm</div>
              </div>
            </section>
          </div>
          <div className="Ab_div">
            <div className="AdBottom_div">
              <div size="25px" />
              <FaStore />
              <p>Cửa hàng</p>
            </div>
            <div className="AdBottom_div">
              <div size="25px" />
              <FaTruck />
              <p>Kiểm tra đơn hàng </p>
            </div>
            <div className="AdBottom_div">
              <div size="25px" />
              <BsCoin /> <p>Luxucoin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
