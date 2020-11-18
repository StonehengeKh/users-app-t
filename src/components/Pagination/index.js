import React from "react";

import "./style.css";

const Pagination = ({ quantityBtn, activeButton, updateActiveButton }) => {
  const buttonsPagination = new Array(quantityBtn).fill(0);

  return (
    <div className="button-container">
      <div
        className="button-pagination not-active"
        onClick={updateActiveButton(1)}
      >
        <i className="fas fa-angle-double-left" />
      </div>
      <div
        className="button-pagination not-active"
        onClick={updateActiveButton(activeButton > 1 ? activeButton - 1 : 1)}
      >
        <i className="fas fa-angle-left" />
      </div>
      {buttonsPagination.map((el, i) => (
        <div
          className={`button-pagination ${
            activeButton === i + 1 ? "active" : "not-active"
          }`}
          key={i}
          onClick={updateActiveButton(i + 1)}
        >
          {i + 1}
        </div>
      ))}
      <div
        className="button-pagination not-active"
        onClick={updateActiveButton(
          activeButton < quantityBtn ? activeButton + 1 : quantityBtn
        )}
      >
        <i className="fas fa-angle-right" />
      </div>
      <div
        className="button-pagination not-active"
        onClick={updateActiveButton(quantityBtn)}
      >
        <i className="fas fa-angle-double-right" />
      </div>
    </div>
  );
};

export default Pagination;
