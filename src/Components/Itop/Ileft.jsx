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
        <div className="left-content ">
          <div className="left-form">
            <div className="left-title">WELCOME GIFT</div>
          </div>
        </div>
      ) : (
        <div className="left-bar hidden md:flex lg:flex ">
          <div className="left-heading   ">
            WELCOME GIFT
            <div className="left-icon" onClick={handleIconClick}>
              <div className="icon"></div>
            </div>
          </div>
        </div>
      )}
      <div className="left-content-mobile md:hidden lg:hidden flex">
        <div className="left-form">
          <div className="left-title">WELCOME GIFT</div>
        </div>
      </div>
    </div>
  );
};

export default Ileft;
