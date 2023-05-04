import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "../Blog/recent.css";
import img from "../../Image/1682067960.webp";
const RecentCard = () => {
  return (
    <>
      <div className="pt-[50px] pl-0 pr-0 w-[90%] flex justify-between ml-auto mr-auto md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
        <Link>
          <div className="bg-color-card w-[90%] ml-auto mr-auto">
            <div className="RecentC_img">
              <img
                src="https://upload.lixibox.com/system/blogs/covers/000/001/638/original/1681812017.jpg"
                className="rounded-md h-[100%] w-[100%] object-cover"
                alt=""
              />
            </div>
            <div className="text pt-1">
              <h6 className="h5_location text-text-color pt-3 text-left">
                Thời trang BLACKPINK tại Coachella 2023: Mang loạt hot trend lên
                sân khấu nhưng vẫn gây tiếc nuối 1 điểm!
              </h6>
              <div className="is-divider "></div>
            </div>
          </div>
        </Link>
        <Link>
          <div className="bg-color-card w-[90%] ml-auto mr-auto">
            <div className="RecentC_img">
              <img
                src="https://upload.lixibox.com/system/blogs/covers/000/001/638/original/1681812017.jpg"
                className="rounded-md h-[100%] w-[100%] object-cover"
                alt=""
              />
            </div>
            <div className="text pt-1">
              <h6 className="h5_location text-text-color pt-3 text-left">
                Thời trang BLACKPINK tại Coachella 2023: Mang loạt hot trend lên
                sân khấu nhưng vẫn gây tiếc nuối 1 điểm!
              </h6>
              <div className="is-divider "></div>
            </div>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 mtop w-[90%] ml-auto mr-auto">
        <Link>
          <div className="recentCard bg-color-card">
            <div className="RecentC_img">
              <img
                src="https://upload.lixibox.com/system/blogs/covers/000/001/638/original/1681812017.jpg"
                className="rounded-md h-[100%] w-[100%] object-cover"
                alt=""
              />
            </div>
            <div className="text pt-1">
              <h6 className="h5_location text-text-color pt-3 text-left">
                Thời trang BLACKPINK tại Coachella 2023: Mang loạt hot trend lên
                sân khấu nhưng vẫn gây tiếc nuối 1 điểm!
              </h6>
              <div className="is-divider "></div>
            </div>
          </div>
        </Link>

        <Link>
          <div className="recentCard bg-color-card">
            <div className="RecentC_img">
              <img
                src="https://upload.lixibox.com/system/blogs/covers/000/001/638/original/1681812017.jpg"
                className="rounded-md h-[100%] w-[100%] object-cover"
                alt=""
              />
            </div>
            <div className="text pt-1">
              <h6 className="h5_location text-text-color pt-3 text-left">
                Thời trang BLACKPINK tại Coachella 2023: Mang loạt hot trend lên
                sân khấu nhưng vẫn gây tiếc nuối 1 điểm!
              </h6>
              <div className="is-divider "></div>
            </div>
          </div>
        </Link>

        <Link>
          <div className="recentCard bg-color-card">
            <div className="RecentC_img">
              <img
                src="https://upload.lixibox.com/system/blogs/covers/000/001/638/original/1681812017.jpg"
                className="rounded-md h-[100%] w-[100%] object-cover"
                alt=""
              />
            </div>
            <div className="text pt-1">
              <h6 className="h5_location text-text-color pt-3 text-left">
                Thời trang BLACKPINK tại Coachella 2023: Mang loạt hot trend lên
                sân khấu nhưng vẫn gây tiếc nuối 1 điểm!
              </h6>
              <div className="is-divider "></div>
            </div>
          </div>
        </Link>

        <Link>
          <div className="recentCard bg-color-card">
            <div className="RecentC_img">
              <img
                src="https://upload.lixibox.com/system/blogs/covers/000/001/638/original/1681812017.jpg"
                className="rounded-md h-[100%] w-[100%] object-cover"
                alt=""
              />
            </div>
            <div className="text pt-1">
              <h6 className="h5_location text-text-color pt-3 text-left">
                Thời trang BLACKPINK tại Coachella 2023: Mang loạt hot trend lên
                sân khấu nhưng vẫn gây tiếc nuối 1 điểm!
              </h6>
              <div className="is-divider "></div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RecentCard;
