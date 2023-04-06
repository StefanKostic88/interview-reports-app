import React from "react";

const CandidateReportsInfoTags = ({ label, tag }) => {
  return (
    <div className="single__candidat-info">
      <p>{label}</p>
      <h3>{tag}</h3>
    </div>
  );
};

export default CandidateReportsInfoTags;
