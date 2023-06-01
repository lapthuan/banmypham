import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "../Blog/recent.css";
import img from "../../Image/1682067960.webp";
import { useDispatch, useSelector } from "react-redux";
import { blogGetAll } from "../../redux/action/blogActions";
const RecentCard = () => {
  const dispatch = new useDispatch()
  const blogList = useSelector((state) => state.blogList)
  const { blogs } = blogList
  useEffect(() => {
    dispatch(blogGetAll())
  }, [])
  const formatDateTime = (time) => {
    const formattedDatetime = moment(time).format("HH:mm | DD/MM/YYYY");
    return formattedDatetime
  }

  const text1 =
    "Thời trang BLACKPINK tại Coachella 2023: Mang loạt hot trend lên sân khấu nhưng vẫn gây tiếc nuối 1 điểm!";
  const text2 =
    "Thời trang BLACKPINK tại Coachella 2023: Mang loạt hot trend lên sân khấu nhưng vẫn gây tiếc nuối 1 điểm!";
  return (
    <>
      <div className="pt-[50px] pl-0 pr-0 w-[90%] flex justify-between ml-auto mr-auto md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
        <Link to="/Tpost">
          <div className="bg-color-card w-[90%] ml-auto mr-auto">
            <div className="RecentC_img">
              <img
                src="https://upload.lixibox.com/system/blogs/covers/000/000/847/original/1682503238.jpg"
                className="rounded-md h-[100%] w-[100%] object-cover"
                alt=""
              />
            </div>
            <div className="pt-2">
              <h5 className="text-center text-white bg-black w-[43%] lg:w-[20%] lg:text-[20px] text-[15px] ">
                Tin nổi bật
              </h5>
            </div>
            <div className="is-divider"></div>
            <div className="text pt-1">
              <h6 className="h5_location text-black text-left">
                {text1.slice(0, 55)}...
              </h6>
            </div>
          </div>
        </Link>
        <Link>
          <div className="bg-color-card w-[90%] ml-auto mr-auto">
            <div className="RecentC_img">
              <img
                src="https://upload.lixibox.com/system/blogs/covers/000/001/664/original/1682565610.jpg"
                className="rounded-md h-[100%] w-[100%] object-cover"
                alt=""
              />
            </div>
            <div className="pt-2">
              <h5 className="text-center text-white bg-black w-[43%] lg:w-[20%] lg:text-[20px] text-[15px]">
                Tin nổi bật
              </h5>
            </div>
            <div className="is-divider "></div>

            <div className="text pt-1">
              <h6 className="h5_location text-black text-left">
                {text2.slice(0, 55)}...
              </h6>
            </div>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 mtop w-[90%] ml-auto mr-auto">
        {blogs?.map((item) => (

          <Link to={`/${item._id}`}>
            <div className="recentCard bg-color-card">
              <div className="RecentC_img">
                <img
                  src={item.images[0]?.url}
                  className="rounded-md h-[100%] w-[100%] object-cover"
                  alt=""
                />
              </div>
              <div className="is-divider mt-3"></div>
              <div className="text-sm font-bold text-left text-[#fe2c6d]">{item.category.title}</div>
              <div className="text pt-1">
                <h6 className="h5_location truncate w-4/5 text-black text-left">
                  {item.title}
                </h6>
              </div>
              <div className="text-sm text-gray-500 text-right">{formatDateTime(item.created)}</div>

            </div>
          </Link>
        ))}

      </div>
    </>
  );
};

export default RecentCard;
