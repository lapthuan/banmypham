import React from "react";
import "./HomePage.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import Carts from "./Cart";
import Promotion from "./Promotion";
import MostSearch from "./mostsearch";
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

      <div className="magazine mt-5">
        <div className="flex flex-wrap">
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

      {/* <div className="diffimages" onClick={handleredirect}>
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
      </div> */}

      <div className="" onClick={handleredirect}>
        <Carts />
      </div>
      <div className="mt-40 w-[90%] ml-auto mr-auto">
        <MostSearch />
      </div>
      <div className="mb-[10%]" onClick={handleredirect}>
        <Carts />
      </div>
      <div className="w-[90%] ml-auto mr-auto mb-5">
        <Promotion />
      </div>
    </>
  );
}

export default HomePage;
