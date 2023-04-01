import { useState } from "react";

const useCreateForm = (val) => {
  const [inputVal, setInputVal] = useState(val);
  const valOnChangeHandler = (e) => {
    setInputVal(() => e.target.value);
  };
  const resetVal = () => {
    setInputVal(() => val);
  };

  return {
    inputVal,
    valOnChangeHandler,
  };
};

export default useCreateForm;

// const [candidateName, setCandidateName] = useState("");
// const [candidateEmail, setCandidateEmail] = useState("");
// const [candidateEducation, setCandidateEducation] = useState("");
// const [candidateBirthDay, setCandidateBirthDay] = useState("");

/////
// const [interviewDate, setInterviewDate] = useState("");
// const [candidatePhase, setCandidatePhase] = useState("cv");

// const [candidateStatus, setCandidateStatus] = useState("passed");
// const [candidateNotes, setCandidateNotes] = useState("");
// const [companyName, setCompanyName] = useState("");

// const candidateNameOnChangeHandler = (e) => {
//   console.log(e.target.value);
//   setCandidateName(() => e.target.value);
// };
// const candidateEmailOnChangeHandler = (e) => {
//   setCandidateEmail(() => e.target.value);
//   console.log(e.target.value);
// };
// const birthdayChangeHandler = (e) => {
//   setCandidateBirthDay(() => e.target.value);
//   console.log(e.target.value);
// };

// const educationOnChangeHandler = (e) => {
//   setCandidateEducation(() => e.target.value);
//   console.log(e.target.value);
// };

// const interviewDateOnChangeHandler = (e) => {
//   setInterviewDate(() => e.target.value);
//   console.log(e.target.value);
// };

// const onCandidatePhaseChangeHandler = (e) => {
//   setCandidatePhase(e.target.value);
//   console.log(e.target.value);
// };

// const candidateStatusOnChangeHandler = (e) => {
//   setCandidateStatus(() => e.target.value);
//   console.log(e.target.value);
// };
// const notesOnChangeHandler = (e) => {
//   setCandidateNotes(() => e.target.value);
//   console.log(e.target.value);
// };

// const companyNameOnChangeHandler = (e) => {
//   setCompanyName(() => e.target.value);
//   console.log(e.target.value);
// };
