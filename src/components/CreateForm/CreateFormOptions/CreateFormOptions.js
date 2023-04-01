const CreateFormOptions = ({ onChangeHandler, id, name, otions, label }) => {
  return (
    <div className="operations__form-div">
      <label htmlFor={name} className="search__form-tag">
        {label}
      </label>
      <select id={id} name={name} onChange={onChangeHandler}>
        {otions.map(({ value }, index) => (
          <option value={value} key={index}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CreateFormOptions;
