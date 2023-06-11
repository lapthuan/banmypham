import "./blogmost.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const blogmost = ({ bCategorys }) => {
  return (
    <div className="blog-search mt-5">
      <h3 className="text-center text-[30px]">DANH MỤC TIN TỨC</h3>
      <ul className="mt-5">
        <Swiper className="" slidesPerView={5} spaceBetween={5}>
          <SwiperSlide>
            <li className="w-[50%] mr-[10px] text-center">
              <button>Tất cả</button>
            </li>
          </SwiperSlide>
          {bCategorys.map((item, i) => (
            <SwiperSlide key={i}>
              <li className="w-[50%] mr-[10px] text-center">
                <button>{item.title}</button>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};

export default blogmost;
