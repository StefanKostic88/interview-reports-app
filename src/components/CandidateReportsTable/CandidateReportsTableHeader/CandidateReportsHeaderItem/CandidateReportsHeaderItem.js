import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const CandidateReportsHeaderItem = ({
  className,
  sortDownHandler,
  sortUpHandler,
  tableHeadLabel,
  tableHeadSorterTag,
}) => {
  return (
    <th colSpan={`${className ? "2" : ""}`}>
      <span>
        {tableHeadSorterTag ? (
          <MdKeyboardArrowDown
            style={{ cursor: "pointer", width: "25px", height: "25px" }}
            onClick={() => {
              sortUpHandler();
            }}
          />
        ) : (
          <MdKeyboardArrowUp
            style={{ cursor: "pointer", width: "25px", height: "25px" }}
            onClick={() => {
              sortDownHandler();
            }}
          />
        )}
        {tableHeadLabel}
      </span>
    </th>
  );
};

export default CandidateReportsHeaderItem;
