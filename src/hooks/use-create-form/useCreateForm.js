import { useState } from "react";

const useCreateForm = (val) => {
  const [inputVal, setInputVal] = useState(val);
  const valOnChangeHandler = (e) => {
    setInputVal(() => e.target.value);
  };
  const resetVal = () => {
    setInputVal(() => val);
  };

  return {
    inputVal,
    valOnChangeHandler,
    resetVal,
  };
};

export default useCreateForm;
