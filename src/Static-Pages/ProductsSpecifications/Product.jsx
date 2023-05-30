import "./css/styles.min.css";
import React, { useEffect, useState } from "react";
import { productData } from "../../data/productData";
import plusIcon from "../../Image/icon-plus.svg";
import minusIcon from "../../Image/icon-minus.svg";
import { Lightbox } from "./Lightbox";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { listProductDetails } from "../../redux/action/productActions";
import imgError from "../../Image/imgError.jpg";
import { addItem } from "../../redux/action/cartActions";
import { toast } from "react-toastify";
import { listCategoryDetails } from "../../redux/action/categoryActions";
import { listbrandDetails } from "../../redux/action/brandActions";
import InforProduct from "./InforProduct";
import FeaturedCard2 from "../HomePage/Cart2";
import CartBlog from "../Blog/CartBlog";
import ShowFeedBack from "./showFeedback";
import FeedBack from "./feedback";
import { Input } from "antd";
import "./StarRating.css";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Rate } from "antd";
const Product = () => {
  const { TextArea } = Input;
  const params = useParams();
  let id = params.id;
  const dispatch = useDispatch();
  const [productQuantity, setProductQuantity] = useState(1);

  const [currentProductImage, setCurrentProductImage] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const { isauth } = useSelector((store) => store.login);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;
  const categoryDetails = useSelector((state) => state.categoryDetails);
  const { category } = categoryDetails;
  const brandDetails = useSelector((state) => state.brandDetails);
  const { brand } = brandDetails;
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (product.category) dispatch(listCategoryDetails(product.category));
  }, [product.category, dispatch]);
  useEffect(() => {
    if (product.brand) dispatch(listbrandDetails(product.brand));
  }, [product.brand, dispatch]);
  const handleAddToCart = (e) => {
    if (productQuantity && id) {
      dispatch(addItem(id, productQuantity));
      toast.success("Sản phẩm đã được thểm vào giỏ hàng");
    }
  };

  const [showCommentForm, setShowCommentForm] = useState(false);

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };
  return product ? (
    <main className="product">
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
            Danh mục : {category.title}
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

          <div>
            <Link to="/Chat">
              <button className="bg-black text-white w-[50%] h-[40px] rounded-[8px] text-[18px]">
                Liên hệ
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[90%] ml-auto mr-auto ">
        <div>
          <InforProduct description={product.description} />
        </div>
      </div>
      <div>
        <FeaturedCard2 />
      </div>
      <div>
        <CartBlog />
      </div>

      <div className="w-[90%] ml-auto mr-auto bg-[#f5f6f6]">
        <div className=" p-4">
          <div className="text-[25px] font-bold mr-2 text-left">Đánh giá</div>
          <div className="flex mt-3">
            <div className="w-[50%]">
              <div className="mb-2">
                <div className="text-[15px] text-left mr-2">
                  Đánh giá trung bình
                </div>
              </div>
              <div className="flex">
                <div className="text-center flex-col items-center">
                  <div className="text-[80px] font-bold text-center text-[#fe2c6d]">
                    4.7
                  </div>
                  <div>
                    <Rate allowHalf defaultValue={5} className="ml-28" />
                  </div>
                  <div className="text-[15px]">2 nhận xét</div>
                </div>
                <div className="text-center flex-col items-center w-[100%]">
                  <div class="flex items-center ">
                    <span class="text-sm font-medium text-black">5 sao</span>
                    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                      <div class="h-5 bg-yellow-400 rounded w-[70%]"></div>
                    </div>
                    <span class="text-sm font-medium text-black">70%</span>
                  </div>
                  <div class="flex items-center mt-2 ">
                    <span class="text-sm font-medium text-black">4 sao</span>
                    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                      <div class="h-5 bg-yellow-400 rounded w-[70%]"></div>
                    </div>
                    <span class="text-sm font-medium text-black">70%</span>
                  </div>
                  <div class="flex items-center mt-2">
                    <span class="text-sm font-medium text-black">3 sao</span>
                    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                      <div class="h-5 bg-yellow-400 rounded w-[70%]"></div>
                    </div>
                    <span class="text-sm font-medium text-black">70%</span>
                  </div>
                  <div class="flex items-center mt-2">
                    <span class="text-sm font-medium text-black">2 sao</span>
                    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                      <div class="h-5 bg-yellow-400 rounded w-[70%]"></div>
                    </div>
                    <span class="text-sm font-medium text-black">70%</span>
                  </div>
                  <div class="flex items-center mt-2">
                    <span class="text-sm font-medium text-black">1 sao</span>
                    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                      <div class="h-5 bg-yellow-400 rounded w-[70%]"></div>
                    </div>
                    <span class="text-sm font-medium text-black">70%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="mt-10 text-center items-center text-[15px]">
                Chia sẽ nhận xét của bạn về sản phẩm
              </div>
              <button
                className="mt-4 mb-8 w-[30%] text-[15px] rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white"
                onClick={toggleCommentForm}
              >
                {showCommentForm ? "Thu gọn" : "Viết bình luận"}
              </button>
            </div>
          </div>
          {showCommentForm && (
            <div className=" bg-white w-[100%]">
              <div className="box_comment">
                <div className="text-left text-[15px]">
                  Đánh giá sản phẩm này *
                </div>
                <div className="text-left ml-16 mt-3 mb-4">
                  <Rate allowHalf defaultValue={0} className="start" />
                </div>
                <div className="text-left text-[15px]">Mô tả nhận xét *</div>
                <div className="mt-3 mb-5">
                  <TextArea
                    rows={4}
                    placeholder="Kí tự tối đa 2500"
                    maxLength={2500}
                  />
                </div>
                <button className="mb-5 w-[30%] text-[15px] rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white">
                  Gưi
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="pb-10 border-t-2">
          <div className="flex justify-between">
            <div className="mt-2 w-[50%]">
              <div className="text-left ml-5 text-[15px] text-[#fe2c6d] flex">
                Lê Hằng
                <div className="ml-2 text-[#999]">
                  Nước Tẩy Trang L'Oreal 3-in-1 Làm Sạch Sâu 400ml
                </div>
              </div>
              <div className="text-left mt-2 ml-20 w-[20%]">
                <Rate allowHalf defaultValue={4} />
              </div>
              <div className="text-left ml-5 text-[15px]">
                Thông số ghi lại Xuất xứ của pháp nhưng sp mình mua là của Trung
                Quốc
              </div>
            </div>
            <div className="mt-2 mr-3 text-[13px]">21: 38 | 14/02/2019</div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="mt-2">
              <div className="text-left ml-5 text-[15px] text-[#fe2c6d] flex">
                Lê Văn Bê
                <div className="ml-2 text-[#999]">
                  Nước Tẩy Trang Tươi Mát L'Oreal 3-in-1 Dành Cho Da Dầu & Da
                  Hỗn Hợp 400ml
                </div>
              </div>
              <div className="text-left mt-2 ml-20 w-[20%]">
                <Rate allowHalf defaultValue={1} />
              </div>
              <div className="text-left ml-5 text-[15px] ">
                Xài từ thiên nga xuống vịt trời
              </div>
            </div>
            <div className="mt-2 mr-3 text-[13px]">21: 41 | 26/10/2018</div>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <div>Loading..</div>
  );
};

export default Product;
