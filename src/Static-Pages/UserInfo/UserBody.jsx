import React, { useEffect, useState } from "react";
import "./UserInfor.css";
import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import img1 from "../../Image/Ivite1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByIdUser } from "../../redux/action/orderActions";
import TableAntd from "./TableGetOrder"
const UserBody = ({ setTab, tab }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const userId = window.localStorage.getItem("userid")

  const orderByUser = useSelector((state) => state.orderGetAll)
  const { isloadingGetOrder, iserrorGetOrder, issuccessGetOrder, getOrder } = orderByUser
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrderByIdUser(userId))
  }, [userId])
  console.log(getOrder);
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const filteredOrders = getOrder.filter(order => order.orderStatus === 'Đang vận chuyển') || []

  return (
    <>
      <div className="flex flex-col bg-[#f5f6f6] pt-2 w-full">
        <div className="bg-white rounded-[8px]">
          <div className="br w-[100%] h-[44px] bg-white flex">
            <div className="item_us">
              <div className="flex grid-flow-col justify-center">
                <div
                  className={`User_item ${tab === 1 ? "active" : ""}`}
                  onClick={() => setTab(1)}
                >
                  Tất cả
                </div>
                <div
                  className={`User_item ${tab === 2 ? "active" : ""}`}
                  onClick={() => setTab(2)}
                >
                  Đang xử lý
                </div>
                <div
                  className={`User_item ${tab === 3 ? "active" : ""}`}
                  onClick={() => setTab(3)}
                >
                  Đã tiếp nhận
                </div>
                <div
                  className={`User_item ${tab === 4 ? "active" : ""}`}
                  onClick={() => setTab(4)}
                >
                  Đang vận chuyển
                </div>
                <div
                  className={`User_item ${tab === 5 ? "active" : ""}`}
                  onClick={() => setTab(5)}
                >
                  Đã nhận hàng{" "}
                </div>
                <div
                  className={`User_item ${tab === 6 ? "active" : ""}`}
                  onClick={() => setTab(6)}
                >
                  Đã hủy
                </div>
                <div
                  className={`User_item ${tab === 7 ? "active" : ""}`}
                  onClick={() => setTab(7)}
                >
                  Đã trả hàng
                </div>
              </div>
            </div>
          </div>
          <div>
            {tab == 1 ? (
              <div className="Ivite_loho ">
                {getOrder.length != 0 ? (
                  <TableAntd orderData={getOrder} />
                ) : (
                  <div className="flex flex-col">
                    <div className="ml-auto mr-auto">
                      <BsCartCheck size="150px" color="gray" />
                    </div>
                    <div className="text-[20px] mt-3 text-gray-400 text-center">
                      Không tìm thấy đơn hàng
                    </div>
                    <Link to="/">
                      <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                        Tiếp tục mua sắm
                      </button>
                    </Link>
                  </div>)}

              </div>
            ) : tab == 2 ? (
              <div className="Ivite_loho ">
                {getOrder.length != 0 ? (
                  <TableAntd orderData={getOrder} />
                ) : (
                  <div className="flex flex-col">
                    <div className="ml-auto mr-auto">
                      <BsCartCheck size="150px" color="gray" />
                    </div>
                    <div className="text-[20px] mt-3 text-gray-400 text-center">
                      Không tìm thấy đơn hàng
                    </div>
                    <Link to="/">
                      <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                        Tiếp tục mua sắm
                      </button>
                    </Link>
                  </div>)}

              </div>
            ) : tab == 3 ? (
              <div className="Ivite_loho ">
                {getOrder.length != 0 ? (
                  <TableAntd orderData={getOrder} />
                ) : (
                  <div className="flex flex-col">
                    <div className="ml-auto mr-auto">
                      <BsCartCheck size="150px" color="gray" />
                    </div>
                    <div className="text-[20px] mt-3 text-gray-400 text-center">
                      Không tìm thấy đơn hàng
                    </div>
                    <Link to="/">
                      <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                        Tiếp tục mua sắm
                      </button>
                    </Link>
                  </div>)}

              </div>
            ) : tab == 4 ? (
              <div className="Ivite_loho ">
                {filteredOrders.length != 0 ? (
                  <TableAntd orderData={filteredOrders} />
                ) : (
                  <div className="flex flex-col">
                    <div className="ml-auto mr-auto">
                      <BsCartCheck size="150px" color="gray" />
                    </div>
                    <div className="text-[20px] mt-3 text-gray-400 text-center">
                      Không tìm thấy đơn hàng
                    </div>
                    <Link to="/">
                      <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                        Tiếp tục mua sắm
                      </button>
                    </Link>
                  </div>)}

              </div>
            ) : tab == 5 ? (
              <div className="Ivite_loho ">
                {getOrder.length != 0 ? (
                  <TableAntd orderData={getOrder} />
                ) : (
                  <div className="flex flex-col">
                    <div className="ml-auto mr-auto">
                      <BsCartCheck size="150px" color="gray" />
                    </div>
                    <div className="text-[20px] mt-3 text-gray-400 text-center">
                      Không tìm thấy đơn hàng
                    </div>
                    <Link to="/">
                      <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                        Tiếp tục mua sắm
                      </button>
                    </Link>
                  </div>)}

              </div>
            ) : tab == 6 ? (
              <div className="Ivite_loho ">
                {getOrder.length != 0 ? (
                  <TableAntd orderData={getOrder} />
                ) : (
                  <div className="flex flex-col">
                    <div className="ml-auto mr-auto">
                      <BsCartCheck size="150px" color="gray" />
                    </div>
                    <div className="text-[20px] mt-3 text-gray-400 text-center">
                      Không tìm thấy đơn hàng
                    </div>
                    <Link to="/">
                      <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                        Tiếp tục mua sắm
                      </button>
                    </Link>
                  </div>)}

              </div>
            ) : (
              <div className="Ivite_loho ">
                {getOrder.length != 0 ? (
                  <TableAntd orderData={getOrder} />
                ) : (
                  <div className="flex flex-col">
                    <div className="ml-auto mr-auto">
                      <BsCartCheck size="150px" color="gray" />
                    </div>
                    <div className="text-[20px] mt-3 text-gray-400 text-center">
                      Không tìm thấy đơn hàng
                    </div>
                    <Link to="/">
                      <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                        Tiếp tục mua sắm
                      </button>
                    </Link>
                  </div>)}

              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBody;
