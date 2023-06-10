import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Navbar.css";

import { BsMinecartLoaded } from "react-icons/bs";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import GoogleFontLoader from "react-google-font-loader";
import { BsBell } from "react-icons/bs";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiTwotoneDelete,
} from "react-icons/ai";
import Imageuser from "../../Image/user.png";
import "react-dropdown/style.css";
import { Cart } from "./Cart";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/action/auth";
import deleteIcon from "../../Image/icon-delete.svg";
import { loadCart, removeItem } from "../../redux/action/cartActions";
import { listProducts } from "../../redux/action/productActions";

const Navbars = ({ cartProductQuantity, setCartProductQuantity }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const userData = localStorage.getItem("token") || "";
  const userName = localStorage.getItem("username");
  const userImage = localStorage.getItem("userimage");
  const [data, setdata] = useState([]);
  const [searchdata, setsearchdata] = useState("");
  const [userId, userEmail, userPassword] = userData.split(":");
  const [isNav, setIsNav] = useState(false);
  const dispatch = useDispatch();
  const { isauth } = useSelector((store) => store.login);
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.tagName !== "INPUT") {
        setShowModal(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchData(value);
    setShowModal(value.trim() !== "");

    // Simulate search results
    // Replace this with your actual search logic
    const results = value
      ? ["Con cu rám nắng ", "Con lạc đà đen thui", "Con kì nhong trắng bóc"]
      : [];
    setSearchResults(results);

    const posts = value
      ? ["Bài viết con lạc đà", "Bài viết kì nhong", "Bài viết con cu"]
      : [];
    setRelatedPosts(posts);
  };

  const handleInputClick = () => {
    setShowModal(true);
  };

  const handleSearchHistoryClick = (history) => {
    setSearchData(history);
    setShowModal(true);
  };

  // let cartData = JSON.parse(localStorage.getItem("cartItems")) || []
  useEffect(() => {
    dispatch(loadCart());
  }, []);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [searcheddata, setSearchedata] = useState("");
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // For search operation in input box
  // const handleSearch = async (e) => {
  //   // const searcheddata = e.target.value;
  // };

  // useEffect(() => {
  //   handleSearch();
  // }, []);

  const handlelogout = (e) => {
    dispatch(logout());
  };

  return (
    <div>
      <nav className="my-6 px-[100px]">
        <div className="logo">
          <Link to="/">
            <GoogleFontLoader
              fonts={[{ font: "Playfair", weights: [500, 900] }]}
            />
            <p
              style={{ fontFamily: "Playfair, serif" }}
              className="mt-[35px] text-black text-[50px]"
            >
              LUXUBU
            </p>
          </Link>
        </div>

        <div className="search-icon">
          <span>
            <AiOutlineSearch />
          </span>
        </div>
        <div className="cancel-icon">
          <span className="fas fa-times">
            <AiOutlineClose />
          </span>
        </div>
        <div className="w-[46%]">
          <form className="co rounded-[10px]" action="#">
            <input
              type="search"
              className="search-data"
              placeholder="Tìm kiếm son, sữa rữa mặt, bông tẩy trang,...."
              value={searchData}
              onChange={handleSearch}
              onClick={handleInputClick}
            />
            <button type="submit">
              <AiOutlineSearch size={26} style={{ margin: "5px" }} />
            </button>{" "}
          </form>
        </div>

        <div
          className={
            isNavExpanded
              ? " nav-items navigation-menu expanded"
              : " nav-items navigation-menu"
          }
        >
          <ul>
            <li>
              {isauth ? (
                <Menu as="div" className="relative pt-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={userImage ? userImage : Imageuser}
                        alt="user"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      style={{ zIndex: 99 }}
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Xin chào: {userName}
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={"/userinfo"}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Trang cá nhân
                          </Link>
                        )}
                      </Menu.Item>
                      <hr />
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={handlelogout}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Đăng xuất
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <div>
                  <Link to="/Login" className="mt-7">
                    Đăng nhập / Đăng ký
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button>
                    <div className="flex icon-container">
                      <div className=" flex justify-center items-center">
                        <div className="relative py-2">
                          <div className="t-0 absolute left-3">
                            {cartItems.length > 0 && (
                              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                                {cartItems.length}
                              </p>
                            )}
                          </div>
                          <div className="mt-4">
                            <BsBell size="25px" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    style={{ zIndex: 99 }}
                    className="absolute right-0 z-10 mt-2 w-[350px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="cart__heading p-3">
                      <h4 className="fs-600 fw-700 darkGrayishBlue">
                        Thông báo
                      </h4>
                    </div>
                    <div className="cart__items grid p-2">
                      {cartItems.length === 0 ? (
                        <p className="fs-400 fw-700 darkGrayishBlue m-auto">
                          Chưa có thông tin
                        </p>
                      ) : (
                        <div className="cart__item grid-flow-row  h-[250px] overflow-y-scroll">
                          {cartItems.map((item) => (
                            <div className="item flex pb-4">
                              <img
                                src={item.image}
                                className="w-[100px] h-[100px] rounded-md shadow-sm"
                                alt=""
                              />
                              <div className="item__info m-auto p-3">
                                <div style={{ width: "180px" }}>
                                  <p className="item__name fw-400 fs-400 line-height-500 darkGrayishBlue truncate">
                                    {item.title}
                                  </p>
                                </div>
                                <span className="d-inline-block fw-400 fs-400 line-height-500 darkGrayishBlue">
                                  {item.price} x {item.qty}
                                </span>{" "}
                              </div>
                              <div className="m-auto">
                                <AiTwotoneDelete
                                  size={32}
                                  color={"red"}
                                  onClick={() => {
                                    dispatch(removeItem(item.product));
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="pb-3 mt-3">
                      <button className="bg-[#fe2c6d] text-white rounded-[8px] w-[50%] h-[40px] ">
                        Xóa tất cả
                      </button>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li>
              <Menu as="div" className="relative ">
                <div>
                  <Menu.Button>
                    <div className="flex icon-container">
                      <div className=" flex justify-center items-center">
                        <div className="relative py-2">
                          <div className="t-0 absolute left-3">
                            {cartItems.length > 0 && (
                              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                                {cartItems.length}
                              </p>
                            )}
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="file: mt-4 h-7 w-7"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    style={{ zIndex: 99 }}
                    className="absolute right-0 z-99 mt-2 w-[450px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="cart__heading p-3">
                      <h4 className="fs-600 fw-700 darkGrayishBlue">
                        Giỏ hàng
                      </h4>
                    </div>
                    <div className="cart__items grid p-2">
                      {cartItems.length === 0 ? (
                        <p className="fs-400 fw-700 darkGrayishBlue m-auto">
                          Giỏ hàng trống
                        </p>
                      ) : (
                        <div className="cart__item grid-flow-row  h-[250px] overflow-y-scroll">
                          {cartItems.map((item) => (
                            <div className="item flex pb-4">
                              <img
                                src={item.image}
                                className="w-[100px] h-[100px] rounded-md shadow-sm"
                                alt=""
                              />
                              <div className="item__info m-auto p-3">
                                <div style={{ width: "180px" }}>
                                  <p className="item__name fw-400 fs-400 line-height-500 darkGrayishBlue truncate">
                                    {item.title}
                                  </p>
                                </div>
                                <span className="d-inline-block fw-400 fs-400 line-height-500 darkGrayishBlue">
                                  {item.price} x {item.qty}
                                </span>{" "}
                              </div>
                              <div className="m-auto">
                                <AiTwotoneDelete
                                  size={32}
                                  color={"red"}
                                  onClick={() => {
                                    dispatch(removeItem(item.product));
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {cartItems.length != 0 ? (
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-black-700"
                            )}
                            to={"/Carts"}
                          >
                            <div className="pb-3 mt-3">
                              <button className="bg-[#fe2c6d] text-white rounded-[8px] w-[50%] h-[40px] ">
                                Chi tiết giỏ hàng
                              </button>
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    ) : (
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-black-700"
                            )}
                            to={"/Sale"}
                          >
                            <div className="pb-3 mt-3">
                              <button className="bg-[#fe2c6d] text-white rounded-[8px] w-[50%] h-[40px] ">
                                Đến sản phẩm
                              </button>
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    )}
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </div>

        {showModal && (
          <div className="search-results-modal">
            <div className="modal-content1">
              {searchData ? (
                <>
                  <div className="pb-3">
                    <h3>Kết quả tìm kiếm:</h3>
                    <ul className="overflow-y-scroll">
                      {searchResults.map((result, index) => (
                        <li key={index}>
                          <Link>
                            <p className="mt-4">{result}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t-2">
                    <h3 className="pt-3">Bài viết liên quan:</h3>
                    <ul className="overflow-y-scroll">
                      {relatedPosts.map((post, index) => (
                        <li key={index}>
                          <Link>
                            <p className="mt-4">{post}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <h3>Lịch sử tìm kiếm:</h3>
                  <ul>
                    {searchHistory.map((history, index) => (
                      <li
                        key={index}
                        onClick={() => handleSearchHistoryClick(history)}
                      >
                        <Link>
                          <p className="mt-4"> {history}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <br />
      <form
        className="co flex flex-row justify-center lg:hidden md:flex"
        action="#"
      >
        <input
          type="search"
          className="search-data w-[210px]"
          placeholder="Tìm kiếm son, sữa rữa mặt..."
          onChange={handleSearch}
        />
        <Link to="/Sale">
          <button type="submit">
            <AiOutlineSearch
              size={26}
              style={{ margin: "5px", color: "black" }}
            />
          </button>
        </Link>
      </form>
      <div className="nav-items flex flex-row justify-center lg:hidden md:flex pb-6 pr-10 m-auto ">
        {isauth ? (
          <ul>
            <li>
              {isauth ? (
                <Menu as="div" className="relative pt-9">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={userImage ? userImage : Imageuser}
                        alt="user"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-99 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Xin chào: {userName}
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={"/userinfo"}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Trang cá nhân
                          </Link>
                        )}
                      </Menu.Item>
                      <hr />
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={handlelogout}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Đăng xuất
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <div>
                  <Link to="/Login" className="mt-10">
                    Đăng nhập / Đăng ký
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Menu as="div" className="relative pt-3">
                <div>
                  <Menu.Button>
                    <div className="flex icon-container">
                      <div className=" flex justify-center items-center">
                        <div className="relative py-2">
                          <div className="t-0 absolute left-3">
                            <Link to={"/Carts"}>
                              {cartItems.length > 0 && (
                                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                                  {cartItems.length}
                                </p>
                              )}
                            </Link>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="file: mt-4 h-7 w-7"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Menu.Button>
                </div>
              </Menu>
            </li>
          </ul>
        ) : (
          <div>
            <Link
              to="/Login"
              style={{ color: "black" }}
              className="mt-3 text-lg"
            >
              Đăng nhập / Đăng ký
            </Link>
          </div>
        )}
      </div>
      <br className="flex flex-row justify-center lg:hidden md:flex" />

      <div className="line"></div>

      {setdata.length != 0 && isNav ? (
        <div className="suggestionwala">
          {data.map((el) => (
            <Link to="/Sale">
              <div key={el.id} className="searchkro">
                <img src={el.image} alt="Image" className="products_image" />
                <h3>{el.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Navbars;
