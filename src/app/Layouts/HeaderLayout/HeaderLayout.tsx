import React from "react";
import "./HeaderLayout.css";

const HeaderLayout: React.FC<any> = () => {
  return (
    <div className="header-layout">
      <div className="content global-container">
        <div className="right-col">
          <h3 className="header-nav-item">index,</h3>
          <h3 className="header-nav-item">&nbsp; &nbsp;about</h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
