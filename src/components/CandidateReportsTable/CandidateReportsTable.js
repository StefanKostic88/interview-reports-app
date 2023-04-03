import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import CandidateReportsTableBody from "./CandidateReportsTableBody/CandidateReportsTableBody";

const CandidateReportsTable = ({ companies, onGetModalInfo }) => {
  const [companiesList, setCompaniesList] = useState([]);
  const [companyIsSortedUp, setCompanyIsSortedUp] = useState(true);
  const [dateIsSorted, setDateIsSorted] = useState(true);
  const [statusIsSorted, setStatusIsSorted] = useState(true);

  const sortByCompanyName = () => {
    const sotrted = companies.sort((a, b) => {
      if (a.companyName < b.companyName) {
        return -1;
      }
    });
    setCompaniesList(() => [...sotrted]);
    setCompanyIsSortedUp(() => false);
    setDateIsSorted(() => true);
    setStatusIsSorted(() => true);
  };
  const sortByCompanyNameReverted = () => {
    const sotrted = companies.sort((a, b) => {
      if (a.companyName > b.companyName) {
        return -1;
      }
    });
    setCompaniesList(() => [...sotrted]);
    setCompanyIsSortedUp(() => true);
    setDateIsSorted(() => true);
    setStatusIsSorted(() => true);
  };

  const sortByPassedStatus = () => {
    const sotrted = companies.sort((a, b) => {
      if (a.status > b.status) {
        return -1;
      }
    });
    setCompaniesList(() => [...sotrted]);
    setStatusIsSorted(() => false);
    setDateIsSorted(() => true);
    setCompanyIsSortedUp(() => true);
  };
  const sortByPassedStatusReverted = () => {
    const sotrted = companies.sort((a, b) => {
      if (a.status < b.status) {
        return -1;
      }
    });
    setCompaniesList(() => [...sotrted]);
    setStatusIsSorted(() => true);
    setDateIsSorted(() => true);
    setCompanyIsSortedUp(() => true);
  };

  const sortByDate = () => {
    const sotrted = companies.sort((a, b) => {
      if (a.interviewDate < b.interviewDate) {
        return -1;
      }
    });
    setCompaniesList(() => [...sotrted]);
    setDateIsSorted(() => false);
    setStatusIsSorted(() => true);
    setCompanyIsSortedUp(() => true);
  };
  const sortByDateReverted = () => {
    const sotrted = companies.sort((a, b) => {
      if (a.interviewDate > b.interviewDate) {
        return -1;
      }
    });
    setCompaniesList(() => [...sotrted]);
    setDateIsSorted(() => true);
    setStatusIsSorted(() => true);
    setCompanyIsSortedUp(() => true);
  };

  useEffect(() => {
    if (!companies) return;
    setCompaniesList(() => [...companies]);
  }, []);

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
