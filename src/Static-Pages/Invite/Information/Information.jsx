import React, { useState } from "react";
import "./Information.css";
import { BsShop } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";
const Information = () => {
  return (
    <>
      <div className=" mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="relative overflow-hidden bg-no-repeat bg-cover CInfor">
            <div className="Infor_style"></div>
            <div className="text-white mt-32 relative leading-[40px] lg:text-[30px] md:text-[30px] text-[25px]">
              Xin chào, Luxubu giúp gì được cho bạn?
            </div>
            <h6 className="text-white relative mt-3">
              Thông tin về Luxubu, hướng dẫn mua hàng
            </h6>
          </div>
          <div className="text-center justify-center flex ">
            <div className="Infor">
              <div className="info_item w-[50%]">
                <div className="ml-auto mr-auto">
                  <BsShop size="40px" />
                </div>
                <div className="text-[13px] font-bold">
                  Thông tin về Lixibox
                </div>
                <div className="text-[13px] text-[#4D4E4F]">
                  Giới thiệu, Điều khoản và Quy định, Chính sách Bảo mật, Tuyển
                  dụng
                </div>
              </div>
              <div className="info_item w-[50%]">
                <div className="ml-auto mr-auto">
                  <SlHandbag size="40px" />
                </div>
                <div className="text-[13px] font-bold">Hướng dẫn mua hàng</div>
                <div className="text-[13px] text-[#4D4E4F]">
                  Chương trình tặng Gift Card, mua hàng trên mọi nền tảng
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Information;
