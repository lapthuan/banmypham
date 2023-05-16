import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Stars = (props) => {
  const { stars } = props;
  const ratingStar = Array.from({ length: 5 }, (el, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar color="#fe2c6d" />
        ) : stars >= number ? (
          <FaStarHalfAlt color="#fe2c6d"/>
        ) : (
          <FaRegStar color="#fe2c6d" />
        )}
      </span>
    );
  });

  return (
    <div className="">
      <div className="flex flex-row justify-center test-[#fe2c6d]">{ratingStar}</div>
    </div>
  );
};

export default Stars;
