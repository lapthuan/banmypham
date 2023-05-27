import React from "react";
import imgError from "../../Image/imgError.jpg";
import "./Sales.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import TreeSelects from "./Treeselect";
import image from "../../Image/1683787781.webp";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilTer from "./filter";
import { listProducts } from "../../redux/action/productActions";
import { useEffect } from "react";

const Sales = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;
  useEffect(() => {
    dispatch(listProducts());
}, []);
  return loading === false ? (
    <div className="main__sales">
      <div className="navigation_tab ">
        <div className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mb-4 bg-gray-200 rounded ">
          <li className="inline-block px-1 py-2 ">
            <Link to="/" className=" text-text-color text-black">
              Trang chủ
            </Link>
          </li>
          <li className="inline-block px-1 py-2 ">
            <Link to="/allproduct" className=" text-text-color text-black ">
              / Tất cả sản phẩm
            </Link>
          </li>
        </div>
        {/* <span className={styles.home_hover}>Trang chủ</span> <span>/</span>{" "}
        <span>Tất cả sản phẩm</span> */}
      </div>

      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <aside className="md:w-1/3 lg:w-1/4 px-4 py-4">
            {/* <div className="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600">
              Lọc sản phẩm
            </div> */}
            <div className=" md:block px-6  ">
              <div className="font-semibold mb-2 text-left text-black text-[20px] font-serif">
                Danh mục
              </div>
            </div>
            <div className="space-y-1">
              <div>
                <div className="items-center">
                  <TreeSelects />
                </div>
                <div className="hidden md:block">
                  <img src={image} alt="" />
                </div>
              </div>
            </div>
          </aside>
          <main className="md:w-2/3 lg:w-3/4 w-4/4 px-3">
            <div>
              <div className="mt-4 hidden md:block">
                <FilTer />
              </div>
              <div className="mt-4 grid gap-y-10 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products?.map((item) => (
                  <Link
                    to={`/Sale/${item._id}`}
                    className="group relative bg-color-card rounded-md shadow overflow-hidden"
                  >
                    <div
                      key={item._id}
                      className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-color-basic group-hover:opacity-75 lg:aspect-none lg:h-50"
                    >
                      <div>
                        <div className="wishlist">
                          <AiOutlineHeart />
                        </div>
                        <img
                          src={
                            item.images[0] === undefined
                              ? imgError
                              : item.images[0].url
                          }
                          className="rounded-lg"
                          alt="product_img"
                        />
                      </div>
                      <hr className="w-[100%] mx-auto" />
                      <div className="mt-2 flex justify-center pl-[10px] py-1 overflow-hidden">
                        <div>
                          <p className="text-sm text-[#3E4048] text-left">
                            {item.title.slice(0, 55)}...
                          </p>
                          <div className="text-left mt-2">
                            <Stars stars={item.totalrating} />
                          </div>
                          <p className="text-left text-black font-bold mt-2">
                            {item.price
                              ? item.price.toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              })
                              : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* <div
            className={`${styles.sort_page} ${styles.responsive__sort_page}`}
            style={{ marginTop: "50px" }}
          >
            <div className={`${styles.sorting} ${styles.hide__sorting}`}></div>

            <div className={styles.pagination}>
              <Pagination setCurrentPage={setCurrentPage} />
            </div>
          </div> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Sales;
