import { useEffect, useReducer, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import CandidateReportsTableBody from "./CandidateReportsTableBody/CandidateReportsTableBody";
import {
  initialSortedState,
  dispatchActionTypes,
  sortedReducer,
} from "../../assets/candidateReportsTableData/candidateReportsTableData";

const CandidateReportsTable = ({ companies, onGetModalInfo }) => {
  const [companiesList, setCompaniesList] = useState([]);
  const [sortedState, dispatchSortedState] = useReducer(
    sortedReducer,
    initialSortedState
  );

  const sortCompanyFunc = (arr, sortUp = true) => {
    if (sortUp) {
      return arr.sort((a, b) => {
        if (a.companyName < b.companyName) {
          return -1;
        }
      });
    } else {
      return arr.sort((a, b) => {
        if (a.companyName > b.companyName) {
          return -1;
        }
      });
    }
  };
  const sortStatusFunc = (arr, sortUp = true) => {
    if (sortUp) {
      return arr.sort((a, b) => {
        if (a.status < b.status) {
          return -1;
        }
      });
    } else {
      return arr.sort((a, b) => {
        if (a.status > b.status) {
          return -1;
        }
      });
    }
  };

  const sortDateFunc = (arr, sortUp = true) => {
    if (sortUp) {
      return arr.sort((a, b) => {
        if (a.interviewDate < b.interviewDate) {
          return -1;
        }
      });
    } else {
      return arr.sort((a, b) => {
        if (a.interviewDate > b.interviewDate) {
          return -1;
        }
      });
    }
  };

  const sortByCompanyName = () => {
    const sorted = sortCompanyFunc(companies);
    setCompaniesList(() => [...sorted]);
    dispatchSortedState({ type: dispatchActionTypes.COMPANY_SORTED_UP });
  };
  const sortByCompanyNameReverted = () => {
    const sotrted = sortCompanyFunc(companies, false);
    setCompaniesList(() => [...sotrted]);
    dispatchSortedState({ type: dispatchActionTypes.COMPANY_SORTED_DOWN });
  };

  const sortByPassedStatus = () => {
    const sorted = sortStatusFunc(companies);
    setCompaniesList(() => [...sorted]);
    dispatchSortedState({ type: dispatchActionTypes.STATUS_SORTED_UP });
  };
  const sortByPassedStatusReverted = () => {
    const sorted = sortStatusFunc(companies, false);
    setCompaniesList(() => [...sorted]);
    dispatchSortedState({ type: dispatchActionTypes.STATUS_SORTED_DOWN });
  };

  const sortByDate = () => {
    const sorted = sortDateFunc(companies);
    setCompaniesList(() => [...sorted]);
    dispatchSortedState({ type: dispatchActionTypes.DATE_SORTED_UP });
  };
  const sortByDateReverted = () => {
    const sorted = sortDateFunc(companies, false);
    setCompaniesList(() => [...sorted]);
    dispatchSortedState({ type: dispatchActionTypes.DATE_SORTED_DOWN });
  };

  useEffect(() => {
    if (!companies) return;
    setCompaniesList(() => [...companies]);
  }, []);
  console.log(sortedState);

  const { companyIsSortedUp, statusIsSorted, dateIsSorted } = sortedState;

  return (
    <section className="table container section hscroll">
      <table className="table">
        <tbody>
          <tr>
            <th>
              <span>
                {companyIsSortedUp ? (
                  <MdKeyboardArrowDown
                    style={{ cursor: "pointer", width: "25px", height: "25px" }}
                    onClick={() => {
                      sortByCompanyName();
                    }}
                  />
                ) : (
                  <MdKeyboardArrowUp
                    style={{ cursor: "pointer", width: "25px", height: "25px" }}
                    onClick={() => {
                      sortByCompanyNameReverted();
                    }}
                  />
                )}
                Company
              </span>
            </th>
            <th>
              <span>
                {dateIsSorted ? (
                  <MdKeyboardArrowDown
                    style={{ cursor: "pointer", width: "25px", height: "25px" }}
                    onClick={() => {
                      sortByDate();
                    }}
                  />
                ) : (
                  <MdKeyboardArrowUp
                    style={{ cursor: "pointer", width: "25px", height: "25px" }}
                    onClick={() => {
                      sortByDateReverted();
                    }}
                  />
                )}
                Interview&nbsp;Date
              </span>
            </th>
            <th colSpan="2">
              <span>
                {statusIsSorted ? (
                  <MdKeyboardArrowDown
                    style={{ cursor: "pointer", width: "25px", height: "25px" }}
                    onClick={() => {
                      sortByPassedStatus();
                    }}
                  />
                ) : (
                  <MdKeyboardArrowUp
                    style={{ cursor: "pointer", width: "25px", height: "25px" }}
                    onClick={() => {
                      sortByPassedStatusReverted();
                    }}
                  />
                )}
                Status
              </span>
            </th>
          </tr>
        </tbody>
        <CandidateReportsTableBody
          companies={companiesList}
          onGetModalInfo={onGetModalInfo}
        />
      </table>
    </section>
  );
};

export default CandidateReportsTable;

// const [companyIsSortedUp, setCompanyIsSortedUp] = useState(true);
// const [dateIsSorted, setDateIsSorted] = useState(true);
// const [statusIsSorted, setStatusIsSorted] = useState(true);
