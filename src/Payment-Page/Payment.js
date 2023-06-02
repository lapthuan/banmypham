import React, { useEffect, useState } from "react";
import "./Payment.css";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaShippingFast, FaAddressCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import {
  AiOutlineFileDone,
  AiOutlineProfile,
} from "react-icons/ai";
import gitcheck from "../Image/verified.gif";
import paypal from "../Image/paypal.jpg";
import momo from "../Image/logo-momo.jpg";
import cod from "../Image/cod.jpg";
import LogoGHTK from "../Image/Logo-GHTK.png";
import LogoVT from "../Image/Logo-Viettel-Post-Red.png";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import {
  createOrder,
  getMoney,
  resetOrder,
} from "../redux/action/orderActions";
import { resetCart } from "../redux/action/cartActions";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { updateUser } from "../redux/action/auth";
import InfoUser from "./InfoUser";
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
    price: 35000,
  },
  {
    id: 2,
    name: "Viettel Post",
    image: LogoVT,
    time_shipping: "2 đến 4 ngày",
    price: 40000,
  },
];

const payments = [
  {
    id: 1,
    name: "PayPal",
    image: paypal,
  },
  {
    id: 2,
    name: "MoMo",
    image: momo,
  },
  {
    id: 3,
    name: "Nhận hàng thanh toán",
    image: cod,
  },
];
const Stepper = () => {
  const dispatch = new useDispatch();
  let total = JSON.parse(localStorage.getItem("total")) || 0;
  const [userId, setUserId] = useState(localStorage.getItem("userid") || "");
  const [userName, setUserName] = useState(localStorage.getItem("username") || "");
  const [firstName, setFirstName] = useState(localStorage.getItem("userfirstname") || "");
  const [userMobile, setUserMobile] = useState(localStorage.getItem("usermobile") || "");
  const [userEmail, setUserEmail] = useState(localStorage.getItem("useremail") || "");
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [shipping, setShipping] = useState();
  const [payment, setPayment] = useState(payments[0]);
  const [totalprice, setTotalprice] = useState(total);
  const [usdAmount, setUsdAmount] = useState(0);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const sumPrice = (price, qty) => {
    const total = price * qty;
    return total;
  };



  const orderCreate = useSelector((state) => state.orderCreate);
  const { isloading, issuccess, order } = orderCreate;
  const orderMoney = useSelector((state) => state.orderGetMoney);
  const { money } = orderMoney;

  useEffect(() => {
    dispatch(getMoney());
  }, []);
  useEffect(() => {
    if (shipping) {
      const price = shipping.price + total;
      setTotalprice(price);
      if (money) {
        const usdValue = price / money.VND.value;
        setUsdAmount(usdValue.toFixed(2));
      }
    }
  }, [shipping]);
  const isValidPhoneNumber = (phoneNumber) => {
    const pattern = /^\d{10}$/;
    return pattern.test(phoneNumber);
  }
  const handerClickCheckOut = () => {
    setComplete(true);
    setCurrentStep(1);
    dispatch(createOrder(cartItems, payment, shipping, userId, totalprice));
  };
  useEffect(() => {
    if (isloading == true) {
      console.log("loading");
    }
    if (issuccess == true) {
      console.log("success");
      dispatch(resetCart());
      dispatch(resetOrder());
    }
  }, [isloading, issuccess]);

  const handerClicknext = () => {
    if (!isValidPhoneNumber(userMobile)) {
      toast.warning("Sai đinh dạng số điện thoại")
      return
    }
    if (userEmail == "" || userName == "" || userMobile == "" || firstName == "") {
      toast.warning("Thiếu thông tin người nhận");
      return;
    }

    if (currentStep == 2 && shipping == undefined) {
      toast.warning("Hãy chọn đơn vị vận chuyển");
      return;
    }
    if (currentStep == 3 && payment == 0) {
      toast.warning("Hãy chọn phương thức thanh toán");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <>
      <div className="flex justify-between z-10">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
              } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? (
                <TiTick size={24} />
              ) : (
                step.icon
              )}
            </div>
            <p className="text-gray-500">{step.name}</p>
          </div>
        ))}
      </div>

      {!complete ? (
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 pt-1">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Sản phẩm đã chọn</p>
            <p className="text-gray-400">
              Kiểm tra các mặt hàng của bạn. Và chọn một phương thức vận chuyển
              phù hợp.
            </p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 overflow-y-scroll">
              {cartItems.map((item) => (
                <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                  <img
                    className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-semibold">{item.title}</span>
                    <span className="float-right text-gray-400">
                      {item.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}{" "}
                      x {item.qty}
                    </span>
                    <p className="text-lg font-bold">
                      {sumPrice(item.price, item.qty).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {currentStep == 3 ? (
              <>
                <p className="mt-8 text-lg font-medium">
                  Phương thức thanh toán
                </p>
                <div className="h-[350px] overflow-y-scroll">
                  <form className="mt-5 grid gap-6">
                    {payments.map((item, index) => (
                      <div className="relative" key={item.id}>
                        {item.name == "PayPal" ? (
                          <input
                            className="peer hidden"
                            id={`radio_${index}`}
                            type="radio"
                            name="radio"
                            onClick={() => setPayment(item)}
                            required
                            checked
                          />
                        ) : (
                          <input
                            className="peer hidden"
                            id={`radio_${index}`}
                            type="radio"
                            name="radio"
                            onClick={() => setPayment(item)}
                            required
                          />
                        )}

                        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                        <label
                          className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                          for={`radio_${index}`}
                        >
                          <img
                            className="w-14 h-10 object-contain rounded-lg"
                            src={item.image}
                            alt=""
                          />
                          <div className="ml-5">
                            <span className="mt-2 font-semibold">
                              {item.name}
                            </span>
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
                    <div className="relative" key={item.id}>
                      <input
                        className="peer hidden"
                        id={`radio_${index}`}
                        type="radio"
                        name="radio"
                        onClick={() => setShipping(item)}
                      />
                      <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                      <label
                        className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for={`radio_${index}`}
                      >
                        <img
                          className="w-14 h-10 object-contain rounded-lg"
                          src={item.image}
                          alt=""
                        />
                        <div className="ml-5">
                          <span className="mt-2 font-semibold">
                            {item.name}
                          </span>
                          <p className="text-slate-500 text-sm leading-6 text-left">
                            {item.time_shipping}
                          </p>
                        </div>
                      </label>
                    </div>
                  ))}
                </form>
              </>
            )}
          </div>
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 ">
            <div>
              {currentStep == 1 ? (
                <InfoUser />
              ) : currentStep == 2 ? (
                <div className="">
                  <p className="text-xl font-medium">Địa chỉ giao hàng</p>
                  <p className="text-gray-400">
                    Xem lại địa chỉ giao hàng trước khi đặt hàng
                  </p>
                  <label
                    for="email"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Tỉnh/ Thành phố
                  </label>
                  <div className="relative">
                    <select
                      id="countries"
                      className="bg-gray-50 border pl-9 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
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
                  <label
                    for="card-holder"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Quận/ Huyện
                  </label>
                  <div className="relative">
                    <select
                      id="countries"
                      className="bg-gray-50 border pl-9 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
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
                  <label
                    for="card-holder"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Phương/ xã
                  </label>
                  <div className="relative">
                    <select
                      id="countries"
                      className="bg-gray-50 border pl-9 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
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
                  <label
                    for="card-no"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Số nhà
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="w-full rounded-md border py-3 border-gray-200  pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="your.email@gmail.com"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <FaAddressCard />
                    </div>
                  </div>
                  <button className="mt-4 mb-8 w-full rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white">
                    Thay đổi thông tin
                  </button>
                </div>
              ) : currentStep == 3 && payment?.name == "PayPal" ? (
                <div className="lg:pt-24 sm:pt-2 ">
                  <h3 className="">PayPal</h3>
                  <p className="text-gray-400 font-normal">
                    {" "}
                    Với PayPal, người dùng có thể tạo tài khoản miễn phí và liên
                    kết nó với tài khoản ngân hàng của mình hoặc thẻ tín dụng để
                    thực hiện các giao dịch trực tuyến. PayPal cung cấp một
                    phương thức an toàn và bảo mật để chuyển tiền và mua sắm
                    trực tuyến mà không cần tiết lộ thông tin tài chính cá nhân
                    cho người nhận.
                  </p>
                </div>
              ) : currentStep == 3 &&
                payment?.name == "Nhận hàng thanh toán" ? (
                <div className="lg:pt-64 sm:pt-2">
                  <p className="text-xl font-medium">Nhận hàng thanh toán</p>
                  <p className="text-gray-400">
                    {" "}
                    Phương thức thanh toán truyền thống nhất, trong đó khách
                    hàng trả tiền mặt khi nhận hàng. Bạn có thể chấp nhận thanh
                    toán tiền mặt trực tiếp từ khách hàng hoặc thông qua đại lý
                    vận chuyển.
                  </p>
                </div>
              ) : (
                <></>
              )}
              {currentStep == 4 ? (
                <div></div>
              ) : (
                <>
                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-gray-900">
                        Tổng tiền sản phẩm
                      </p>
                      <p className="font-semibold text-lg text-gray-900">
                        {total.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </p>
                    </div>
                    {shipping ? (
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-medium text-gray-900">
                          Phí giao hàng
                        </p>
                        <p className="font-semibold text-lg text-[#fe2c6d]">
                          +{" "}
                          {shipping.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </p>
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-lg font-medium text-gray-900">
                      Tổng thanh toán
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {totalprice.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </div>
                </>
              )}
            </div>
            {currentStep == 3 && payment?.name == "Nhận hàng thanh toán" ? (
              <button
                onClick={handerClickCheckOut}
                className="mt-4 mb-8 w-full rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white "
              >
                Đặt hàng
              </button>
            ) : currentStep == 3 && payment?.name == "PayPal" ? (
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AWdV3fBfwbxlAQyQO1FpzMo9tzwsNy2dCo1TiGxsZwro_qFF8MD9x6Kruo3Uwj3BH5uyc_-FoW5BzjLW",
                }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            value: usdAmount,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      console.log(details);

                      if (details.status == "COMPLETED") handerClickCheckOut();
                      toast.success("Thanh toán thành công");
                    });
                  }}
                />
              </PayPalScriptProvider>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div class="pyro">
            <div class="before"></div>
            <div class="after"></div>
          </div>
          <div className="grid-flow-col flex justify-center">
            <p className="text-[30px] mt-10 font-bold">
              Đã đặt đơn hàng thành công
            </p>
            <div className="mt-4">
              <img src={gitcheck} width="60px" height="40px"></img>
            </div>
          </div>

          <Link to={"/sale"}>
            <button className="mt-4 mb-8 text-[15px] lg:w-[20%] sm:w-full md:w-1/3 rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white  ">
              Tiếp tục mua hàng
            </button>
          </Link>
        </div>
      )}

      {!complete && (
        <div className="grid grid-flow-col justify-center p-4">
          {currentStep != 1 ? (
            <button
              className=" w-full rounded-md bg-[#fe2c6d] px-3 py-3 font-medium text-white"
              onClick={() => {
                setCurrentStep((prev) => prev - 1);
              }}
            >
              Trở về
            </button>
          ) : null}
          {currentStep === steps.length - 1 ? null : (
            <button
              className=" w-full rounded-md bg-[#fe2c6d] px-3 py-3 font-medium text-white"
              onClick={handerClicknext}
            >
              tiếp tục
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Stepper;
