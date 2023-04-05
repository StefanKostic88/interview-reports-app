import { MdRemoveRedEye, MdClose } from "react-icons/md";

const AdministrativePanelLIstItem = ({
  candidateId,
  candidateName,
  companyName,
  interviewDate,
  status,
  onGetModalInfo,
  companyId,
  id,
  onDeleteReport,
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
        <h3>{interviewDate}</h3>
        <p>Interview&nbsp;Date</p>
      </div>
      <div className="reports__info-item">
        <h3>{status}</h3>
        <p>Status</p>
      </div>
      <div className="reports__info-item reports__info-item-last">
        <button
          className="show-modal btn-transparent"
          onClick={() => {
            onGetModalInfo(candidateId, companyId);
          }}
        >
          <MdRemoveRedEye style={{ width: "30px", height: "30px" }} />
        </button>
        <button
          className="delete-reports btn-transparent"
          onClick={() => {
            onDeleteReport(id);
          }}
        >
          <MdClose />
        </button>
      </div>
    </div>
  );
};

export default AdministrativePanelLIstItem;
