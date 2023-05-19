import "./blogmost.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const blogmost = () => {
  return (
    <div className="blog-search mt-5">
      <h3 className="text-center">Danh mục sản phẩm</h3>
      <ul className="mt-5">
        <Swiper
          className=""
          slidesPerView={7}
          spaceBetween={10}
          breakpoints={{
            992: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <li className="w-[50%] mr-[10px] text-center">
              <button>Tất cả</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[50%] mr-[10px] text-center">
              <button>Makeup</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[50%] mr-[10px] text-center">
              <button>Skincare</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[50%] mr-[10px] text-center">
              <button>Brand</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[50%] mr-[10px] text-center">
              <button>Mom & baby</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[50%] mr-[10px] text-center">
              <button>Inspiration</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[50%] mr-[10px] text-center">
              <button>Lingerie</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[50%] mr-[10px] text-center">
              <button>Halio</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[50%] mr-[10px] text-center">
              <button>Kem chống nắng</button>
            </li>
          </SwiperSlide>
        </Swiper>
      </ul>
    </div>
  );
};

export default blogmost;
