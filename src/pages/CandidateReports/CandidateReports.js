import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  MainContainer,
  CandidateReportsInfo,
  CandidateReportsTable,
  Modal,
  Overlay,
} from "../../components";
import {
  fetchCandidateData,
  fetchCompaniesData,
} from "../../services/fetchData/fehtchData";

import "./CandidateReports.css";

const CandidateReports = () => {
  const { id: candidateId } = useParams();
  const [candidateInfo, setCandidateInfo] = useState(null);

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

  return (
    <MainContainer>
      <CandidateReportsInfo
        {...{ id, email, name, avatar, birthday, education }}
      />
      <CandidateReportsTable companies={companies} />
      <Overlay />
      <Modal />
    </MainContainer>
  );
};

export default CandidateReports;
