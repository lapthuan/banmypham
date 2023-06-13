import React, { useState } from "react";
import "./Contact.css";
import { useDispatch } from "react-redux";
import { newContact } from "../../../redux/action/ContactAction";
import { toast } from "react-toastify";
const Contact = () => {
  const dispatch = new useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messager, setMessager] = useState("");
  var checkMail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const handlerSendMessage = () => {
    if (!checkMail.test(email) || email.length == "") {
      toast.warning("Email không hợp lệ!");
      return;
    }
    dispatch(newContact(name, email, messager));
  };
  return (
    <>
      <div className=" mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="relative overflow-hidden bg-no-repeat bg-cover CBack"></div>
          <div className="text-gray-800 px-4 md:px-12 ml-auto mr-auto lg:w-[50%] w-full">
            <div className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6 CBlur">
              <div className="text-4xl mb-5 font-bold ">GỬI PHẢN HỒI</div>
              <div className="grid md:grid-cols-3  lg:grid-cols-3 gap-x-6  ">
                <div className="mb-3 lg:mb-0 text-center mx-auto">
                  <svg
                    className="w-8 h-8 text-[#fe2c6d] mb-3 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                    />
                  </svg>
                  <h6 className="font-bold text-[15px]">Việt Nam</h6>
                </div>
                <div className="mb-3 lg:mb-0 text-center mx-auto">
                  <svg
                    className="w-8 h-8 text-[#fe2c6d] mb-3 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                    ></path>
                  </svg>
                  <h6 className="font-bold text-[15px]">
                    73 Nguyễn Huệ, Phường 2, TP, Vĩnh Long
                  </h6>
                </div>
                <div className="mb-3 md:mb-0 text-center mx-auto">
                  <svg
                    className="w-8 h-8 text-[#fe2c6d] mb-3 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    ></path>
                  </svg>
                  <h6 className="font-bold text-[15px]">0270 3822 141</h6>
                </div>
              </div>
              <div className="max-w-[700px] mx-auto mt-5">
                <form>
                  <div className="text-left">
                    <label className="text-[15px] ">Nhập Tên: </label>
                  </div>
                  <div className="mb-3 mt-3">
                    <input
                      type="text"
                      className="w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Nhập tên"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="text-left">
                    <label className="text-[15px] ">Nhập Email: </label>
                  </div>
                  <div className="mb-3 mt-3">
                    <input
                      type="Email"
                      className="w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Nhập email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="text-left">
                    <label className="text-[15px] ">Nhập nội dung: </label>
                  </div>
                  <div className="mb-3">
                    <textarea
                      rows="3"
                      className=" mt-3 form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-[15px]"
                      onChange={(e) => setMessager(e.target.value)}
                      placeholder="Nhập nội dung phản hồi"
                    ></textarea>
                  </div>
                  <button
                    className=" w-full text-[15px] rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white"
                    onClick={handlerSendMessage}
                  >
                    Gửi đi
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto">
            <div className="shadow mt-10 rounded-md bg-color-card overflow-auto FMap">
              <h4 className="lg:text-left text-[40px] font-bold text-color-title pl-3 mt-3 ml-5">
                Vị trí
              </h4>{" "}
              <div className="flex flex-wrap p-4 ">
                <iframe
                  className="rounded-lg"
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15704.576624311765!2d105.9618098!3d10.2499554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a82ce95555555%3A0x451cc8d95d6039f8!2zVHLGsOG7nW5nIMSQSCBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBWxKluaCBMb25n!5e0!3m2!1svi!2s!4v1684051014906!5m2!1svi!2s"
                  width="100%"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
