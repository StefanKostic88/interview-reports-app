import { useState, useEffect } from "react";
// import { useParams } from "react-router";

const useCandidateReports = () => {
  const [candidateInfo, setCandidateInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const closeModal = () => {
    setIsOpen(() => false);
    setModalInfo(() => ({}));
  };

  return {
    candidateInfo,
    isOpen,
    modalInfo,
    closeModal,
    setCandidateInfo,
    setIsOpen,
    setModalInfo,
  };
};

export default useCandidateReports;
