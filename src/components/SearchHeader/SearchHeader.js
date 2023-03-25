import CustomInput from "../ui/CustomInput/CustomInput";
const SearchHeader = () => {
  return (
    <div>
      <h2>Candidates</h2>
      <CustomInput
        type="text"
        placeholder="Search"
        value=""
        onChange={() => {
          console.log("change");
        }}
      />
    </div>
  );
};

export default SearchHeader;
