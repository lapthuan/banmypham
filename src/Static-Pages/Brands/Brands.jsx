import React from "react";
import "./Brands.css";
// import {useRef} from 'react'
import { Link } from "react-router-dom";
import logo1 from "./imageBrand/Nivea_logo.svg.png";
import logo2 from "./imageBrand/Vichy_logo.webp";
import logo3 from "./imageBrand/logo.png";
import logo4 from "./imageBrand/download.png";

function Brands() {
  return (
    <>
      <div className="w-[80%]  mx-auto">
        {/* <Link to="/Holiday">
          <div id="v-main2">
            <p>A</p>
            <p>B</p>
            <p>C</p>
            <p>D</p>
            <p>E</p>
            <p>F</p>
            <p>G</p>
            <p>H</p>
            <p>I</p>
            <p>J</p>
            <p>K</p>
            <p>L</p>
            <p>M</p>
            <p>N</p>
            <p>O</p>
            <p>P</p>
            <p>Q</p>
            <p>R</p>
            <p>S</p>
            <p>T</p>
            <p>U</p>
            <p>V</p>
            <p>W</p>
            <p>X</p>
            <p>Y</p>
            <p>Z</p>
          </div>
        </Link> */}
        <Link to="/Holiday">
          <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 mt-10">
              <div className="BrandsCard  ">
                <div className="flex ">
                  <div className="w-[70%]">
                    <img src={logo1} alt="" className="w-[100px] h-[80px]" />
                  </div>
                  <div className="mt-3 ml-3 flex-col">
                    <div className="text-[20px]">NIVEA</div>
                    <div className="mt-2 text-left leading-normal">
                      Nhãn hiệu mỹ phẩm dưỡng thể chuyên về sản phẩm dưỡng da và
                      toàn thân
                    </div>
                  </div>
                </div>
                <button class="card-button">Xem sản phẩm</button>
              </div>
              <div className="BrandsCard">
                <div className="flex ">
                  <div className="w-[70%]">
                    <img
                      src={logo2}
                      alt=""
                      className="w-[100px] h-[80px] rounded-full "
                    />
                  </div>
                  <div className="mt-3 ml-3 flex-col">
                    <div className="text-[20px]">VICHY</div>
                    <div className="mt-2 text-left leading-normal">
                      Thương hiệu dược mỹ phẩm hàng đầu với các giải pháp giúp
                      da sáng khỏe
                    </div>
                  </div>
                </div>
                <button class="card-button">Xem sản phẩm</button>
              </div>
              <div className="BrandsCard">
                <div className="flex ">
                  <div className="w-[70%]">
                    <img
                      src={logo3}
                      alt=""
                      className="w-[100px] h-[80px]  rounded-full "
                    />
                  </div>
                  <div className="mt-3 ml-3 flex-col">
                    <div className="text-[20px]">BIORÉ</div>
                    <div className="mt-2 text-left leading-normal">
                      Thương hiệu chăm sóc da dành cho nữ giới
                    </div>
                  </div>
                </div>
                <button class="card-button">Xem sản phẩm</button>
              </div>
              <div className="BrandsCard">
                <div className="flex ">
                  <div className="w-[70%]">
                    <img
                      src={logo4}
                      alt=""
                      className="w-[100px] h-[80px] rounded-full "
                    />
                  </div>
                  <div className="mt-3 ml-3 flex-col">
                    <div className="text-[20px]">ANESSA</div>
                    <div className="mt-2 text-left leading-normal">
                      Anessa là thương hiệu mỹ phẩm cao cấp của Nhật Bản,trực
                      thuộc tập đoàn Shiseido
                    </div>
                  </div>
                </div>
                <button class="card-button">Xem sản phẩm</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Brands;
