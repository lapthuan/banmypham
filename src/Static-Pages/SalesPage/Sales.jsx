import React from "react";
import imgError from "../../Image/imgError.jpg";
import "./Sales.module.css";
import { AiOutlineHeart, AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import image from "../../Image/1683787781.webp";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilTer from "./filter";
import { listProducts } from "../../redux/action/productActions";
import { useEffect } from "react";
import { listbrand } from "../../redux/action/brandActions";
import { listCategory } from "../../redux/action/categoryActions";

const Sales = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;
  const brandlist = useSelector((state) => state.brandList)
  const { brands } = brandlist
  const categorylist = useSelector((state) => state.categoryList)
  const { categorys } = categorylist
  useEffect(() => {
    if (!products || products?.length == 0)
      dispatch(listProducts());
    if (!brands || brands?.length == 0)
      dispatch(listbrand())
    if (!categorys || categorys?.length == 0)
      dispatch(listCategory());

  }, []);

  return (
    <div className="main__sales">
      <nav class="container flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg  " aria-label="Breadcrumb">
        <ol class="inline-flex pt-2 items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <Link to={"/"} class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#fe2c6d] ">
              <AiOutlineHome />
              <div class="ml-1 text-sm font-medium text-gray-700 hover:text-[#fe2c6d] md:ml-2 ">Trang chủ  </div>
            </Link>
          </li>
          <li>
            <div class="flex items-center">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>

              <Link to={"/Sale"} class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#fe2c6d] ">
                <AiOutlineShoppingCart />
                <div class="ml-1 text-sm font-medium text-gray-700 hover:text-[#fe2c6d] md:ml-2 ">Tất cả sản phẩm   </div>
              </Link>


            </div>
          </li>

        </ol>
      </nav>

      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <aside className="md:w-1/3 lg:w-1/4 px-4 py-4">
            <div className="space-y-1">
              <div>

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
              {loading === false ? (<div className="mt-4 grid gap-y-10 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products?.length != 0 ? (
                  <>
                    {products?.map((item) => (

                      <div
                        key={item._id}
                        className="shadow-md shadow-red-300 min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-color-basic group-hover:opacity-75 lg:aspect-none lg:h-50"
                      >
                        <div>
                          <div className="wishlist px-2 py-2">
                            <AiOutlineHeart className="text-2xl text-[#fe2c6d]" />
                          </div>
                          <Link
                            to={`/Sale/${item._id}`}
                            className="group relative bg-color-card rounded-md shadow overflow-hidden"
                          >
                            <img
                              src={
                                item.images[0] === undefined
                                  ? imgError
                                  : item.images[0].url
                              }
                              className="rounded-lg"
                              alt="product_img"
                            />
                          </Link>
                        </div>
                        <hr className="w-[100%] mx-auto text-[#fe2c6d]" />
                        <Link
                          to={`/Sale/${item._id}`}
                          className="group relative bg-color-card rounded-md shadow overflow-hidden"
                        >
                          <div className="mt-2 flex justify-center pl-[10px] py-1 overflow-hidden">
                            <div>
                              <p className="text-sm text-[#3E4048] text-left">
                                {item.title.slice(0, 55)}...
                              </p>
                              <div className="text-left mt-2">
                                <Stars stars={item.totalrating} />
                              </div>
                              <p className="text-left text-black font-bold text-lg mt-2">
                                {item.price
                                  ? item.price.toLocaleString("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                  })
                                  : ""}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </>)
                  : (<div className="text-center">Không tìm thấy sản phẩm</div>)}

              </div>) : (
                <div>Loading...</div>
              )}


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
      </div >
    </div >
  )
};

export default Sales;
