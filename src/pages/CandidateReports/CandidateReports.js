import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  MainContainer,
  CandidateReportsInfo,
  CandidateReportsTable,
  CandidateReportsModalWindow,
  UserCreatedMessage,
} from "../../components";
import {
  fetchCandidateData,
  fetchCompaniesData,
  deleteCandidate,
} from "../../services/fetchData/fehtchData";

import { useCandidateReports } from "../../hooks";

const CandidateReports = ({ onRefresh }) => {
  const { id: candidateId } = useParams();
  const navigate = useNavigate();

  const {
    candidateInfo,
    isOpen,
    modalInfo,
    closeModal,
    setCandidateInfo,
    setIsOpen,
    setModalInfo,
  } = useCandidateReports();
  const [delteMsg, setDelteMsg] = useState(false);

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

  const delteHandler = (id) => {
    setDelteMsg(() => true);
    deleteCandidate(id);
    const timer = setTimeout(() => {
      setDelteMsg(() => false);
      navigate("/");
      clearTimeout(timer);
      onRefresh();
    }, 3000);
  };

  return (
    <MainContainer>
      {delteMsg && <UserCreatedMessage msg={"Candidate Deleted"} />}
      <CandidateReportsInfo
        {...{ id, email, name, avatar, birthday, education }}
      />
      {companies.length === 0 ? (
        <h2
          className="table container section hscroll"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          No companies data available
          <button
            className="btn-alt"
            style={{ padding: "0.75rem 1.25rem", fontSize: "12px" }}
            onClick={() => {
              delteHandler(id);
            }}
          >
            Remove User
          </button>
        </h2>
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
