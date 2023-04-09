import CandidateReportsTableBody from "./CandidateReportsTableBody/CandidateReportsTableBody";
import CandidateReportsTableHeader from "./CandidateReportsTableHeader/CandidateReportsTableHeader";
import { useCandidateReportsTable } from "../../hooks";

const CandidateReportsTable = ({ companies, onGetModalInfo }) => {
  const {
    companiesList,
    sortedState,
    sortByCompanyName,
    sortByCompanyNameReverted,
    sortByPassedStatus,
    sortByPassedStatusReverted,
    sortByDate,
    sortByDateReverted,
  } = useCandidateReportsTable(companies);

  const { companyIsSortedUp, statusIsSorted, dateIsSorted } = sortedState;

  const reportStatusArr = [
    {
      tableHeadLabel: "Company",
      tableHeadSorterTag: companyIsSortedUp,
      sortUpHandler: sortByCompanyName,
      sortDownHandler: sortByCompanyNameReverted,
      className: false,
    },
    {
      tableHeadLabel: "Interview & Date",
      tableHeadSorterTag: dateIsSorted,
      sortUpHandler: sortByDate,
      sortDownHandler: sortByDateReverted,
      className: false,
    },
    {
      tableHeadLabel: "Status",
      tableHeadSorterTag: statusIsSorted,
      sortUpHandler: sortByPassedStatus,
      sortDownHandler: sortByPassedStatusReverted,
      className: true,
    },
  ];

  return (
    <section className="table container section hscroll">
      <table className="table">
        <CandidateReportsTableHeader reportStatus={reportStatusArr} />
        <CandidateReportsTableBody
          companies={companiesList}
          onGetModalInfo={onGetModalInfo}
        />
      </table>
    </section>
  );
};

export default CandidateReportsTable;
