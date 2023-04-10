import { useState, useEffect } from "react";

const OperationTwoCreateReport = ({
  newCompanies,
  candidateName,
  onBackToFirst,
  onCompanyClick,
  onGetCompanyTest,
}) => {
  const [comname, setComname] = useState("");
  const [chosenId, setChosenId] = useState(null);
  const [companyListStyled, setCompanyListStyled] = useState([...newCompanies]);

  const setActiveStatus = (id) => {
    const updatedArr = companyListStyled.map((company) => {
      if (company.id === id) {
        return { ...company, isActive: true };
      } else {
        return { ...company, isActive: false };
      }
    });

    setCompanyListStyled(() => [...updatedArr]);
  };

  useEffect(() => {
    if (!newCompanies) return;
    const style = newCompanies.map((el) => ({ ...el, isActive: false }));
    setCompanyListStyled(() => [...style]);
  }, [newCompanies]);

  if (!newCompanies) return;

  return (
    <div className="operations__content operations__content--2 operations__content--active">
      <div className="operations__select operations__select-search">
        <div className="operations__card-info">
          <p>Candidate:</p>
          <h3>{candidateName}</h3>
        </div>
        <form action="" className="search__form" id="contact-form">
          <div className="search__form-div">
            <label className="search__form-tag">Search</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Search..."
              className="search__form-input"
              id="contact-name"
            />
          </div>
        </form>
      </div>
      <div className="operations__card-list operations__select-company">
        {companyListStyled.map(({ name, id, isActive, candidateId }) => (
          <div
            key={id}
            className={`operations__select-company-item ${
              isActive ? "active" : ""
            }`}
            onClick={() => {
              onGetCompanyTest(name);
              setComname(name);
              setChosenId(() => id);
              setActiveStatus(id);
            }}
            // onClick={() => {
            //   setBtnIsActive(() => true);
            //   setComname(() => companyName);
            //   setActiveStatus(companyId);
            // }}
          >
            {name} {console.log(candidateId)}
          </div>
        ))}
      </div>

      <div className="left">
        <button className="btn" onClick={() => onBackToFirst()}>
          Back
        </button>
        {
          // btnIsActive &&
          <button
            className="btn "
            onClick={() => {
              onCompanyClick(chosenId, comname);
            }}
          >
            Next
          </button>
        }
      </div>
    </div>
  );
};

export default OperationTwoCreateReport;
