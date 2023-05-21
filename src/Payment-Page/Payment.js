import React, { useState } from "react";
import "./Payment.css";
import { TiTick } from "react-icons/ti";
import { GrContactInfo } from "react-icons/gr"
import { FaShippingFast } from "react-icons/fa"
import { MdPayment } from "react-icons/md"
import { AiOutlineFileDone, AiOutlineProfile } from "react-icons/ai"
const steps = [
  {
    name: "Thông tin người nhận",
    icon: <AiOutlineProfile />,
  },
  {
    name: "Thông tin giao hàng",
    icon: <FaShippingFast />,
  },
  {
    name: "Thanh toán",
    icon: <MdPayment />,
  },
  {
    name: "Hoàn thành",
    icon: <AiOutlineFileDone />,
  },
];
const Stepper = () => {

  const [userName , setUserName] = useState(localStorage.getItem("username"))
  const [userMobile , setUserMobile] = useState(localStorage.getItem("usermobile"))
  const [userEmail , setUserEmail] = useState(localStorage.getItem("useremail"))


  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
              } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : step.icon}
            </div>
            <p className="text-gray-500">{step.name}</p>
          </div>
        ))}
      </div>

      {currentStep == 1 ?
        (
          <div>
            <div className="container">
              <div className="Iv-style">
                <div className="wrapLayout">
                  <div className="flex flex-wrap justify-center">
                    <div className="main_styler w-[100%] mb-2">
                      <div className="flex flex-col bg-[#f5f6f6] pt-2">
                        <div className="bg-white rounded-[8px]">
                          <div className="w-[100%] h-[44px] bg-white text-[25px] text-black mt-2">
                            <div className="text-center ">
                              Chỉnh sửa thông tin cá nhân
                            </div>
                          </div>
                          <div>
                            <div className="Ivite_loho ">
                              <div className="text-left ">
                                <label>Tên người nhận: </label>
                                <input
                                  type="text"
                                  value={userName}
                                  onChange={(e) => setUserName(e.target.value)}
                                  className=" ml-2 placeholder:text-black border-b-2 color-[black]"
                                />
                              </div>
                              <div className="text-left mt-3">
                                <label>Email: </label>
                                <input
                                  type="email"
                                  value={userEmail}
                                  onChange={(e) => setUserEmail(e.target.value)}
                                  className="w-[40%] ml-2 placeholder:text-black border-b-2 color-[black]"
                                />
                              </div>
                              <div className="text-left mt-3">
                                <label>Số điện thoại: </label>
                                <input
                                  required
                                  type="text"
                                  value={userMobile}
                                  onChange={(e) => setUserMobile(e.target.value)}
                                  className="ml-2 placeholder:text-black border-b-2 color-[black]"
                                />
                              </div>
                             
                              {/* <div className="text-left mt-3">
                          <label>Mật khẩu: </label>
                          <input
                            required
                            type="password"
                            className="ml-2 placeholder:text-black border-b-2 color-[black]"
                          />
                        </div> */}
                              <button className="btn btn-primary m-4">
                                Cập nhật
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) :
        currentStep == 2 ?
          (
            <div>hello2</div>
          ) :
          currentStep == 3 ?
            (
              <div>hello3</div>
            ) :
            (
              <div>hello4</div>
            )
      }

      {!complete && (
        <>
          {currentStep != 1 ? (
            <button
              className="btn"
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev - 1);
              }}
            >
              Trở về
            </button>) : null}

          <button
            className="btn"
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
          >
            {currentStep === steps.length ? "Hoàn thành" : "tiếp tục"}
          </button>
        </>
      )}
    </>
  );
};

export default Stepper;