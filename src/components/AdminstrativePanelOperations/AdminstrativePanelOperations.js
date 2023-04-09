import React from "react";

const AdminstrativePanelOperations = ({
  children,
  tabIsActive,
  isCreating = true,
}) => {
  return (
    <div className="operations">
      <div className="operations__tab-container">
        {isCreating && (
          <button
            className={`btn-alt operations__tab operations__tab--1  ${
              tabIsActive === 1 ? "operations__tab--active active" : ""
            }`}
            data-tab="1"
          >
            <span>01</span>Select Candidate
          </button>
        )}
        {isCreating && (
          <button
            className={`btn-alt operations__tab operations__tab--1 ${
              tabIsActive === 2 ? "operations__tab--active active" : ""
            }`}
            data-tab="2"
          >
            <span>02</span>Select Company
          </button>
        )}
        {isCreating && (
          <button
            className={`btn-alt operations__tab operations__tab--1 ${
              tabIsActive === 3 ? "operations__tab--active active" : ""
            }`}
            data-tab="3"
          >
            <span>03</span>Fill Report Details
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default AdminstrativePanelOperations;
