import React from "react";

const AdministrativePanelLIstItem = ({
  candidateId,
  candidateName,
  companyName,
  interviewDate,
  status,
}) => {
  return (
    <div class="reports-item">
      <div class="reports__info-item">
        <h3>{companyName}</h3>
        <p>Company</p>
      </div>
      <div class="reports__info-item">
        <h3>{candidateName}</h3>
        <p>Candidate</p>
      </div>
      <div class="reports__info-item">
        <h3>{interviewDate}.</h3>
        <p>Interview&nbsp;Date</p>
      </div>
      <div class="reports__info-item">
        <h3>{status}</h3>
        <p>Status</p>
      </div>
      <div class="reports__info-item reports__info-item-last">
        <button class="show-modal btn-transparent">
          <img
            src="./assets/img/eye-icon.svg"
            alt="eye icon"
            class="reports-icon"
          />
        </button>
        <button class="delete-reports btn-transparent">&times;</button>
      </div>
    </div>
  );
};

export default AdministrativePanelLIstItem;
