import React, { useState, useEffect } from "react";
import "./Tpost.css";
import { Link } from "react-router-dom";
import Carts from "../HomePage/Cart";
import CartBlog from "./CartBlog";
const Tpost = () => {
  return (
    <>
      <div>
        <main>
          <div className="Con_Tpost">
            <section className="contentsBlog mtop">
              <Link>
                <img
                  src="https://upload.lixibox.com/system/blogs/covers/000/001/664/original/1682565610.jpg"
                  className="rounded-md h-[40%] w-[80%] object-cover ml-auto mr-auto mb-[20px] block relative rounded-[8px]"
                  alt=""
                />
              </Link>
              <div className="titleBlog">
                <h1 className="contentBlog_h1">
                  Quỳnh Thi, Hoa Mỹ, Hàn Hằng mách bạn cách uốn tóc xoăn phồng
                  mượt tại nhà cực nhanh gọn
                </h1>
              </div>
              <div className="contentBlog_span">
                <span>
                  Để có một mái tóc uốn vừa phồng mượt xinh xắn, vừa tiết kiệm
                  mà lại không khiến tóc bị hư tổn như Quỳnh Thi, Hàn Hằng, Hoa
                  Mỹ, Trang Ash, Tring Tây, Linh Sim, thì hãy cùng xem các cô
                  nàng này đã biến hóa mái tóc như thế nào với 2 dòng máy uốn
                  tóc Halio Premium cực hot dạo gần đây nhé.
                </span>
              </div>
              <div className="pt-10 flex justify-center items-center">
                <div className="contentBlog_diveder "></div>
              </div>
              <div>
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/lixibox-production-uploads/blogs/pictures/16997/original_1682565410.jpeg"
                  className="w-[800px] h-[110px] ml-auto mr-auto "
                  alt=""
                />
              </div>
              <div className="w-[70%] ml-auto mr-auto font-bold">
                <p className="text-left text-[18px]">Quỳnh Thi</p>
                <p className="title">
                  Kiểu tóc xoăn lơi được xem là mái tóc quốc dân vì đi chơi, đi
                  học, đi làm bạn đều có thể sử dụng được. Đây cũng là kiểu tóc
                  uốn mà Quỳnh Thi yêu thích. Cô nàng đã đăng tải lên YouTube
                  một video hướng dẫn chị em cách uốn tóc xoăn phồng mượt tại
                  nhà cực nhanh gọn giúp cải thiện gương mặt. Ngoài dụng cụ như
                  thun, lược chải rối thì đặc biệt không thể thiếu “nhân vật
                  chính” là máy uốn tóc tự xoay ion âm Halio instaCurl Premium.
                </p>
              </div>
              <div>
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/lixibox-production-uploads/blogs/pictures/16996/original_1682565348.png"
                  className="w-[800px] h-[50%] ml-auto mr-auto"
                  alt=""
                />
                <p className="w-[70%] ml-auto mr-auto font-bold text-left mt-10 text-[20px] text-black">
                  Xem Thêm:
                </p>
                <p className="w-[70%] ml-auto mr-auto font-bold text-left mt-10 text-[20px] title_p">
                  <a href="">
                    &gt;&gt;&nbsp;Cuối cùng đã tìm ra siêu phẩm uốn tóc đẹp
                    10/10 khiến Hàn Hằng, Quỳnh Thi và hội gái xinh “mê xỉu”!
                  </a>
                </p>
                <p className="w-[70%] ml-auto mr-auto font-bold text-left mt-10 text-[20px] title_p">
                  <a href="">
                    &gt;&gt;&nbsp;Nàng tóc tẩy nhuộm mạnh tay chi tiền mua 2 máy
                    uốn tóc Halio và cái kết đáng suy ngẫm
                  </a>
                </p>
              </div>
              <div>
                <CartBlog />
              </div>
              <div>
                <Carts />
              </div>
            </section>

            <section className="sideContent"></section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Tpost;
