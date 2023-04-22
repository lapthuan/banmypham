import React from "react";
import { CgMonday } from "react-icons/cg";
import classNames from "classnames";

import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
    return (
        <nav className={"hidden md:flex flex-row items-center justify-center px-8 pb-2  bg-white shadow-md"}>

            <ul className={"flex flex-row self-end "}>
                {navigationData.map((item, index) => (
                    <li
                        className={classNames([
                            "px-7 w-22 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide text-sm flex items-start justify-center                            ",
                            currentRoute === item && "text-gray-700 border-b-3 border-gray-700 bg-gradient-to-b from-white to-gray-100                            ",
                        ])}
                        key={index}
                        onClick={() => setCurrentRoute(item.name)}
                    >
                        <Link style={{color: "black", fontWeight: "bold",fontSize:"14px"}}  to={item.path}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* <button className={"bg-white hover:bg-gray-50 border-2 border-gray-900 text-sm text-gray-900 py-3 px-5 rounded-lg font-medium tracking-wide leading-none"}>Logout</button> */}
        </nav>
    );
};

export default Navbar;