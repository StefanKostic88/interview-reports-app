import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  MainContainer,
  CandidateReportsInfo,
  CandidateReportsTable,
  CandidateReportsModalWindow,
} from "../../components";
import {
  fetchCandidateData,
  fetchCompaniesData,
} from "../../services/fetchData/fehtchData";

const CandidateReports = () => {
  const { id: candidateId } = useParams();
  const [candidateInfo, setCandidateInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  useEffect(() => {
    const getCandidateInfo = async () => {
      const info = await fetchCandidateData(candidateId);
      const candidateCompanies = await fetchCompaniesData(candidateId);
      setCandidateInfo(() => ({ ...info, companies: [...candidateCompanies] }));
    };
    getCandidateInfo();
  }, []);

  if (!candidateInfo) return;
  const { id, email, name, avatar, birthday, education, companies } =
    candidateInfo;

  const getModalInfo = (id) => {
    const data = companies.find((company) => company.companyId === id);
    setModalInfo(() => ({ ...data }));
    setIsOpen(() => true);
  };

  const closeModal = () => {
    setIsOpen(() => false);
    setModalInfo(() => ({}));
  };

  return (
    <MainContainer>
      <CandidateReportsInfo
        {...{ id, email, name, avatar, birthday, education }}
      />
      <CandidateReportsTable
        companies={companies}
        onGetModalInfo={getModalInfo}
      />
      {isOpen && (
        <CandidateReportsModalWindow {...modalInfo} onCloseModal={closeModal} />
      )}
    </MainContainer>
  );
};

export default CandidateReports;
