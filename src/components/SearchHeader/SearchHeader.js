import { useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import CustomInput from "../ui/CustomInput/CustomInput";
const SearchHeader = () => {
  const [searchUser, setSearchUser] = useState("");

  const onChangeHandler = (e) => {
    setSearchUser(() => e.target.value);
    //set search value
    //send value to app
    //filter(e.target.value)
    //filter users in app component
  };

  const onClickHandler = () => {
    //clear inputs
    setSearchUser(() => "");
    //sends empty value to App
    //render landing page data
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
      }}
    >
      <h2>Candidates</h2>
      <span>
        <MdSearch />
        <CustomInput
          type="text"
          placeholder="Search"
          value={searchUser}
          onChange={onChangeHandler}
        />
        <MdClose onClick={onClickHandler} />
      </span>
    </div>
  );
};

export default SearchHeader;
