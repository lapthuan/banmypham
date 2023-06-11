import React, { useEffect } from "react";
import "./ModalBlog.css";
import { Link } from "react-router-dom";
import imageBlog1 from "../logo/1685960467.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  blogCategoryGetAll,
  blogGetAll,
} from "../../../redux/action/blogActions";
import moment from "moment";

const ModalBlog = () => {
  const blogList = useSelector((state) => state.blogList);
  const { blogs } = blogList;

  const categoryList = useSelector((state) => state.bCategoryList);
  const { bCategorys } = categoryList;
  const dispatch = new useDispatch();

  useEffect(() => {}, []);

  const formatDateTime = (time) => {
    const formattedDatetime = moment(time).format("HH:mm | DD/MM/YYYY");
    return formattedDatetime;
  };

  return (
    <div className="blogSetMainParent">
      <div className="flex flex-col gap-2 blogPriceHolder w-[250px]">
        <div className="text-left font-bold text-black text-[20px]   ">
          Danh mục thương hiệu
        </div>
        <div className="h-[400px]  mt-3">
          {bCategorys?.map((item, index) => (
            <Link to={`/blog/`} key={index}>
              <p
                className={`hover:text-[#ff2b70] text-left ${
                  index !== 0 ? "mt-5" : ""
                }`}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-[70%] grid grid-cols-3 blogHold ">
        {blogs
          ?.map((item, i) => (
            <Link to={`/Tpost/${item._id}`} key={i}>
              <div className="flex-col">
                <div className="blogimg ">
                  <img
                    src={item.images[0]?.url}
                    className="rounded-lg"
                    alt=""
                  />
                  <div className="text-[13px] text-left text-black w-[90%]">
                    {item.title.slice(0, 40)}...
                  </div>
                </div>
              </div>
            </Link>
          ))
          .slice(0, 5)}
      </div>
    </div>
  );
};
export default ModalBlog;
