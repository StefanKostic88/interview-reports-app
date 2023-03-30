import React from "react";

const OperationTwo = () => {
  return (
    <div class="operations__content operations__content--2 operations__content--active">
      <div class="operations__select operations__select-search">
        <div class="operations__card-info">
          <p>Candidate:</p>
          <h3>John Doe</h3>
        </div>
        <form action="" class="search__form" id="contact-form">
          <div class="search__form-div">
            <label class="search__form-tag">Search</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Search..."
              class="search__form-input"
              id="contact-name"
            />
          </div>
        </form>
      </div>
      <div class="operations__card-list operations__select-company">
        <div class="operations__select-company-item">Company 1</div>
        <div class="operations__select-company-item">Company 2</div>
        <div class="operations__select-company-item">Company 3</div>
        <div class="operations__select-company-item">Company 4</div>
        <div class="operations__select-company-item">Company 5</div>
        <div class="operations__select-company-item">Company 6</div>
      </div>
    </div>
  );
};

export default OperationTwo;

{
  /* <!-- CONTENT 2 --> */
}
