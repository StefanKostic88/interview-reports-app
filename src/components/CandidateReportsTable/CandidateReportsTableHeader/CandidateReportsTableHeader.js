import CandidateReportsHeaderItem from "./CandidateReportsHeaderItem/CandidateReportsHeaderItem";
const CandidateReportsTableHeader = ({ reportStatus }) => {
  return (
    <tbody>
      <tr>
        {reportStatus.map((report, index) => (
          <CandidateReportsHeaderItem key={index} {...report} />
        ))}
      </tr>
    </tbody>
  );
};

export default CandidateReportsTableHeader;
