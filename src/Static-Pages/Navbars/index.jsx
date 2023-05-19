import { useState } from "react";
import { CgMonday } from "react-icons/cg";
import classNames from "classnames";
import "./Navbar.css";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const [showSubmenu, setShowSubmenu] = useState(null);

  return (
    <nav
      className={
        "hidden md:flex flex-row items-center justify-center px-8 pb-2 bg-white shadow-md"
      }
    >
      <ul className={"flex flex-row self-end group "}>
        {navigationData.map((item, index) => (
          <li
            className={classNames([
              "px-7 w-22 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide text-sm flex items-start justify-center  ",
              currentRoute === item &&
                "text-gray-700 border-b-3 border-gray-700 bg-gradient-to-b from-white to-gray-100  ",
            ])}
            key={index}
            onMouseEnter={() => setShowSubmenu(item.name)}
            onMouseLeave={() => setShowSubmenu(null)}
          >
            <div>
              <Link
                style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
                to={item.path}
              >
                <div className="desktop_item">{item.name}</div>
              </Link>
              {/* {item.submenu && showSubmenu === item.name && (
                <div
                  className={`submenu ${
                    item.name === showSubmenu ? "show" : ""
                  }`}
                >
                  <div className="submenu-content">
                    {item.sublinks.map((sublinkGroup, sublinkGroupIndex) => (
                      <div key={sublinkGroupIndex}>
                        <h5 className="ml-20">{sublinkGroup.Head}</h5>
                        <ul>
                          {sublinkGroup.sublink.map((sublink, subIndex) => (
                            <li key={subIndex}>
                              <Link to={sublink.link}>{sublink.namelink}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
