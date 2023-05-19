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

  console.log(products.length);
  return products.length != 0 ? (
    <div className={styles.main__sales}>
      <div className={styles.navigation_tab}>
        <span className={styles.home_hover}>Trang chủ</span> <span>/</span>{" "}
        <span>Tất cả sản phẩm</span>
      </div>
      <div className={styles.main__products}>
        <div className={styles.products_area}>
          <div className={styles.all__main__products}>

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
                      src={item.images[0] == undefined ? imgError : item.images[0].url}
                     className="rounded-lg"
                      alt="product_img"
                    />
                  </div>
                  <p className={styles.product__dis}>{item.title}</p>
                  <br />
                  <Stars stars={item.totalrating} />
                  <br />
                  <p className={styles.product__price}>$ {item.price}</p>
                 <br/>
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
  ) : (<div>Loading...</div>);
};

export default Sales;
