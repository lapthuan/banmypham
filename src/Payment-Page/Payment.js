import React, { useState } from "react";
import "./Payment.css";
import { TiTick } from "react-icons/ti";
import { GrContactInfo } from "react-icons/gr"
import { FaShippingFast } from "react-icons/fa"
import { MdPayment } from "react-icons/md"
import { AiOutlineFileDone,AiOutlineProfile } from "react-icons/ai"

const Stepper = () => {
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