import { useEffect, useState } from "react";

const OperationTwo = ({
  companyListData,
  onCompanyClick,
  candidateName,
  onBackToFirst,
  onCreateNewReport,
}) => {
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [companyListStyled, setCompanyListStyled] = useState([]);
  const [comName, setComname] = useState("");
  // const [chosenId, setChosenId] = useState(null);
  const [chosenReportsId, setChosenReportsId] = useState(null);

  useEffect(() => {
    if (!companyListData) return;
    setCompanyListStyled(() => [...companyListData]);
  }, [companyListData]);

  const setActiveStatus = (id) => {
    const updatedArr = companyListStyled.map((company) => {
      if (company.companyId === id) {
        return { ...company, isActive: true };
      } else {
        return { ...company, isActive: false };
      }
    });
    setCompanyListStyled(() => [...updatedArr]);
  };

  if (!companyListData) return <div>Loading...</div>;
  return (
    <div className="operations__content operations__content--2 operations__content--active">
      <div className="operations__select operations__select-search">
        <div className="operations__card-info">
          <p>Candidate:</p>
          <h3>{candidateName}</h3>
        </div>
      </div>
      <div className="operations__card-list operations__select-company">
        {companyListStyled.map(({ companyName, companyId, isActive, id }) => (
          <div
            key={companyId}
            className={`operations__select-company-item ${
              isActive ? "active" : ""
            }`}
            onClick={() => {
              setBtnIsActive(() => true);
              // setChosenId(() => companyId);
              setComname(() => companyName);
              setActiveStatus(companyId);
              setChosenReportsId(() => id);
            }}
          >
            {companyName}
          </div>
        ))}
      </div>
      <button className="btn" onClick={() => onCreateNewReport()}>
        Add new Report
      </button>
      <div className="left">
        <button className="btn" onClick={() => onBackToFirst()}>
          Back
        </button>
        {btnIsActive && (
          <button
            className="btn "
            onClick={() => {
              onCompanyClick(chosenReportsId, comName);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default OperationTwo;
