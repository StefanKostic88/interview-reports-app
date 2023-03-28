import React from "react";

import Modal from "../ui/ModalWindow/Modal";
import Overlay from "../ui/ModalWindow/Overlay";

const CandidateReportsModalWindow = ({
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
    <>
      <Overlay />
      <Modal
        {...{
          candidateId,
          candidateName,
          companyId,
          companyName,
          id,
          interviewDate,
          note,
          phase,
          status,
        }}
        onCloseModal={onCloseModal}
      />
    </>
  );
};

export default CandidateReportsModalWindow;
