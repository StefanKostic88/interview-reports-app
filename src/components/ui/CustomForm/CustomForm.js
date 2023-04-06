import React from "react";

const CustomForm = ({ onSubmitHandler, onChangeHandler, value, label }) => {
  return (
    <form
      action=""
      className="search__form"
      id="contact-form"
      onSubmit={onSubmitHandler}
    >
      <div className="search__form-div">
        <label className="search__form-tag">{label}</label>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Search..."
          className="search__form-input"
          id="contact-name"
          onChange={onChangeHandler}
          value={value}
        />
      </div>
    </form>
  );
};

export default CustomForm;
