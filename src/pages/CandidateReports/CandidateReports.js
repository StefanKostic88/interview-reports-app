import { useEffect } from "react";
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

import { useCandidateReports } from "../../hooks";

const CandidateReports = () => {
  const { id: candidateId } = useParams();

  const {
    candidateInfo,
    isOpen,
    modalInfo,
    closeModal,
    setCandidateInfo,
    setIsOpen,
    setModalInfo,
  } = useCandidateReports();

  useEffect(() => {
    const getCandidateInfo = async () => {
      const info = await fetchCandidateData(candidateId);
      const candidateCompanies = await fetchCompaniesData(candidateId);

      setCandidateInfo(() => ({ ...info, companies: [...candidateCompanies] }));
    };
    getCandidateInfo();
  }, []);

  const getModalInfo = (id) => {
    const data = companies.find((company) => company.companyId === id);
    setModalInfo(() => ({ ...data }));
    setIsOpen(() => true);
  };

  if (!candidateInfo) return;
  const { id, email, name, avatar, birthday, education, companies } =
    candidateInfo;

  return (
    <MainContainer>
      <CandidateReportsInfo
        {...{ id, email, name, avatar, birthday, education }}
      />
      {companies.length === 0 ? (
        <div>No companies data available</div>
      ) : (
        <CandidateReportsTable
          companies={companies}
          onGetModalInfo={getModalInfo}
        />
      )}
      {isOpen && (
        <CandidateReportsModalWindow {...modalInfo} onCloseModal={closeModal} />
      )}
    </MainContainer>
  );
};

export default CandidateReports;
