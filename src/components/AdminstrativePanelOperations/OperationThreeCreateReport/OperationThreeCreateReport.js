import React from "react";
import useCreateForm from "../../../hooks/use-create-form/useCreateForm";
import { createRerport } from "../../../assets/heleperFunctions/heleperFunctions";
import OperationThreeTemplate from "../OperationThreeTemplate/OperationThreeTemplate";

const OperationThreeCreateReport = ({
  candidateName,
  companyName,
  newReport,
  onBackToSecond,
  onResetSteper,
  onGetSubmitMsg,
}) => {
  const dateNow = new Date();
  const getDate = (date) => {
    let day = +date.getDate();
    let month = +date.getMonth();
    const year = +date.getFullYear();

    if (month.toString().length === 1) {
      month = "0" + month;
      // console.log(month);
    }
    if (day.toString().length === 1) {
      day = "0" + day;
    }

    return `${year}-${month}-${day}`;
  };
  // console.log(getDate(dateNow));

  const {
    inputVal: interviewDate,
    valOnChangeHandler: interviewDateOnchangeHandler,
    resetVal: resetUnterviewDate,
  } = useCreateForm(getDate(dateNow));

  const {
    inputVal: phase,
    valOnChangeHandler: phaseOnchangeHandler,
    resetVal: resetPhase,
  } = useCreateForm(newReport.phase);

  const {
    inputVal: status,
    valOnChangeHandler: statusOnchangeHandler,
    resetVal: resetStatus,
  } = useCreateForm(newReport.status);

  const {
    inputVal: note,
    valOnChangeHandler: noteOnchangeHandler,
    resetVal: resetNote,
  } = useCreateForm(newReport.note);

  const resetInputs = () => {
    resetStatus();
    resetPhase();
    resetUnterviewDate();
    resetNote();
  };

  const nesto = async (obj) => {
    await fetch(`http://localhost:3333/api/reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedReport = createRerport({
      ...newReport,
      note: note,
      status: status,
      phase: phase,
      interviewDate: interviewDate,
    });
    console.log(updatedReport);
    nesto(updatedReport);
    resetInputs();
    onResetSteper();
    onGetSubmitMsg("Report Created");
  };

  // console.log(interviewDate, phase, status, note, "NEW");

  return (
    <OperationThreeTemplate
      submitHandler={submitHandler}
      interviewDateOnchangeHandler={interviewDateOnchangeHandler}
      statusOnchangeHandler={statusOnchangeHandler}
      noteOnchangeHandler={noteOnchangeHandler}
      phaseOnchangeHandler={phaseOnchangeHandler}
      onBackToSecond={onBackToSecond}
      {...{ phase, status, note, interviewDate, candidateName, companyName }}
    />
  );

  // return (

  //   <div className="operations__content operations__content--3 operations__content--active">
  //     <div className="operations__select operations__select-search section__border">
  //       <div className="operations__card-info">
  //         <p>Candidate:</p>
  //         <h3>{candidateName}</h3>
  //         {/* <h3>Name</h3> */}
  //       </div>
  //       <div className="operations__card-info">
  //         <p>Company:</p>
  //         <h3>{companyName}</h3>
  //       </div>
  //     </div>
  //     <div className="operations__form-fill">
  //       {/* onSubmit={submitHandler} */}
  //       <form action="" id="contact-form" onSubmit={submitHandler}>
  //         <div className="operations__form">
  //           <div className="operations__form-div">
  //             <label htmlFor="date" className="search__form-tag">
  //               Interview Date:
  //             </label>
  //             <input
  //               type="date"
  //               name="date"
  //               required
  //               className="search__form-input"
  //               id="date"
  //               value={interviewDate}
  //               onChange={interviewDateOnchangeHandler}
  //             />
  //           </div>
  //           <div className="operations__form-div">
  //             <label htmlFor="tehnical" className="search__form-tag">
  //               Phase:
  //             </label>
  //             <select
  //               id="tehnical"
  //               name="tehnical"
  //               defaultValue={phase}
  //               onChange={phaseOnchangeHandler}
  //             >
  //               <option value="cv">cv</option>
  //               <option value="hr">hr</option>
  //               <option value="tech">tech</option>
  //               <option value="final">final</option>
  //             </select>
  //           </div>

  //           <div className="operations__form-div">
  //             <label htmlFor="select" className="search__form-tag">
  //               Select:
  //             </label>
  //             <select
  //               id="select"
  //               name="select"
  //               defaultValue={status}
  //               onChange={statusOnchangeHandler}
  //             >
  //               <option value="passed">Passed</option>
  //               <option value="declined">Declined</option>
  //             </select>
  //           </div>
  //         </div>
  //         <div className="operations__form">
  //           <div className="operations__form-div">
  //             <textarea
  //               name="message"
  //               rows="10"
  //               cols="30"
  //               value={note}
  //               onChange={noteOnchangeHandler}
  //             >
  //               Notes
  //             </textarea>
  //           </div>
  //         </div>
  //         <div className="operations__form">
  //           <button className="btn-alt" onClick={() => onBackToSecond()}>
  //             BACK
  //           </button>
  //           <button className="btn">SUBMIT</button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
};

export default OperationThreeCreateReport;
