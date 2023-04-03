const CreateFormInput = ({ id, name, onChangeHandler, type, label, value }) => {
  return (
    <div className="operations__form-div">
      <label htmlFor={name} className="search__form-tag">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        required
        className="search__form-input"
        id={id}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default CreateFormInput;
