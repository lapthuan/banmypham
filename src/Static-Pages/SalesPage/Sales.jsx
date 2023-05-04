import React from "react";
import { useState } from "react";
import axios from "axios";
import imgError from "../../Image/imgError.jpg";
import styles from "./Sales.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect } from "react";
import Stars from "./Stars";
import Pagination from "./Pagination";

import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/action/productActions";

const Sales = () => {
  const [products, setProducts] = useState([]);
  const [sort_x, setSort_x] = useState("");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  useEffect(() => {
    if (productList) {
      if (productList.products) setProducts([...productList.products]);
    }
  }, [productList]);

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  console.log(productList);
  return (
    <div className={styles.main__sales}>
      <div className={styles.navigation_tab}>
        <span className={styles.home_hover}>Trang chủ</span> <span>/</span>{" "}
        <span>Tất cả sản phẩm</span>
      </div>
      <div className={styles.main__products}>
        <div className={styles.products_area}>
          <div className={styles.all__main__products}>
            <Link to={`/Sale/123213`} className={"rounded-xl shadow-2xl p-1"}>
              <div className={styles.each_product}>
                <div>
                  <div className={styles.wishlist}>
                    <AiOutlineHeart />
                  </div>
                  <img
                    src={imgError}
                    className={"rounded-2xl shadow-2xl h-[325px]"}
                    alt="product_img"
                  />
                </div>
                <p className={styles.product__dis}>Sản phẩm 1</p>
                <Stars stars={"5"} />
                <p className={styles.product__price}>$ 12</p>
                <button
                  type="button"
                  class="w-full inline-block rounded-xl bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
                >
                  Đặt hàng
                </button>
              </div>
            </Link>
            {products?.map((item) => (
              <Link
                to={`/Sale/${item._id}`}
                className={"rounded-xl shadow-2xl p-1"}
              >
                <div key={item._id} className={styles.each_product}>
                  <div>
                    <div className={styles.wishlist}>
                      <AiOutlineHeart />
                    </div>
                    <img
                      src={item.images[0].url}
                      className={"rounded-2xl shadow-2xl "}
                      alt="product_img"
                    />
                  </div>
                  <p className={styles.product__dis}>{item.title}</p>
                  <Stars stars={item.totalrating} />
                  <p className={styles.product__price}>$ {item.price}</p>
                  <button
                    type="button"
                    class="w-full inline-block rounded-xl bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
                  >
                    Đặt hàng
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div
            className={`${styles.sort_page} ${styles.responsive__sort_page}`}
            style={{ marginTop: "50px" }}
          >
            <div className={`${styles.sorting} ${styles.hide__sorting}`}></div>

            <div className={styles.pagination}>
              {/* <Pagination setCurrentPage={setCurrentPage} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
