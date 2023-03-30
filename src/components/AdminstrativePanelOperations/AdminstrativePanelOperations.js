import React from "react";

const AdminstrativePanelOperations = ({ children }) => {
  return (
    <div class="operations">
      <div class="operations__tab-container">
        <button
          class="btn-alt operations__tab operations__tab--1 "
          data-tab="1"
        >
          <span>01</span>Select Candidate
        </button>
        <button
          class="btn-alt operations__tab operations__tab--2 operations__tab--active"
          data-tab="2"
        >
          <span>02</span>Select Company
        </button>
        <button class="btn-alt operations__tab operations__tab--3" data-tab="3">
          <span>03</span>Fill Report Details
        </button>
      </div>
      {children}
    </div>
  );
};

export default AdminstrativePanelOperations;
