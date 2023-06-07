import React, { useEffect } from "react";

import {
  AiFillFacebook,
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../../redux/action/categoryActions";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="mt-10">
      <Footer2 />
    </div>
  );
};

const Footer2 = () => {
  const dispatch = useDispatch();
  const categorylist = useSelector((state) => state.categoryList);
  const { categorys } = categorylist;
  useEffect(() => {
    dispatch(listCategory());
  }, []);

  return (
    <footer className="bg-white dark:bg-black">
      <div className=" ">
        <div className="mx-auto w-full max-w-screen-xl grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <div className="text-white text-[40px] text-left">LUXUBU</div>
            <div className="text-[#9a9b9b] text-[15px] text-left mt-5 leading-5 ">
              Luxubu - Mang hàng cao cấp vừa túi tiền đến dân thành thị
            </div>
            <div className="mt-5">
              <div className="flex mt-4 space-x-6  md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-blue-600"
                >
                  <svg
                    className="w-9 h-9"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-red-600"
                >
                  <svg
                    className="w-9 h-9"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Instagram page</span>
                </a>
              </div>
            </div>
          </div>
          <div className="ml-5">
            <h2 className="mb-6 text-[22px] mt-3 text-gray-900 text-left  dark:text-[#9a9b9b]">
              Danh mục
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {categorys
                ?.map((item) => (
                  <li className="mb-4 text-left">
                    <Link
                      key={item._id}
                      className=" hover:underline text-[#9a9b9b] text-[13px] "
                    >
                      {item.title}
                    </Link>
                  </li>
                ))
                .slice(0, 4)}
              <li className="mb-4 text-left">
                <a
                  href="#"
                  className=" hover:underline text-[#9a9b9b] text-[13px] "
                >
                  Sữa rửa mặt
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-5">
            <h2 className="mb-6 text-[22px] mt-3 text-gray-900 text-left  dark:text-[#9a9b9b]">
              Hướng dẫn
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 text-left">
                <a
                  href="#"
                  className=" hover:underline text-[#9a9b9b] text-[13px] "
                >
                  Mã giảm giá
                </a>
              </li>
              <li className="mb-4 text-left">
                <a
                  href="#"
                  className="hover:underline text-[#9a9b9b] text-[13px] text-left"
                >
                  Giới thiệu bạn bè
                </a>
              </li>
              <li className="mb-4 text-left">
                <a
                  href="#"
                  className="hover:underline text-[#9a9b9b] text-[13px] text-left"
                >
                  Thông tin về Luxubu
                </a>
              </li>
              <li className="mb-4 text-left">
                <a
                  href="#"
                  className="hover:underline text-[#9a9b9b] text-[13px] text-left"
                >
                  Hướng dẫn mua hàng
                </a>
              </li>
              <li className="mb-4 text-left">
                <a
                  href="#"
                  className="hover:underline text-[#9a9b9b] text-[13px] text-left"
                >
                  Gửi yêu cầu hỗ trợ
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-5">
            <h2 className="mb-6 text-[22px] mt-3 text-gray-900 text-left  dark:text-[#9a9b9b]">
              Thông tin
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 text-left">
                <a
                  href="#"
                  className=" hover:underline text-[#9a9b9b] text-[13px] "
                >
                  Giới thiệu Luxubu
                </a>
              </li>
              <li className="mb-4 text-left">
                <a
                  href="#"
                  className="hover:underline text-[#9a9b9b] text-[13px] text-left"
                >
                  Hỗ trợ đơn hàng
                </a>
              </li>
              <li className="mb-4 text-left">
                <a
                  href="#"
                  className="hover:underline text-[#9a9b9b] text-[13px] text-left"
                >
                  Mời bạn bè - nhận thưởng ngay
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6  bg-[#191b1d] dark:bg-[#191b1d] md:flex md:items-center md:justify-between w-[100%]">
          <div className="mx-auto w-full max-w-screen-xl">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center text-center">
              Bản quyền của Công Ty Cổ Phần Sachi - www.luxubu.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
