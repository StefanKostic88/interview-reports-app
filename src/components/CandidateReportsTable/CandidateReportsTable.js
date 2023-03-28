import React from "react";
import CandidateReportsTableBody from "./CandidateReportsTableBody/CandidateReportsTableBody";

const CandidateReportsTable = ({ companies, onGetModalInfo }) => {
  return (
    <section className="table container section hscroll">
      <table className="table">
        <tbody>
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
        </tbody>
        <CandidateReportsTableBody
          companies={companies}
          onGetModalInfo={onGetModalInfo}
        />
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
