import React from "react";
import "./HomePage.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import Carts from "./Cart";
import Promotion from "./Promotion";
import MostSearch from "./mostsearch";
import CartSale from "./CartSale";
function HomePage() {
  return (
    <>
      <Slider />
      <div className="w-[90%] mx-auto">
        <div>
          <CartSale />
        </div>
        <div>
          <Carts />
        </div>

        <div className="">
          <Carts />
        </div>

        <div className="magazine mt-5">
          <div className="flex flex-wrap ">
            <div className="w-full sm:w-1/2 my-2">
              <img
                src="https://upload.lixibox.com/system/banners/covers/000/001/437/medium/1672814902.jpg"
                alt="alt"
              />
            </div>
            <div className="w-full sm:w-1/2 my-2">
              <img
                src="https://upload.lixibox.com/system/pictures/files/000/080/669/original/1673235292.jpg?v=1"
                alt="alt"
              />
            </div>
            /
          </div>
        </div>

        <div className="">
          <Carts />
        </div>
        <div className=" w-[90%] ml-auto mr-auto">
          <MostSearch />
        </div>
        <div className="mb-[5%]">
          <Carts />
        </div>
        <div className="w-[90%] ml-auto mr-auto mb-5 pt-5 lg:flex md:hidden hidden">
          <Promotion />
        </div>
      </div>
    </>
  );
}

export default HomePage;
