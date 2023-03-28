const CustomInput = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      className="search__form-input"
      id="contact-name"
      type={type}
      name={name}
      value={value}
      required
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default CustomInput;
