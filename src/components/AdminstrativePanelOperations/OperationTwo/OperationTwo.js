import { useEffect, useState } from "react";

const OperationTwo = ({
  companyListData,
  onCompanyClick,
  candidateName,
  onBackToFirst,
}) => {
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [companyListStyled, setCompanyListStyled] = useState([]);
  const [comName, setComname] = useState("");
  const [chosenId, setChosenId] = useState(null);

  useEffect(() => {
    if (!companyListData) return;
    setCompanyListStyled(() => [...companyListData]);
  }, [companyListData]);

  const setActiveStatus = (id) => {
    console.log(id);
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
        {companyListStyled.map(({ companyName, companyId, isActive }) => (
          <div
            key={companyId}
            className={`operations__select-company-item ${
              isActive ? "active" : ""
            }`}
            onClick={() => {
              setBtnIsActive(() => true);
              setChosenId(() => companyId);
              setComname(() => companyName);
              setActiveStatus(companyId);
            }}
          >
            {companyName}
          </div>
        ))}
      </div>

      <div className="left">
        <button className="btn" onClick={() => onBackToFirst()}>
          Back
        </button>
        {btnIsActive && (
          <button
            className="btn "
            onClick={() => {
              onCompanyClick(chosenId, comName);
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

{
  /* <!-- CONTENT 2 --> */
}

// {candidateId: 84705028, candidateName: 'Cade Hammes', companyId: 74578008, companyName: 'Tesla', id: 19288593, …}

{
  /* <div className="operations__select-company-item">Company 2</div>
<div className="operations__select-company-item">Company 3</div>
<div className="operations__select-company-item">Company 4</div>
<div className="operations__select-company-item">Company 5</div>
<div className="operations__select-company-item">Company 6</div> */
}
