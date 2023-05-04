import "./mostsearch.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MostSearch = () => {
  return (
    <div className="most-search mt-5">
      <h3 className="text-left">TÌM KIẾM NHIỀU NHẤT</h3>
      <ul className="mt-3">
        <Swiper className="" slidesPerView={7} spaceBetween={10}>
          <SwiperSlide>
            <li>
              <button>Máy triệt lông</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Máy uốn tóc</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Bàn chải điện</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Mặt nạ</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Son</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Tăm nước</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Máy rửa mặt</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Halio</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Kem chống nắng</button>
            </li>
          </SwiperSlide>
        </Swiper>
      </ul>
    </div>
  );
};

export default MostSearch;
