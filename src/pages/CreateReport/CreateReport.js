import {
  MainContainer,
  AdminstrativePanelOperations,
  CreateForm,
} from "../../components";
import {
  postUser,
  generateAndPostReport,
} from "../../services/fetchData/fehtchData";
import { generateUser } from "../../assets/heleperFunctions/heleperFunctions";
import useCreateForm from "../../hooks/use-create-form/useCreateForm";
const CreateReport = ({ onRegistersubmit }) => {
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
  } = useCreateForm(() => "");
  const {
    inputVal: interviewDate,
    valOnChangeHandler: interviewDateOnChangeHandler,
    resetVal: resetInterviewDate,
  } = useCreateForm(() => "");

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
      onChangeHandler: onCandidatePhaseChangeHandler,
      id: "select",
      name: "select",
      label: "Select:",
      otions: [{ value: "passed" }, { value: "declined" }],
    },
  ];

  const submitUser = (e) => {
    e.preventDefault();
    if (
      !candidateName &&
      !candidateEmail &&
      !candidateBirthDay &&
      !candidateEducation &&
      !companyName &&
      !candidatePhase &&
      !candidateStatus &&
      !candidateNotes &&
      !interviewDate
    )
      return;

    const newCandidate = generateUser(
      candidateName,
      candidateEmail,
      candidateBirthDay,
      candidateEducation
    );
    postUser(newCandidate);
    generateAndPostReport(
      companyName,
      candidateStatus,
      candidatePhase,
      candidateNotes,
      interviewDate
    );
    onRegistersubmit();
    resetAllInputs();
  };

  return (
    <MainContainer>
      <section className="section container">
        <AdminstrativePanelOperations isCreating={false}>
          <div className="operations__content operations__content--3 operations__content--active">
            <div className="operations__select operations__select-search section__border">
              <h3>Create User</h3>
            </div>
            <CreateForm
              onSubmit={submitUser}
              inputArr={inputArr}
              optionsArr={optionsArr}
              messageChangeHandler={notesOnChangeHandler}
              messagevalue={candidateNotes}
            />
          </div>
        </AdminstrativePanelOperations>
      </section>
    </MainContainer>
  );
};

export default CreateReport;
