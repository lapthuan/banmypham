import React, { useState } from "react";
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
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);


  
  useEffect(() => {
    dispatch(listProducts());
    dispatch(listbrand());
    dispatch(listCategory());
  }, []);
  const jsonDataCopy1 = [...products];
  const jsonDataCopy2 = [...products];
  const jsonDataCopy3 = [...products];
  const jsonDataCopy4 = [...products];

  const addToRecentlyViewed = (product) => {
    const isProductExist = recentlyViewedProducts.some((prevProduct) => prevProduct.id === product.id);
    if (!isProductExist) {
      const updatedProducts = [product, ...recentlyViewedProducts.slice(0, 4)]; // Giới hạn danh sách sản phẩm vừa xem tối đa 5 sản phẩm
      setRecentlyViewedProducts(updatedProducts);
    }
  };


  const filteredProductsHot =
    jsonDataCopy1?.sort((a, b) => b.sold - a.sold) || [];
  const filteredProductsCreate =
    jsonDataCopy2?.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ) || [];

  const brandSales = jsonDataCopy3.reduce((acc, product) => {
    if (acc[product.brand]) {
      acc[product.brand] += product.sold;
    } else {
      acc[product.brand] = product.sold;
    }
    return acc;
  }, {});
  const brandSalesArray = Object.entries(brandSales);
  brandSalesArray.sort((a, b) => b[1] - a[1]);
  const mostSoldBrand =
    brandSalesArray.length > 0 ? brandSalesArray[0][0] : null;
  console.log(mostSoldBrand);
  const filteredProducts = jsonDataCopy3.filter(
    (product) => product.brand === mostSoldBrand
  );

  return (
    <>
      <Slider />
      <div className="w-[90%] mx-auto">
        {/* <div>
          <CartSale />
        </div> */}

        <div className="">
          <Carts title={"SẢN PHẨM MỚI"} productfiter={filteredProductsCreate} />
        </div>

        <div>
          <Carts
            title={"SẢN PHẨM BÁN CHẠY"}
            productfiter={filteredProductsHot}
          />
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
          <Carts
            title={"THƯƠNG HIỆU BÁN CHẠY"}
            productfiter={filteredProducts}
          />
        </div>
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
