import useCreateForm from "../../../hooks/use-create-form/useCreateForm";
import { fetchSoloReportAndUpdate } from "../../../services/fetchData/fehtchData";
import {
  updateReport,
  getDate,
} from "../../../assets/heleperFunctions/heleperFunctions";
import OperationThreeTemplate from "../OperationThreeTemplate/OperationThreeTemplate";

const OperationThree = ({
  candidateName,
  companyName,
  onBackToSecond,
  report,
  onResetSteper,
  onGetSubmitMsg,
}) => {
  // const getDate = (date) => {
  //   let day = +date.split(".")[0];
  //   let month = +date.split(".")[1];
  //   const year = +date.split(".")[2];

  //   if (month.toString().length === 1) {
  //     month = "0" + month;
  //   }
  //   if (day.toString().length === 1) {
  //     day = "0" + day;
  //   }

  //   return `${year}-${month}-${day}`;
  // };

  const {
    inputVal: interviewDate,
    valOnChangeHandler: interviewDateOnchangeHandler,
    resetVal: resetUnterviewDate,
  } = useCreateForm(getDate(report.interviewDate));

  const {
    inputVal: phase,
    valOnChangeHandler: phaseOnchangeHandler,
    resetVal: resetPhase,
  } = useCreateForm(report.phase);

  const {
    inputVal: status,
    valOnChangeHandler: statusOnchangeHandler,
    resetVal: resetStatus,
  } = useCreateForm(report.status);

  const {
    inputVal: note,
    valOnChangeHandler: noteOnchangeHandler,
    resetVal: resetNote,
  } = useCreateForm(report.note);

  const resetInputs = () => {
    resetStatus();
    resetPhase();
    resetUnterviewDate();
    resetNote();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedReport = updateReport({
      ...report,
      note: note,
      status: status,
      phase: phase,
      interviewDate: interviewDate,
    });
    fetchSoloReportAndUpdate(updatedReport.id, updatedReport);
    resetInputs();
    onResetSteper();
    onGetSubmitMsg("Report Updated");
  };

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
};

export default OperationThree;

// const {
//   inputVal: interviewDate,
//   valOnChangeHandler: interviewDateOnchangeHandler,
//   resetVal: resetUnterviewDate,
// } = useCreateForm(getDate(report[0].interviewDate));
// const {
//   inputVal: phase,
//   valOnChangeHandler: phaseOnchangeHandler,
//   resetVal: resetPhase,
// } = useCreateForm(report[0].phase);
// const {
//   inputVal: status,
//   valOnChangeHandler: statusOnchangeHandler,
//   resetVal: resetStatus,
// } = useCreateForm(report[0].status);
// const {
//   inputVal: note,
//   valOnChangeHandler: noteOnchangeHandler,
//   resetVal: resetNote,
// } = useCreateForm(report[0].note);

// <div className="operations__content operations__content--3 operations__content--active">
//   <div className="operations__select operations__select-search section__border">
//     <div className="operations__card-info">
//       <p>Candidate:</p>
//       <h3>{candidateName}</h3>
//     </div>
//     <div className="operations__card-info">
//       <p>Company:</p>
//       <h3>{companyName}</h3>
//     </div>
//   </div>
//   <div className="operations__form-fill">
//     <form action="" id="contact-form" onSubmit={submitHandler}>
//       <div className="operations__form">
//         <div className="operations__form-div">
//           <label htmlFor="date" className="search__form-tag">
//             Interview Date:
//           </label>
//           <input
//             type="date"
//             name="date"
//             required
//             className="search__form-input"
//             id="date"
//             value={interviewDate}
//             // defaultValue={"2011-09-15"}
//             onChange={interviewDateOnchangeHandler}
//           />
//         </div>
//         <div className="operations__form-div">
//           <label htmlFor="tehnical" className="search__form-tag">
//             Phase:
//           </label>
//           <select
//             id="tehnical"
//             name="tehnical"
//             defaultValue={phase}
//             onChange={phaseOnchangeHandler}
//           >
//             <option value="cv">cv</option>
//             <option value="hr">hr</option>
//             <option value="tech">tech</option>
//             <option value="final">final</option>
//           </select>
//         </div>

//         <div className="operations__form-div">
//           <label htmlFor="select" className="search__form-tag">
//             Select:
//           </label>
//           <select
//             id="select"
//             name="select"
//             defaultValue={status}
//             onChange={statusOnchangeHandler}
//           >
//             <option value="passed">Passed</option>
//             <option value="declined">Declined</option>
//           </select>
//         </div>
//       </div>
//       <div className="operations__form">
//         <div className="operations__form-div">
//           <textarea
//             name="message"
//             rows="10"
//             cols="30"
//             value={note}
//             onChange={noteOnchangeHandler}
//           >
//             Notes
//           </textarea>
//         </div>
//       </div>
//       <div className="operations__form">
//         <button className="btn-alt" onClick={() => onBackToSecond()}>
//           BACK
//         </button>
//         <button className="btn">SUBMIT</button>
//       </div>
//     </form>
//   </div>
// </div>
