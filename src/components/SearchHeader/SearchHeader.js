import { useState } from "react";
import CustomInput from "../ui/CustomInput/CustomInput";
import "./SearchHeader.css";
const SearchHeader = ({ onFilterCandidate }) => {
  const [searchUser, setSearchUser] = useState("");
  const onChangeHandler = (e) => {
    setSearchUser(() => e.target.value);
    onFilterCandidate(e.target.value);
  };
  return (
    <div className="home">
      <h1 className="section__title">Candidates</h1>
      <form action="" className="search__form" id="contact-form">
        <div className="search__form-div">
          <label className="search__form-tag">Search</label>
          <CustomInput
            type="text"
            name="user_name"
            required
            placeholder="Search..."
            value={searchUser}
            onChange={onChangeHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchHeader;
