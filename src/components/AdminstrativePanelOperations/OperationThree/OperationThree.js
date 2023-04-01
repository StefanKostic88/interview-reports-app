import React from "react";

const OperationThree = ({ candidateName, companyName }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      companyName,
      candidateName,
    };
    console.log(data);
  };

  return (
    <div className="operations__content operations__content--3 operations__content--active">
      <div className="operations__select operations__select-search section__border">
        <div className="operations__card-info">
          <p>Candidate:</p>
          <h3>{candidateName}</h3>
        </div>
        <div className="operations__card-info">
          <p>Company:</p>
          <h3>{companyName}</h3>
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
      <div className="operations__form-fill">
        <form action="" id="contact-form" onSubmit={submitHandler}>
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
              />
            </div>
            <div className="operations__form-div">
              <label htmlFor="tehnical" className="search__form-tag">
                Phase:
              </label>
              <select id="tehnical" name="tehnical">
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
              <select id="select" name="select">
                <option value="passed">Passed</option>
                <option value="declined">Declined</option>
              </select>
            </div>
          </div>
          <div className="operations__form">
            <div className="operations__form-div">
              <textarea name="message" rows="10" cols="30">
                Notes
              </textarea>
            </div>
          </div>
          <div className="operations__form">
            <button className="btn-alt">BACK</button>
            <button className="btn">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OperationThree;

{
  /* <!-- CONTENT 3 --> */
}
{
  /*  */
}
