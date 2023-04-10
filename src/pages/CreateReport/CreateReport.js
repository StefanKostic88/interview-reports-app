import {
  MainContainer,
  AdminstrativePanelOperations,
  CreateForm,
  UserCreatedMessage,
} from "../../components";
import {
  postUser,
  generateAndPostReport,
} from "../../services/fetchData/fehtchData";
import { generateUser } from "../../assets/heleperFunctions/heleperFunctions";

import { useData } from "../../assets/helperData/createFormData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const CreateReport = ({ onRegistersubmit }) => {
  const navigate = useNavigate();
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
  const [userIsCrated, setUserIsCrated] = useState(false);

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
    setUserIsCrated(() => true);
    const timer = setTimeout(() => {
      setUserIsCrated(() => false);
      navigate("/panel");
      clearTimeout(timer);
    }, 3000);
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
      {userIsCrated && <UserCreatedMessage msg={"User Created"} />}
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
