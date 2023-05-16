import React, { useEffect, useState } from "react";
import "./InforProduct.css";
import { Link } from "react-router-dom";
const InforProduct = () => {
  return (
    <div>
      <div>
        <div className="text-[22px] text-left font-[600] tracking-[.5px] leading-[60px] text-black">
          THÔNG TIN
        </div>
        <div className="pt-3 pb-5">
          <div className="text-left text-[15px]">
            Sản phẩm tuyệt vời lắm nha nên mua nên mua
          </div>
          <div>
            <div className="info_Product"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforProduct;
