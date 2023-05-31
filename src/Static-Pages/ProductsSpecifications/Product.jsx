import "./css/styles.min.css";
import React, { useEffect, useState } from "react";
import { productData } from "../../data/productData";
import plusIcon from "../../Image/icon-plus.svg";
import minusIcon from "../../Image/icon-minus.svg";
import { Lightbox } from "./Lightbox";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { findProducts, listProductDetails } from "../../redux/action/productActions";
import imgError from "../../Image/imgError.jpg";
import { addItem } from "../../redux/action/cartActions";
import { toast } from "react-toastify";
import { listCategoryDetails } from "../../redux/action/categoryActions";
import { listbrandDetails } from "../../redux/action/brandActions";
import { AiOutlineHeart, AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";

import InforProduct from "./InforProduct";
import FeaturedCard2 from "../HomePage/Cart2";
import CartBlog from "../Blog/CartBlog";
import ShowFeedBack from "./showFeedback";
import FeedBack from "./feedback";

import "./StarRating.css";

const Product = () => {

  const params = useParams();
  let id = params.id;
  const dispatch = useDispatch();
  const [productQuantity, setProductQuantity] = useState(1);

  const [currentProductImage, setCurrentProductImage] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const { isauth } = useSelector((store) => store.login);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  const Findproduct = useSelector((state) => state.productFind);
  const { productFind } = Findproduct;
  const categoryDetails = useSelector((state) => state.categoryDetails);
  const { category } = categoryDetails;
  const brandDetails = useSelector((state) => state.brandDetails);
  const { brand } = brandDetails;
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [id, dispatch]);


  useEffect(() => {

    if (product.category) {
      dispatch(listCategoryDetails(product.category));
      dispatch(findProducts('', '', '', '', JSON.stringify([product?.category])))
    }

  }, [product.category]);
  useEffect(() => {
    if (product.brand) dispatch(listbrandDetails(product.brand));
  }, [product.brand, dispatch]);
  const handleAddToCart = (e) => {
    if (productQuantity && id) {
      dispatch(addItem(id, productQuantity));
      toast.success("Sản phẩm đã được thểm vào giỏ hàng");
    }
  };


  return product ? (

    <main className="product">
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
          <li>
            <div class="flex items-center">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <Link to={`/${id}`} class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#fe2c6d] ">
             
                <div class="ml-1 text-sm font-medium text-gray-700 hover:text-[#fe2c6d] md:ml-2 truncate w-56">{product.title}   </div>
              </Link>

            </div>
          </li>
        </ol>
      </nav>
      <div className="container-md grid product-container">
        <div className="flex product-image">
          <img
            onClick={() => window.innerWidth > 768 && setLightbox(true)}
            src={
              product.images == undefined || product.images.length == 0
                ? imgError
                : product.images[currentProductImage].url
            }
            alt=""
            className="shadow-sm"
            style={{ height: "445px", with: "445px" }}
          />
          <div className="thumbnail-wrapper flex">
            {product.images != undefined ? (
              product.images.map((item, index) => (
                <div className="thumbnail">
                  <img
                    onClick={() => setCurrentProductImage(index)}
                    className={
                      currentProductImage === index
                        ? "active shadow-sm"
                        : "shadow-sm"
                    }
                    src={item.url}
                    alt="thumbnail"
                  />
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>

          {window.innerWidth <= 768 && (
            <>
              <button
                onClick={() =>
                  setCurrentProductImage((prevState) =>
                    prevState === 0 ? productData.length - 1 : prevState - 1
                  )
                }
                className="lightbox-control control-prev"
              >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setCurrentProductImage((prevState) =>
                    prevState === productData.length - 1 ? 0 : prevState + 1
                  )
                }
                className="lightbox-control control-next"
              >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
        {lightbox && (
          <Lightbox productData={product} setLightbox={setLightbox} />
        )}
        <div className="product-description flow">
          <p className="text-uppercase fw-700 fs-100 letter-spacing-1 Orange text-left">
            Danh mục : {category?.title}
          </p>
          <h1 className="fw-700 line-height-300 fs-230 blue text-left">
            {product.title}
          </h1>
          <p className="text-left">Nhãn hàng : {brand.title}</p>
          <p className=" text-left">Số lượng còn : {product.quantity}</p>
          <p className="text-left">Đã bán : {product.sold}</p>
          {/* <p className="fw-400 line-height-500 fs-400 darkGrayishBlue">
                        {product.description}
                    </p> */}
          <div className="product-price">
            <div className="discounted-price flex">
              Giá :{" "}
              <span className="fw-700 blue fs-700">
                {product.price
                  ? product.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })
                  : ""}
              </span>
              {/* <span className="offer fw-700 fs-400 Orange">50%</span>
                            <span className="fw-700 fs-400 line-height-500 text-line-through GrayishBlue">
                                ...
                            </span> */}
            </div>
          </div>

          <div className="action-wrapper flex">
            <div className="product-quantity flex">
              <img
                src={minusIcon}
                alt=""
                onClick={() =>
                  setProductQuantity((prevState) =>
                    prevState !== 1 ? prevState - 1 : 1
                  )
                }
              />
              <span className="fw-700 fs-400 blue">
                {productQuantity ? productQuantity : 1}
              </span>
              <img
                src={plusIcon}
                alt=""
                onClick={() =>
                  setProductQuantity((prevState) =>
                    prevState !== product.quantity
                      ? prevState + 1
                      : product.quantity
                  )
                }
              />
            </div>
            {product.quantity == 0 ? (
              <button
                className="btn flex fw-700 fs-400 "
                style={{ display: "flex" }}
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#ffffff"
                    fillRule="nonzero"
                  />
                </svg>
                Hết hàng
              </button>
            ) : isauth ? (
              <button
                onClick={handleAddToCart}
                className="btn flex fw-700 fs-400 "
                style={{ display: "flex" }}
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#ffffff"
                    fillRule="nonzero"
                  />
                </svg>
                Thêm vào giỏ hàng
              </button>
            ) : (
              <Link to={"../login"}>
                <button
                  onClick={() => alert("Bạn cần đăng nhập trước")}
                  className="btn flex fw-700 fs-400 "
                  style={{ display: "flex" }}
                >
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="#ffffff"
                      fillRule="nonzero"
                    />
                  </svg>
                  Thêm vào giỏ hàng
                </button>
              </Link>
            )}
          </div>

          {/* <div>
            <Link to="/Chat">
              <button className="bg-black text-white w-[50%] h-[40px] rounded-[8px] text-[18px]">
                Liên hệ
              </button>
            </Link>
          </div> */}
        </div>
      </div>

      <div className="w-[90%] ml-auto mr-auto ">
        <div>
          <InforProduct description={product.description} />
        </div>
      </div>
      <div>
        <FeaturedCard2 products={productFind} />
      </div>
      <div>
        <CartBlog />
      </div>

      <FeedBack product={id} />
    </main>
  ) : (
    <div>Loading..</div>
  );
};

export default Product;
