import React from "react";
import { useState } from "react";
import axios from "axios";
import imgError from "../../Image/imgError.jpg"
import styles from "./Sales.module.css";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
// AiFillHeart
import { GoSettings } from "react-icons/go";
import { useEffect } from "react";
import Stars from "./Stars";
import Pagination from "./Pagination";

import { Link, Navigate, useSearchParams } from "react-router-dom";


const Sales = () => {
  const [click, setClick] = useState(true);
  const [click1, setClick1] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort_x, setSort_x] = useState("");
  // const [loading, setloading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();


  const getData = () => {
    if (sort_x === "lowtohigh") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/asc?page=${currentPage}`);
    } else if (sort_x === "hightolow") {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale/desc?page=${currentPage}`
      );
    } else if (sort_x === "ot") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/ot?page=${currentPage}`);
    } else if (sort_x === "et") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/et?page=${currentPage}`);
    } else if (sort_x === "tt") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/tt?page=${currentPage}`);
    } else if (sort_x === "ff") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/ff?page=${currentPage}`);
    } else if (sort_x === "af") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/af?page=${currentPage}`);
    } else if (sort_x === "three") {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale/three?page=${currentPage}`
      );
    } else if (sort_x === "four") {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale/four?page=${currentPage}`
      );
    } else if (sort_x === "five") {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale/five?page=${currentPage}`
      );
    } else {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale?page=${currentPage}`
      );
    }
  };

  const sort_func = (event) => {
    setSort_x(event.target.value);
    getData(sort_x);
  };

  useEffect(() => {
    // setloading(true)
    getData()
      .then((res) => {
        setData(res.data)
        // setloading(false)
      }).catch((err) => console.log(err));

  }, [currentPage, sort_x]);


  return (
    <div className={styles.main__sales}>
      <div className={styles.navigation_tab}>
        <span className={styles.home_hover}>Trang chủ</span> <span>/</span>{" "}
        <span>Tất cả sản phẩm</span>
      </div>
      <div className={styles.main__products}>
        {/* filter section  */}
        {/* <div style={{ marginTop: "30px" }} className={styles.refine}>
          <p className={styles.refine_head}>Refine</p>
          <div>
            <hr />
          </div>
          <div className={styles.savings}>
            <div onClick={() => setClick(!click)}>
              <p>Get Products By Price Range</p>
              {click ? (
                <MdOutlineKeyboardArrowUp className={styles.arrow} />
              ) : (
                <MdOutlineKeyboardArrowDown className={styles.arrow} />
              )}
            </div>
          </div>
          <div
            className={
              click ? `${styles.refine_option1}` : `${styles.refine_option2}`
            }
          >
            <div className={styles.sorting}>
              <div></div>
              <select name="" id="" onChange={sort_func}>
                <option value="defalt">Price</option>
                <option value="ot">Less than $10</option>
                <option value="et">$10 to $20</option>
                <option value="tt">$20 to $30</option>
                <option value="ff">$40 to $50</option>
                <option value="af">Above $50</option>
              </select>
            </div>
          </div>

          <div className={styles.savings}>
            <div onClick={() => setClick1(!click1)}>
              <p>Get Products By Rating</p>
              {click1 ? (
                <MdOutlineKeyboardArrowUp className={styles.arrow} />
              ) : (
                <MdOutlineKeyboardArrowDown className={styles.arrow} />
              )}
            </div>
          </div>
          <div
            className={
              click1 ? `${styles.refine_option1}` : `${styles.refine_option2}`
            }
          >
            <div className={styles.sorting}>
              <div>Get Products By Rating</div>
              <select name="" id="" onChange={sort_func}>
                <option value="defalt">Rating</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
              </select>
            </div>
          </div>
        </div> */}

        <div className={styles.products_area}>

          {/* <p style={{ color: "teal", fontSize: "20px", fontFamily: "cursive", fontWeight: "bolder", marginBottom: "40px" }} className={styles.results}>{data.length} Results</p>

          <div className={styles.sort_page}>
            <div className={styles.sorting}>
              <div>Sort :</div>
              <select name="" id="" onChange={sort_func}>
                <option value="defalt">Sort By Price</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
             
              </select>
            </div>
           
            <div className={styles.responsive_refine}>
              <p>Refine</p>
              <GoSettings />
            </div>
          </div> */}


          <div className={styles.all__main__products}>
            <Link to={`/Sale/123213`}>

              <div className={styles.each_product} >
                <div>
                  <div className={styles.wishlist}>
                    <AiOutlineHeart />

                  </div>
                  <img src={imgError} className={"rounded-2xl shadow-2xl"} alt="product_img" />
                </div>
                <p className={styles.product__dis}>Sản phẩm 1</p>
                <Stars stars={"5"} />
                <p className={styles.product__price}>$ 12</p>
                <button
                  type="button"
                  class="w-full inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
                  Đặt hàng
                </button>
              </div>
            </Link>
            {data?.map(({ _id, image, title, rating, price }) => (
              <Link to={`/Sale/${_id}`} >

                <div key={_id} className={styles.each_product} >
                  <div>
                    <div className={styles.wishlist}>
                      <AiOutlineHeart />

                    </div>
                    <img src={image} className={"rounded-2xl shadow-2xl"} alt="product_img" />
                  </div>
                  <p className={styles.product__dis}>{title}</p>
                  <Stars stars={rating} />
                  <p className={styles.product__price}>$ {price}</p>
                  <button
                    type="button"
                    class="w-full inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
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
              <Pagination setCurrentPage={setCurrentPage} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );

};

export default Sales;
