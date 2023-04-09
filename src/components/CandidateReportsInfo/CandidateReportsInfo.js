import React from "react";
import CandidateReportsInfoTags from "./CandidateReportsInfoTags/CandidateReportsInfoTags";

const CandidateReportsInfo = ({ avatar, name, email, birthday, education }) => {
  const nameEmail = [
    { label: "Name:", tag: name },
    { label: "Email:", tag: email },
  ];

  const birthEducation = [
    { label: "Date of Birth:", tag: birthday },
    { label: "Education:", tag: education },
  ];

  return (
    <section
      className="single__candidate section container grid"
      id="single-candidate"
    >
      <article className="single__candidate-data">
        <img
          src={avatar}
          alt="candidate-info"
          className="single__candidate-img"
        />
      </article>
      <article className="single__candidate-data">
        {nameEmail.map((tagGroup, index) => (
          <CandidateReportsInfoTags
            {...tagGroup}
            key={`${tagGroup.label}-${index}`}
          />
        ))}
      </article>
      <article className="single__candidate-data">
        {birthEducation.map((tagGroup, index) => (
          <CandidateReportsInfoTags
            {...tagGroup}
            key={`${tagGroup.label}-${index}`}
          />
        ))}
      </article>
    </section>
  );
};

export default CandidateReportsInfo;
