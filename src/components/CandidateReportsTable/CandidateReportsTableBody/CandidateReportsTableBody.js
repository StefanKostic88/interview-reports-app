import React from "react";

const CandidateReportsTableBody = ({ companies, onGetModalInfo }) => {
  return (
    <tbody>
      {companies.map(
        ({ companyName, interviewDate, status, id, companyId }) => (
          <tr key={id}>
            <td data-label="Company">{companyName}</td>
            <td data-label="Date">{interviewDate}</td>
            <td data-label="Status">{status}</td>
            <td>
              <a
                href="#"
                className="show-modal"
                onClick={() => {
                  onGetModalInfo(companyId);
                }}
              >
                <img
                  src="./assets/img/eye-icon.svg"
                  alt="eye icon"
                  className="table-icon"
                />
              </a>
            </td>
          </tr>
        )
      )}
    </tbody>
  );
};

export default CandidateReportsTableBody;
