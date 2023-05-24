import React, { useEffect, useState } from "react";
import "./Payment.css";
import { TiTick } from "react-icons/ti";

import { FaShippingFast, FaAddressCard } from "react-icons/fa"
import { MdPayment } from "react-icons/md"
import { AiOutlineFileDone, AiOutlineProfile, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { GrUserExpert } from "react-icons/gr"

import paypal from "../Image/paypal.jpg"
import momo from "../Image/logo-momo.jpg"
import cod from "../Image/cod.jpg"
import LogoGHTK from "../Image/Logo-GHTK.png"
import LogoVT from "../Image/Logo-Viettel-Post-Red.png"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
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

const Shipping = [
  {
    id: 1,
    name: "Giao hàng tiết kiệm",
    image: LogoGHTK,
    time_shipping: "3 đến 5 ngày",
    price: 35000
  },
  {
    id: 2,
    name: "Viettel Post",
    image: LogoVT,
    time_shipping: "2 đến 4 ngày",
    price: 40000
  }
];

const payments = [
  {
    id: 1,
    name: "PayPal",
    image: paypal
  },
  {
    id: 2,
    name: "MoMo",
    image: momo
  },
  {
    id: 3,
    name: "Nhận hàng thanh toán",
    image: cod
  }
]
const Stepper = () => {
  let total = JSON.parse(localStorage.getItem("total")) || 0
  const [userId, setUserId] = useState(localStorage.getItem("userid") || "")
  const [userName, setUserName] = useState(localStorage.getItem("username") || "")
  const [userMobile, setUserMobile] = useState(localStorage.getItem("usermobile") || "")
  const [userEmail, setUserEmail] = useState(localStorage.getItem("useremail") || "")
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [shipping, setShipping] = useState();
  const [payment, setPayment] = useState(0);
  const [totalprice, setTotalprice] = useState(total);

  const sumPrice = (price, qty) => {
    const total = price * qty
    return total;
  }
  console.log(payment);

  useEffect(() => {
    if (shipping) {
      const price = shipping.price + total
      setTotalprice(price)
    }
  }, [shipping])


  const handerClickCheckOut = () => {
    console.log(userId);
  }


  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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



      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 pt-1">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Sản phẩm đã chọn</p>
          <p className="text-gray-400">Kiểm tra các mặt hàng của bạn. Và chọn một phương thức vận chuyển phù hợp.</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 overflow-y-scroll">
            {cartItems.map((item) => (
              <div className="flex flex-col rounded-lg bg-white sm:flex-row" >
                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.image} alt="" />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.title}</span>
                  <span className="float-right text-gray-400">{item.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })} x {item.qty}</span>
                  <p className="text-lg font-bold">{sumPrice(item.price, item.qty).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                </div>
              </div>
            ))}


          </div>
          {currentStep == 3 ? (
            <>
              <p className="mt-8 text-lg font-medium">Phương thức thanh toán</p>
              <div className="h-[350px] overflow-y-scroll">

                <form className="mt-5 grid gap-6">
                  {payments.map((item, index) => (
                    <div className="relative" key={item.id}  >
                      <input className="peer hidden" id={`radio_${index}`} type="radio" name="radio" onClick={() => setPayment(item)} required />
                      <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                      <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for={`radio_${index}`}>
                        <img className="w-14 h-10 object-contain rounded-lg" src={item.image} alt="" />
                        <div className="ml-5">
                          <span className="mt-2 font-semibold">{item.name}</span>

                        </div>
                      </label>
                    </div>
                  ))}
                </form>
              </div>
            </>
          ) : (
            <>
              <p className="mt-8 text-lg font-medium">Đơn vị vận chuyển</p>
              <form className="mt-5 grid gap-6">
                {Shipping.map((item, index) => (
                  <div className="relative" key={item.id}  >
                    <input className="peer hidden" id={`radio_${index}`} type="radio" name="radio" onClick={() => setShipping(item)} required />
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for={`radio_${index}`}>
                      <img className="w-14 h-10 object-contain rounded-lg" src={item.image} alt="" />
                      <div className="ml-5">
                        <span className="mt-2 font-semibold">{item.name}</span>
                        <p className="text-slate-500 text-sm leading-6 text-left">{item.time_shipping}</p>
                      </div>
                    </label>
                  </div>
                ))}


              </form>
            </>
          )}

        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <div>
            {currentStep == 1 ?
              (
                <div className="">
                  <p className="text-xl font-medium">Thông tin</p>
                  <p className="text-gray-400">Xem lại thông tin trước khi đặt hàng</p>
                  <label for="email" className="mt-4 mb-2 block text-sm font-medium">Tên người nhận</label>
                  <div className="relative">
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full rounded-md border py-3 border-gray-200  pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" required />

                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <GrUserExpert />
                    </div>
                  </div>
                  <label for="card-holder" className="mt-4 mb-2 block text-sm font-medium">Email</label>
                  <div className="relative">
                    <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="w-full rounded-md border py-3 border-gray-200  pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" required />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <AiOutlineMail />
                    </div>
                  </div>
                  <label for="card-holder" className="mt-4 mb-2 block text-sm font-medium">Số điện thoại</label>
                  <div className="relative">
                    <input type="text" value={userMobile} onChange={(e) => setUserMobile(e.target.value)} className="w-full rounded-md border py-3 border-gray-200  pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Nhập số điện thoại" required />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <AiOutlinePhone />

                    </div>
                  </div>

                  <button className="mt-4 mb-8 w-full rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white">Thay đổi thông tin</button>
                </div>
              ) :
              currentStep == 2 ?
                (

                  <div className="">
                    <p className="text-xl font-medium">Địa chỉ giao hàng</p>
                    <p className="text-gray-400">Xem lại địa chỉ giao hàng trước khi đặt hàng</p>
                    <label for="email" className="mt-4 mb-2 block text-sm font-medium">Tỉnh/ Thành phố</label>
                    <div className="relative">
                      <select id="countries" className="bg-gray-50 border pl-9 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <FaAddressCard />
                      </div>
                    </div>
                    <label for="card-holder" className="mt-4 mb-2 block text-sm font-medium">Quận/ Huyện</label>
                    <div className="relative">
                      <select id="countries" className="bg-gray-50 border pl-9 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <FaAddressCard />
                      </div>
                    </div>
                    <label for="card-holder" className="mt-4 mb-2 block text-sm font-medium">Phương/ xã</label>
                    <div className="relative">
                      <select id="countries" className="bg-gray-50 border pl-9 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <FaAddressCard />

                      </div>
                    </div>
                    <label for="card-no" className="mt-4 mb-2 block text-sm font-medium">Số nhà</label>
                    <div className="relative">
                      <input type="text" id="email" name="email" className="w-full rounded-md border py-3 border-gray-200  pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <FaAddressCard />

                      </div>
                    </div>
                    <button className="mt-4 mb-8 w-full rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white">Thay đổi thông tin</button>
                  </div>


                ) :
                currentStep == 3 ? (
                  <div className="pt-64">
                    <p className="text-xl font-medium">Nhận hàng thanh toán</p>
                    <p className="text-gray-400"> phương thức thanh toán truyền thống nhất, trong đó khách hàng trả tiền mặt khi nhận hàng. Bạn có thể chấp nhận thanh toán tiền mặt trực tiếp từ khách hàng hoặc thông qua đại lý vận chuyển.</p>
                  </div>
                )
                  :
                  (
                    <div>hello4</div>
                  )
            }
            {
              currentStep == 4 ? (
                <div>

                </div>
              ) :
                <>
                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Tổng tiền sản phẩm</p>
                      <p className="font-semibold text-gray-900">{total.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                    </div>
                    {shipping ? (<div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Phí giao hàng</p>
                      <p className="font-semibold text-gray-900">{shipping.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                    </div>) : null}

                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Tổng thanh toán</p>
                    <p className="text-2xl font-semibold text-gray-900">{totalprice.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                  </div>
                </>
            }

          </div>
          {
            currentStep == 3 ? (
              <button className="mt-4 mb-8 w-full rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white">{payment.id == 3 ? "Đặt hàng" : "Thanh toán"}</button>) :

              <></>
          }
        </div>
      </div>



      {
        !complete && (
          <div className="grid grid-flow-col justify-center p-4">
            {currentStep != 1 ? (
              <button
                className=" w-full rounded-md bg-[#fe2c6d] px-3 py-3 font-medium text-white"
                onClick={() => {
                  currentStep === steps.length
                    ? setComplete(true)
                    : setCurrentStep((prev) => prev - 1);
                }}
              >
                Trở về
              </button>) : null}

            <button
              className=" w-full rounded-md bg-[#fe2c6d] px-3 py-3 font-medium text-white"
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
            >
              {currentStep === steps.length ? "Hoàn thành" : "tiếp tục"}
            </button>
          </div>
        )
      }
    </>
  );
};

export default Stepper;