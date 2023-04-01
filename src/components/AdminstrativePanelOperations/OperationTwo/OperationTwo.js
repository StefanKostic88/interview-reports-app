import { useState } from "react";

const OperationTwo = ({ companyListData, onCompanyClick, candidateName }) => {
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [comName, setComname] = useState("");
  const [chosenId, setChosenId] = useState(null);

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
        {companyListData.map(({ companyName, companyId }) => (
          <div
            key={companyId}
            className="operations__select-company-item"
            onClick={() => {
              setBtnIsActive(() => true);
              setChosenId(() => companyId);
              setComname(() => companyName);
            }}
          >
            {companyName}
          </div>
        ))}
      </div>
      {btnIsActive && (
        <button
          onClick={() => {
            onCompanyClick(chosenId, comName);
          }}
        >
          Next
        </button>
      )}
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
