import { useState } from "react";
import {
  MainContainer,
  AdminstrativePanelOperations,
  OperationThree,
} from "../../components";
const CreateReport = ({ onRegistersubmit }) => {
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidateBirthDay, setCandidateBirthDay] = useState("");
  const [candidatePhase, setCandidatePhase] = useState("cv");
  const [candidateStatus, setCandidateStatus] = useState("passed");
  const [candidateNotes, setCandidateNotes] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [candidateEducation, setCandidateEducation] = useState("");
  const [submited, setIsSubmited] = useState(false);

  const candidateNameOnChangeHandler = (e) => {
    setCandidateName(() => e.target.value);
  };
  const candidateEmailOnChangeHandler = (e) => {
    setCandidateEmail(() => e.target.value);
  };
  const onBirthdayChangeHandler = (e) => {
    setCandidateBirthDay(new Date(e.target.value));
  };

  const onCandidatePhaseChangeHandler = (e) => {
    setCandidatePhase(e.target.value);
  };

  const candidateStatusOnChangeHandler = (e) => {
    setCandidateStatus(() => e.target.value);
  };
  const notesOnChangeHandler = (e) => {
    setCandidateNotes(() => e.target.value);
  };

  const educationOnChangeHandler = (e) => {
    setCandidateEducation(() => e.target.value);
  };

  const companyNameOnChangeHandler = (e) => {
    setCompanyName(() => e.target.value);
  };
  const submitUser = (e) => {
    e.preventDefault();
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
    const user = generateUser(
      candidateName,
      candidateBirthDay,
      candidateEmail,
      candidateEducation
    );
    const report = generateReports(
      candidateName,
      companyName,
      candidateBirthDay,
      candidatePhase,
      candidateStatus,
      candidateNotes
    );

    const gen = async (user) => {
      const data = await postUser(user);
      console.log(data[data.lenght - 1]);
      getId();
    };
    gen(user);
    //generate candidate
    //getUserId, name

    //generate reposrt

    onRegistersubmit();
  };

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

  const postUser = async (user) => {
    await fetch(`http://localhost:3333/api/candidates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
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
            <div className="operations__form-fill">
              <form action="" id="contact-form" onSubmit={submitUser}>
                <div className="operations__form">
                  <div className="operations__form-div">
                    <label htmlFor="date" className="search__form-tag">
                      Candidate Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="search__form-input"
                      id="name"
                      onChange={candidateNameOnChangeHandler}
                    />
                  </div>
                  <div className="operations__form-div">
                    <label htmlFor="date" className="search__form-tag">
                      Education:
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="search__form-input"
                      id="education"
                      onChange={educationOnChangeHandler}
                    />
                  </div>
                  <div className="operations__form-div">
                    <label htmlFor="date" className="search__form-tag">
                      Company name:
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="search__form-input"
                      id="company"
                      onChange={companyNameOnChangeHandler}
                    />
                  </div>
                </div>
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
                      onChange={onBirthdayChangeHandler}
                    />
                  </div>
                  <div className="operations__form-div">
                    <label htmlFor="tehnical" className="search__form-tag">
                      Phase:
                    </label>
                    <select
                      id="tehnical"
                      name="tehnical"
                      onChange={onCandidatePhaseChangeHandler}
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
                      onChange={candidateStatusOnChangeHandler}
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
                      onChange={notesOnChangeHandler}
                    >
                      Notes
                    </textarea>
                  </div>
                </div>
                <div className="operations__form">
                  <button className="btn-alt" onClick={() => () => {}}>
                    BACK
                  </button>
                  <button className="btn">SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
        </AdminstrativePanelOperations>
      </section>
    </MainContainer>
  );
};

export default CreateReport;
