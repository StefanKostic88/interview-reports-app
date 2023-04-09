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

import { useData } from "../../assets/helperData/createFormData";
import { useEffect, useState } from "react";

const CreateReport = ({ onRegistersubmit }) => {
  const {
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
    notesOnChangeHandler,
    inputArr,
    optionsArr,
  } = useData();

  const [formIsValid, setFormIsValid] = useState(false);

  const submitUser = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

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
    setFormIsValid(() => false);
  };

  useEffect(() => {
    if (
      candidateName &&
      candidateEmail &&
      candidateBirthDay &&
      candidateEducation &&
      companyName &&
      candidatePhase &&
      candidateStatus &&
      candidateNotes &&
      interviewDate
    ) {
      setFormIsValid(() => true);
    } else {
      setFormIsValid(() => false);
    }
  }, [
    ,
    candidateEmail,
    candidateEducation,
    candidateBirthDay,
    interviewDate,
    candidatePhase,
    candidateStatus,
    candidateNotes,
    companyName,
  ]);

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
              formDisabled={formIsValid}
            />
          </div>
        </AdminstrativePanelOperations>
      </section>
    </MainContainer>
  );
};

export default CreateReport;
