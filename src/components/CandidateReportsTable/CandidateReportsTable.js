import React from "react";
import CandidateReportsTableBody from "./CandidateReportsTableBody/CandidateReportsTableBody";

const CandidateReportsTable = ({ companies }) => {
  console.log();
  return (
    <section className="table container section hscroll">
      <table className="table">
        <thead>
          <th>
            <span>
              <img
                src="./assets/img/down-arrow-icon.svg"
                alt="down arrow icon"
                className="table-icon"
              />
              Company
            </span>
          </th>
          <th>
            <span>
              <img
                src="./assets/img/down-arrow-icon.svg"
                alt="down arrow icon"
                className="table-icon"
              />
              Interview&nbsp;Date
            </span>
          </th>
          <th colSpan="2">
            <span>
              <img
                src="./assets/img/down-arrow-icon.svg"
                alt="down arrow icon"
                className="table-icon"
              />
              Status
            </span>
          </th>
        </thead>
        <CandidateReportsTableBody companies={companies} />
      </table>
    </section>
  );
};

export default CandidateReportsTable;

{
  /* <tr>
<td data-label="Company">Google</td>
<td data-label="Date">20.3.2023.</td>
<td data-label="Status">Passed</td>
<td>
  <a href="#" className="show-modal">
    <img
      src="./assets/img/eye-icon.svg"
      alt="eye icon"
      className="table-icon"
    />
  </a>
</td>
</tr>

<tr>
<td data-label="Company">Facebook</td>
<td data-label="Date">22.3.2023.</td>
<td data-label="Status">Declined</td>
<td>
  <a href="#" className="show-modal">
    <img
      src="./assets/img/eye-icon.svg"
      alt="eye icon"
      className="table-icon"
    />
  </a>
</td>
</tr>

<tr>
<td data-label="Company">Instagram</td>
<td data-label="Date">28.3.2023.</td>
<td data-label="Status">Passed</td>
<td>
  <a href="#" className="show-modal">
    <img
      src="./assets/img/eye-icon.svg"
      alt="eye icon"
      className="table-icon"
    />
  </a>
</td>
</tr>

<tr>
<td data-label="Company">Linkedin</td>
<td data-label="Date">04.4.2023.</td>
<td data-label="Status">Passed</td>
<td>
  <a href="#" className="show-modal">
    <img
      src="./assets/img/eye-icon.svg"
      alt="eye icon"
      className="table-icon"
    />
  </a>
</td>
</tr> */
}
