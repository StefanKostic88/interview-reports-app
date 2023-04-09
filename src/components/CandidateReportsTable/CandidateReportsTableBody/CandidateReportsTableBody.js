import React from "react";
import { MdVisibility } from "react-icons/md";

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
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                className="show-modal"
                onClick={() => {
                  onGetModalInfo(companyId);
                }}
              >
                <MdVisibility style={{ width: "25px", height: "25px" }} />
              </button>
            </td>
          </tr>
        )
      )}
    </tbody>
  );
};

export default CandidateReportsTableBody;
