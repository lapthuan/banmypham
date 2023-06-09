import React, { useEffect } from "react";
import "./Brands.css";
// import {useRef} from 'react'
import { Link } from "react-router-dom";
import logo1 from "./imageBrand/Nivea_logo.svg.png";
import logo2 from "./imageBrand/Vichy_logo.webp";
import logo3 from "./imageBrand/logo.png";
import logo4 from "./imageBrand/download.png";
import { useDispatch, useSelector } from "react-redux";
import { listbrand } from "../../redux/action/brandActions";

function Brands() {
  const dispatch = new useDispatch()
  const brandlist = useSelector((state) => state.brandList);
  const { brands } = brandlist;
  useEffect(() => {
    if (!brands || brands?.length == 0)
      dispatch(listbrand());
  }, [])

  return (
    <>
      <div className="w-[80%]  mx-auto">


        <div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 mt-10">
            {brands?.map((item) => (
              <Link to={`/brands/${item._id}`}>
                <div className="BrandsCard overflow-hidden " key={item._id}>
                  <div className="flex ">
                    <div className="w-[70%] h-[100px] overflow-hidden">
                      <img src={item.images?.url} alt="" className="h-auto max-w-full rounded-full " />
                    </div>
                    <div className="mt-3 ml-3 flex-col">
                      <div className="text-[20px]">{item.title}</div>
                      <div className="mt-2 text-left leading-normal">
                        {item.description.slice(0, 40)}...
                      </div>
                    </div>
                  </div>
                  <button class="card-button">Xem sản phẩm</button>
                </div>
              </Link>
            ))}

          </div>
        </div>

      </div>
    </>
  );
}

export default Brands;
