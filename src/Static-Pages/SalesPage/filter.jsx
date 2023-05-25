import React, { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import "./filter.css";
import Modal from "react-modal";
const Filter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenPrice, setIsModalOpenPrice] = useState(false);
  const [isModalOpenBranch, setIsModalOpenBranch] = useState(false);

  const [isInStock, setIsInStock] = useState(false);
  const [isOutOfStock, setIsOutOfStock] = useState(false);

  const [isResetButtonDisabled, setIsResetButtonDisabled] = useState(true);

  const handleModalToggle = () => {
    if (isModalOpen == false) {
      setIsModalOpenPrice(false);
      setIsModalOpenBranch(false);
    }
    setIsModalOpen(!isModalOpen);
  };

  const handleModalPrice = () => {
    if (isModalOpenPrice == false) {
      setIsModalOpen(false);
      setIsModalOpenBranch(false);
    }
    setIsModalOpenPrice(!isModalOpenPrice);
  };

  const handleModalBranch = () => {
    if (isModalOpenBranch == false) {
      setIsModalOpen(false);
      setIsModalOpenPrice(false);
    }
    setIsModalOpenBranch(!isModalOpenBranch);
  };

  const handleInStockChange = (e) => {
    setIsInStock(e.target.checked);
  };

  const handleOutOfStockChange = (e) => {
    setIsOutOfStock(e.target.checked);
  };

  const handleResetButtonClick = () => {
    setIsInStock(false);
    setIsOutOfStock(false);
  };

  useEffect(() => {
    setIsResetButtonDisabled(!(isInStock || isOutOfStock));
  }, [isInStock, isOutOfStock]);

  const modalStyles = {
    overlay: {
      zIndex: 50,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      position: "none",
      backgroundColor: "none",
    },
    content: {
      position: "absolute",
      inset: "277px 300px 0px 50%",
      bottom: 0,
      left: "50%",
      transform: "translateX(-79%) translateY(100%)",
      width: "80%",
      maxWidth: 400,
      maxHeight: 200,
      margin: "0 auto",
      padding: "1rem",
      borderRadius: "0.5rem",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s ease-in-out",
      backgroundColor: "#ffffff",
      outline: "none",
    },
  };

  const modalPrice = {
    overlay: {
      zIndex: 50,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      position: "none",
      backgroundColor: "none",
    },
    content: {
      position: "absolute",
      inset: "277px 300px 0px 50%",
      bottom: 0,
      left: "50%",
      transform: "translateX(-79%) translateY(70%)",
      width: "80%",
      maxWidth: 400,
      maxHeight: 283,
      margin: "0 auto",
      padding: "1rem",
      borderRadius: "0.5rem",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s ease-in-out",
      backgroundColor: "#ffffff",
      outline: "none",
    },
  };

  return (
    <div className="h-[100px] w-[100%]">
      <div className="bg-[#fff] relative w-[100%] z-99">
        <div className="Filter_container">
          <div className="flex">
            <div className="flex items-center bg-gray-200 py-2 px-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button
                    className="bg-white py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onClick={handleModalPrice}
                  >
                    GIÁ
                  </button>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.5-1.5L10 9.5 14.5 4 16 5.5z" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <button
                    className="bg-white py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onClick={handleModalToggle}
                  >
                    TRẠNG THÁI
                  </button>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.5-1.5L10 9.5 14.5 4 16 5.5z" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <button
                    className="bg-white py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onClick={handleModalBranch}
                  >
                    THƯƠNG HIỆU
                  </button>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.5-1.5L10 9.5 14.5 4 16 5.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {isModalOpenBranch && (
        <Modal
          isOpen={isModalOpenBranch}
          onRequestClose={handleModalBranch}
          style={modalPrice}
          contentLabel="Trạng thái"
        >
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                onChange={handleInStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="text-[15px] font-medium text-black">
                Thương hiệu 1
              </label>
            </div>
            <div className="flex items-center mb-2 ">
              <input
                type="checkbox"
                onChange={handleOutOfStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="text-[15px] font-medium text-black">
                Thương hiệu 2
              </label>
            </div>
            <div className="flex items-center mb-2 ">
              <input
                type="checkbox"
                onChange={handleOutOfStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="text-[15px] font-medium text-black">
                Thương hiệu 3
              </label>
            </div>
            <div className="flex items-center mb-2 ">
              <input
                type="checkbox"
                onChange={handleOutOfStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="text-[15px] font-medium text-black">
                Thương hiệu 4
              </label>
            </div>
            <div className="flex items-center mb-2 ">
              <input
                type="checkbox"
                onChange={handleOutOfStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="text-[15px] font-medium text-black">
                Thương hiệu 5
              </label>
            </div>

            <hr className="my-4" />
            <div className="flex justify-center">
              <button
                className="bg-black text-white w-[40%] py-2 rounded mr-2"
                onClick={() => {}}
              >
                Áp dụng
              </button>
              <button
                className="text-black py-2 px-4 rounded"
                onClick={handleResetButtonClick}
                disabled={isResetButtonDisabled}
              >
                Bỏ chọn
              </button>
            </div>
          </div>
        </Modal>
      )}

      {isModalOpenPrice && (
        <Modal
          isOpen={isModalOpenPrice}
          onRequestClose={handleModalPrice}
          style={modalPrice}
          contentLabel="Trạng thái"
        >
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                onChange={handleInStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded-xl "
              />
              <label className="text-[15px] font-medium text-black">
                0 - 100k
              </label>
            </div>
            <div className="flex items-center mb-2 ">
              <input
                type="radio"
                onChange={handleInStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded-xl "
              />
              <label className="text-[15px] font-medium text-black">
                100 - 500k
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                onChange={handleInStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded-xl "
              />
              <label className="text-[15px] font-medium text-black">
                500 - 1tr
              </label>
            </div>
            <div className="flex items-center mb-2 ">
              <input
                type="radio"
                onChange={handleInStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded-xl "
              />
              <label className="text-[15px] font-medium text-black">
                1tr - 2tr
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                onChange={handleInStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded-xl "
              />
              <label className="text-[15px] font-medium text-black">
                2tr - 5tr
              </label>
            </div>
            <hr className="my-4" />
            <div className="flex justify-center">
              <button
                className="bg-black text-white w-[40%] py-2 rounded mr-2"
                onClick={() => {}}
              >
                Áp dụng
              </button>
              <button
                className="text-black py-2 px-4 rounded"
                onClick={handleResetButtonClick}
                disabled={isResetButtonDisabled}
              >
                Bỏ chọn
              </button>
            </div>
          </div>
        </Modal>
      )}

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleModalToggle}
          style={modalStyles}
          contentLabel="Trạng thái"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={isInStock}
                onChange={handleInStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="text-[15px] font-medium text-black">
                Còn hàng
              </label>
            </div>
            <div className="flex items-center ">
              <input
                type="checkbox"
                checked={isOutOfStock}
                onChange={handleOutOfStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="text-[15px] font-medium text-black">
                Hết hàng
              </label>
            </div>

            <hr className="my-4" />
            <div className="flex justify-center">
              <button
                className="bg-black text-white w-[40%] py-2 rounded mr-2"
                onClick={() => {}}
              >
                Áp dụng
              </button>
              <button
                className="text-black py-2 px-4 rounded"
                onClick={handleResetButtonClick}
                disabled={isResetButtonDisabled}
              >
                Bỏ chọn
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Filter;
