const CustomInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="contact__form-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomInput;
