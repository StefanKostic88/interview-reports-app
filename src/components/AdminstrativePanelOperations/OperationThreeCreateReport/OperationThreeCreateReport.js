import React from "react";

const OperationThreeCreateReport = () => {
  return (
    <div className="operations__content operations__content--3 operations__content--active">
      <div className="operations__select operations__select-search section__border">
        <div className="operations__card-info">
          <p>Candidate:</p>
          {/* <h3>{candidateName}</h3> */}
          <h3>Name</h3>
        </div>
        <div className="operations__card-info">
          <p>Company:</p>
          <h3>Company</h3>
        </div>
      </div>
      <div className="operations__form-fill">
        {/* onSubmit={submitHandler} */}
        <form action="" id="contact-form">
          <div className="operations__form">
            <div className="operations__form-div">
              <label htmlFor="date" className="search__form-tag">
                Interview Date:
              </label>
              <input
                type="date"
                name="date"
                required
                className="search__form-input"
                id="date"
                // value={interviewDate}
                // defaultValue={"2011-09-15"}
                // onChange={interviewDateOnchangeHandler}
              />
            </div>
            <div className="operations__form-div">
              <label htmlFor="tehnical" className="search__form-tag">
                Phase:
              </label>
              <select
                id="tehnical"
                name="tehnical"
                // defaultValue={phase}
                // onChange={phaseOnchangeHandler}
              >
                <option value="cv">cv</option>
                <option value="hr">hr</option>
                <option value="tech">tech</option>
                <option value="final">final</option>
              </select>
            </div>

            <div className="operations__form-div">
              <label htmlFor="select" className="search__form-tag">
                Select:
              </label>
              <select
                id="select"
                name="select"
                // defaultValue={status}
                // onChange={statusOnchangeHandler}
              >
                <option value="passed">Passed</option>
                <option value="declined">Declined</option>
              </select>
            </div>
          </div>
          <div className="operations__form">
            <div className="operations__form-div">
              <textarea
                name="message"
                rows="10"
                cols="30"
                // value={note}
                // onChange={noteOnchangeHandler}
              >
                Notes
              </textarea>
            </div>
          </div>
          <div className="operations__form">
            <button className="btn-alt">
              {/* onClick={() => onBackToSecond()} */}
              BACK
            </button>
            <button className="btn">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OperationThreeCreateReport;
