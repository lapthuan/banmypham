import React from "react";
import "./HomePage.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import Carts from "./Cart";
import Promotion from "./Promotion";
import MostSearch from "./mostsearch";
import CartSale from "./CartSale";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listProducts } from "../../redux/action/productActions";
import { listbrand } from "../../redux/action/brandActions";
import { listCategory } from "../../redux/action/categoryActions";
function HomePage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;
  const brandlist = useSelector((state) => state.brandList);
  const { brands } = brandlist;
  const categorylist = useSelector((state) => state.categoryList);
  const { categorys } = categorylist;
  useEffect(() => {
     dispatch(listProducts());
     dispatch(listbrand());
     dispatch(listCategory());
  }, []);
  const jsonDataCopy1 = [...products];
  const jsonDataCopy2 = [...products];
  const filteredProductsHot = jsonDataCopy1?.sort((a, b) => b.sold - a.sold) || [];
  const filteredProductsCreate = jsonDataCopy2?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) || [];
  return (
    <>
      <Slider />
      <div className="w-[90%] mx-auto">
        {/* <div>
          <CartSale />
        </div> */}

        <div className="">
          <Carts title={"Sản phẩm mới"} productfiter={filteredProductsCreate} />
        </div>

        <div>
          <Carts title={"Sản phẩm bán chạy"} productfiter={filteredProductsHot} />
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
        {/* 
        <div className="">
          <Carts />
        </div> */}
        <div className=" w-[90%] ml-auto mr-auto">
          <MostSearch />
        </div>
          {/* <div className="mb-[5%]">
            <Carts />
          </div> */}
        <div className="w-[90%] ml-auto mr-auto mb-5 pt-5 lg:flex md:hidden hidden">
          <Promotion />
        </div>
      </div>
    </>
  );
}

export default HomePage;
