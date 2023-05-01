import React, { useState } from "react";
import "./Ileft.css";
const Ileft = () => {
  const [showContent, setShowContent] = useState(false);

  function handleIconClick() {
    setShowContent(!showContent);
  }

  return (
    <div>
      {showContent == true ? (
        <div className="left-content " onClick={handleIconClick}>
          <div className="left-form">
            <div className="left-title">
              WELCOME GIFT
              <div className="outer_icon">
                <div className="isopen_icon"></div>
              </div>
            </div>
            <div className="message">
              Hãy nhập email, số điện thoại của bạn để nhận được mã giảm 20% cho
              đơn hàng đầu tiên.
            </div>
            <div class="mb-3">
              <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-black focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-black dark:focus:border-primary"
                  placeholder="Nhập email...."
                />

                <button
                  class="relative z-[2] flex items-center rounded-r bg-gray-600 px-6 py-2.5 text-base font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                >
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="left-bar hidden md:flex lg:flex "
          onClick={handleIconClick}
        >
          <div className="left-heading">
            WELCOME GIFT
            <div className="left-icon">
              <div className="icon"></div>
            </div>
          </div>
        </div>
      )}
      <div className="left-content-mobile md:hidden lg:hidden flex">
        <div className="left-form">
          <div className="left-title">
            WELCOME GIFT
            <div className="outer_icon">
              <div className="isopen_icon"></div>
            </div>
          </div>
          <div className="message">
            Hãy nhập email, số điện thoại của bạn để nhận được mã giảm 20% cho
            đơn hàng đầu tiên.
          </div>
          <div class="mb-3">
            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-black focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-black dark:focus:border-primary"
                placeholder="Nhập email...."
              />

              <button
                class="relative z-[2] flex items-center rounded-r bg-gray-600 px-6 py-2.5 text-base font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ileft;