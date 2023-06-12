import React, { useEffect } from "react";
import "./Brands.css";
// import {useRef} from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listbrand } from "../../redux/action/brandActions";
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineShoppingCart,
} from "react-icons/ai";
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
      <nav
        class="container w-[80%] flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg mx-auto"
        aria-label="Breadcrumb"
      >
        <ol class="inline-flex pt-2 items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <Link
              to={"/"}
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#fe2c6d] "
            >
              <AiOutlineHome />
              <div class="ml-1 text-sm font-medium text-gray-700 hover:text-[#fe2c6d] md:ml-2 ">
                Trang chủ{" "}
              </div>
            </Link>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <Link
                to={"/Brands"}
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#fe2c6d] "
              >
                <AiOutlineShoppingCart />
                <div class="ml-1 text-sm font-medium text-gray-700 hover:text-[#fe2c6d] md:ml-2 ">
                  Thương hiệu{" "}
                </div>
              </Link>
            </div>
          </li>

        </ol>
      </nav>
      <div className="w-[80%]  mx-auto">


        <div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 mt-10">
            {brands?.map((item) => (
              <Link to={`brands/${item._id}`} className="flex justify-center">
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
