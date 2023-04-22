import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";

import { BsMinecartLoaded } from "react-icons/bs";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import user from "../../Image/user.png"
import "react-dropdown/style.css";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/login/login.actions";

const Navbars = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const userData = localStorage.getItem("token") || "";
  const userName = localStorage.getItem("username")
  const [data, setdata] = useState([]);
  const [searchdata, setsearchdata] = useState("");
  const [userId, userEmail, userPassword] = userData.split(":");
  const [isNav, setIsNav] = useState(false);
  const dispatch = useDispatch();
  const { isauth } = useSelector((store) => store.login);

  // for navigating the user to the different pages
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(`/${e.target.value}`);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  // For search operation in input box
  const handleSearch = async (e) => {
    const searcheddata = e.target.value;

    try {
      let res = await axios.get(
        `https://blossombackend.onrender.com/products/Sale/${searchdata}`
      );
      if (searcheddata === "") {
        setdata([]);
      } else {
        setdata(res.data);
        setIsNav(true);
        setTimeout(() => {
          setIsNav(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(data)

  useEffect(() => {
    handleSearch();
  }, []);

  const handlelogout = (e) => {

    dispatch(logout());
  };

  return (
    <div>
      <nav className="my-6 px-[100px]">

        <div className="logo">
          <Link to="/">
            {" "}
            {/* <img
              className="img1"
              src={img}
              
            /> */}
            <p className="mt-4 text-black text-[40px]">LUXUBU</p>
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
        <form className="co" action="#">
          <input
            type="search"
            className="search-data "
            placeholder="Tìm kiếm son, sữa rữa mặt..."
            onChange={handleSearch}
          />
          <Link to="/Sale">
            <button type="submit">
              <AiOutlineSearch size={26} style={{ margin: "5px" }} />
            </button>
          </Link>
        </form>

        <div
          class="nav-items"
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
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
                        src={user}
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link

                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Xin chào: {userName}
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={"/userinfo"}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
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
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
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
                  <Link to="/Login" className="mt-3">
                    Đăng nhập / Đăng ký
                  </Link>
                </div>
              )}
            </li>

            <div className="mt-4">
              <li>
                <Link to={`/Sale/:id/Carts`}>
                  <BsMinecartLoaded />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <br />
      <form className="co flex flex-row justify-center lg:hidden md:flex" action="#">
        <input
          type="search"
          className="search-data w-[210px]"
          placeholder="Tìm kiếm son, sữa rữa mặt..."
          onChange={handleSearch}
        />
        <Link to="/Sale">
          <button type="submit">
            <AiOutlineSearch size={26} style={{ margin: "5px", color: "black" }} />
          </button>
        </Link>
      </form>
      <div
        className="nav-items flex flex-row justify-end lg:hidden md:flex pb-6 pr-10"
      >

        {isauth ? (
          <Menu as="div" className="relative pt-3">
            <div>
              <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src={user}
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link

                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Xin chào: {userName}
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={"/userinfo"}
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Trang cá nhân
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={"/Sale/:id/Carts"}
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Giỏ hàng
                    </Link>
                  )}
                </Menu.Item>
                <hr />
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={handlelogout}
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
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
            <Link to="/Login" style={{ color: "black" }} className="mt-3 text-lg">
              Đăng nhập / Đăng ký
            </Link>
          </div>
        )}
        <div className="mt-3.5 pl-3 ">
          <Link style={{color: "black"}} to={`/Sale/:id/Carts`}>
            <BsMinecartLoaded size={32}/>
          </Link>
        </div>

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
