import { useState } from "react";
import {
  MainContainer,
  AdminstrativePanelOperations,
  OperationThree,
  CreateForm,
  CreateFormInput,
  CreateFormOptions,
} from "../../components";
import {
  generateNameAndReports,
  postUser,
} from "../../services/fetchData/fehtchData";

import useCreateForm from "../../hooks/use-create-form/useCreateForm";
const CreateReport = ({ onRegistersubmit }) => {
  const [submited, setIsSubmited] = useState(false);

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
  } = useCreateForm(() => "");

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
    {
      type: "text",
      name: "company-name",
      id: "company-name",
      onChangeHandler: companyNameOnChangeHandler,
      label: "Company Name:",
      value: companyName,
    },
  ];

  const optionsArr = [
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
      onChangeHandler: candidateStatusOnChangeHandler,
    },
  ];

  const submitUser = (e) => {
    e.preventDefault();

    // candidateName,candidateEmail,candidateEducation, candidateBirthDay

    // resetCandidateName,resetCandidateEmail, resetCandidateEducation,resetCandidateBirthday

    // console.log(
    //   candidateName,
    //   candidateEmail,
    //   candidateBirthDay,
    //   candidatePhase,
    //   candidateStatus,
    //   candidateNotes,
    //   candidateEducation,
    // companyName
    // );

    const report = generateReports(
      candidateName,
      companyName,
      candidateBirthDay,
      candidatePhase,
      candidateStatus,
      candidateNotes
    );
    const generateUser = (name, birthday, email, education) => {
      return {
        name,
        birthday,
        email,
        education,
        // "avatar": "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png",
        // "id": 84852315
      };
    };
    const user = generateUser(
      candidateName,
      candidateBirthDay,
      candidateEmail,
      candidateEducation
    );
    console.log(user);
    // postUser(user);

    const gen = async (user) => {
      // const data = await postUser(user);
      // console.log(data[data.lenght - 1]);
      // getId();
      const data = await generateNameAndReports();
      console.log(data);
    };
    // gen();
    // gen(user);
    //generate candidate
    //getUserId, name

    //generate reposrt

    onRegistersubmit();
  };

  const generateReports = (
    candidateName,
    companyName,
    interviewDate,
    phase,
    status,
    note,
    companyId,
    candidateId
  ) => {
    return {
      candidateId,
      candidateName,
      companyId,
      companyName,
      interviewDate,
      phase,
      status,
      note,
    };
  };

  const getId = async (user) => {
    const res = await fetch(`http://localhost:3333/api/candidates`);
    const data = await res.json();
    console.log(data);
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
