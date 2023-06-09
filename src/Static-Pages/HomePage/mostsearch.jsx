import "./mostsearch.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MostSearch = () => {
  return (
    <div className="most-search mt-5">
      <div className="text-[22px] mt-10 font-bold text-left">
        TÌM KIẾM NHIỀU NHẤT
      </div>
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
            <li className="w-[80%] mr-[10px] text-center">
              <button>Máy triệt lông</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[80%] mr-[10px] text-center">
              <button>Máy uốn tóc</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[80%] mr-[10px] text-center">
              <button>Bàn chải điện</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[80%] mr-[10px] text-center">
              <button>Mặt nạ</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[80%] mr-[10px] text-center">
              <button>Son</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[80%] mr-[10px] text-center">
              <button>Tăm nước</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[80%] mr-[10px] text-center">
              <button>Máy rửa mặt</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[80%] mr-[10px] text-center">
              <button>Halio</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="w-[80%] mr-[10px] text-center">
              <button>Kem chống nắng</button>
            </li>
          </SwiperSlide>
        </Swiper>
      </ul>
    </div>
  );
};

export default MostSearch;
