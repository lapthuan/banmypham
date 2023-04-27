import React from "react";
import "./HomePage.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import Carts from "./Cart";

function HomePage() {
  const navigate = useNavigate();
  const handleredirect = () => {
    navigate("/Sale");
  };

  return (
    <>
      <Slider />

      <div>
        <Carts />
      </div>

      <div className="mb-[10%]">
        <Carts />
      </div>

      {/* <div className="flex justify-between">
        <div>
          <img
            src="https://upload.lixibox.com/system/banners/covers/000/001/594/medium/1682066047.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://upload.lixibox.com/system/banners/covers/000/001/594/medium/1682066047.jpg"
            alt=""
          />
        </div>
      </div> */}

      <div className="diffimages" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png"
            alt=""
          />
        </div>
      </div>

      <div className="" onClick={handleredirect}>
        <Carts />
      </div>
      <div className="mb-[20%]" onClick={handleredirect}>
        <Carts />
      </div>
    </>
  );
}

export default HomePage;
