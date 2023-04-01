import React from "react";

const AdministrativePanelLIstItem = ({
  candidateId,
  candidateName,
  companyName,
  interviewDate,
  status,
}) => {
  return (
    <div className="reports-item">
      <div className="reports__info-item">
        <h3>{companyName}</h3>
        <p>Company</p>
      </div>
      <div className="reports__info-item">
        <h3>{candidateName}</h3>
        <p>Candidate</p>
      </div>
      <div className="reports__info-item">
        <h3>{interviewDate}.</h3>
        <p>Interview&nbsp;Date</p>
      </div>
      <div className="reports__info-item">
        <h3>{status}</h3>
        <p>Status</p>
      </div>
      <div className="reports__info-item reports__info-item-last">
        <button className="show-modal btn-transparent">
          <img
            src="./assets/img/eye-icon.svg"
            alt="eye icon"
            className="reports-icon"
          />
        </button>
        <button className="delete-reports btn-transparent">&times;</button>
      </div>
    </div>
  );
};

export default AdministrativePanelLIstItem;
