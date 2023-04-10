import useCreateForm from "../../hooks/use-create-form/useCreateForm";
import { getDate } from "../heleperFunctions/heleperFunctions";

export const useData = () => {
  const date = new Date().toLocaleString("SR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const {
    inputVal: candidateName,
    valOnChangeHandler: candidateNameOnChangeHandler,
    resetVal: resetCandidateName,
  } = useCreateForm(() => "");
  const {
    inputVal: candidateEmail,
    valOnChangeHandler: candidateEmailOnChangeHandler,
    resetVal: resetCandidateEmail,
  } = useCreateForm(() => "");

  const {
    inputVal: candidateEducation,
    valOnChangeHandler: educationOnChangeHandler,
    resetVal: resetCandidateEducation,
  } = useCreateForm(() => "");

  const {
    inputVal: candidateBirthDay,
    valOnChangeHandler: birthdayChangeHandler,
    resetVal: resetCandidateBirthday,
  } = useCreateForm(() => getDate(date));
  const {
    inputVal: interviewDate,
    valOnChangeHandler: interviewDateOnChangeHandler,
    resetVal: resetInterviewDate,
  } = useCreateForm(() => getDate(date));

  const {
    inputVal: candidatePhase,
    valOnChangeHandler: onCandidatePhaseChangeHandler,
    resetVal: resetCandidatePhase,
  } = useCreateForm(() => "cv");

  const {
    inputVal: candidateStatus,
    valOnChangeHandler: candidateStatusOnChangeHandler,
    resetVal: resetCandidateStatus,
  } = useCreateForm(() => "passed");

  const {
    inputVal: candidateNotes,
    valOnChangeHandler: notesOnChangeHandler,
    resetVal: resetCandidateNotes,
  } = useCreateForm(() => "Notes");

  const {
    inputVal: companyName,
    valOnChangeHandler: companyNameOnChangeHandler,
    resetVal: resetCompanyName,
  } = useCreateForm(() => "Google");

  const resetAllInputs = () => {
    resetCandidateName();
    resetCandidateEmail();
    resetCandidateEducation();
    resetCandidateBirthday();
    resetInterviewDate();
    resetCandidatePhase();
    resetCandidateStatus();
    resetCandidateNotes();
    resetCompanyName();
  };

  const inputArr = [
    {
      type: "text",
      name: "name",
      id: "name",
      onChangeHandler: candidateNameOnChangeHandler,
      label: "Candidate Name:",
      value: candidateName,
    },
    {
      type: "email",
      name: "email",
      id: "email",
      onChangeHandler: candidateEmailOnChangeHandler,
      label: "Candidate Email:",
      value: candidateEmail,
    },
    {
      type: "text",
      name: "education",
      id: "education",
      onChangeHandler: educationOnChangeHandler,
      label: "Education:",
      value: candidateEducation,
    },
    {
      type: "date",
      name: "birthday",
      id: "birthday",
      onChangeHandler: birthdayChangeHandler,
      label: "Birthday:",
      value: candidateBirthDay,
    },
    {
      type: "date",
      name: "interview-date",
      id: "interview-date",
      onChangeHandler: interviewDateOnChangeHandler,
      label: "Interview Date:",
      value: interviewDate,
    },
  ];

  const optionsArr = [
    {
      onChangeHandler: companyNameOnChangeHandler,
      id: "company-name",
      name: "company-name",
      label: "Company Name:",
      otions: [
        { value: "Google" },
        { value: "Facebook" },
        { value: "Microsoft" },
        { value: "Tesla" },
        { value: "Alphabet" },
      ],
    },
    {
      onChangeHandler: onCandidatePhaseChangeHandler,
      id: "tehnical",
      name: "tehnical",
      label: "Phase:",
      otions: [
        { value: "cv" },
        { value: "hr" },
        { value: "tech" },
        { value: "final" },
      ],
    },
    {
      onChangeHandler: candidateStatusOnChangeHandler,
      id: "select",
      name: "select",
      label: "Select:",
      otions: [{ value: "passed" }, { value: "declined" }],
    },
  ];
  return {
    candidateName,
    candidateEmail,
    candidateEducation,
    candidateBirthDay,
    interviewDate,
    candidatePhase,
    candidateStatus,
    candidateNotes,
    companyName,
    resetAllInputs,
    inputArr,
    optionsArr,
    notesOnChangeHandler,
  };
};
