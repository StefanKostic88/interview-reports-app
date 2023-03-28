const Modal = ({
  candidateId,
  candidateName,
  companyId,
  companyName,
  id,
  interviewDate,
  note,
  phase,
  status,
  onCloseModal,
}) => {
  return (
    <div className="modal ">
      <button
        className="close-modal"
        onClick={() => {
          onCloseModal();
        }}
      >
        &times;
      </button>
      <h2>{candidateName}</h2>
      <hr />
      <div className="modal__info">
        <article className="modal__info-data">
          <div className="modal__info-item">
            <p>Company</p>
            <h3>{companyName}</h3>
          </div>
          <div className="modal__info-item">
            <p>Interview&nbsp;Date</p>
            <h3>{interviewDate}</h3>
          </div>
          <div className="modal__info-item">
            <p>Phase</p>
            <h3>{phase}</h3>
          </div>
          <div className="modal__info-item">
            <p>Status</p>
            <h3>{status}</h3>
          </div>
        </article>
        <article className="modal__info-data">
          <div className="modal__info-item">
            <p>Notes</p>
            <div>{note}</div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Modal;
