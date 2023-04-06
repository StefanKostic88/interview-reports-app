import { useNavigate } from "react-router";

import {
  MainContainer,
  AdministrativePanelList,
  CandidateReportsModalWindow,
  CustomForm,
} from "../../components";

import { useAdminstrativePanelReport } from "../../hooks";

const AdministrativePanelReports = () => {
  const navigate = useNavigate();

  const {
    reports,
    search,
    isOpen,
    modalInfo,
    onSubmitHandler,
    removeReport,
    getModalInfo,
    onChangeHandler,
    closeModal,
  } = useAdminstrativePanelReport();

  if (!reports) return <div>Loading...</div>;

  return (
    <MainContainer>
      <section className="container section" id="home">
        <div className="home">
          <CustomForm
            onSubmitHandler={onSubmitHandler}
            onChangeHandler={onChangeHandler}
            value={search}
            label={"Search"}
          />

          <button className="btn" onClick={() => navigate("/panel/create")}>
            Create New User
          </button>
        </div>
      </section>
      <section className="section container" id="operation">
        <AdministrativePanelList
          reportsData={reports}
          onGetModalInfo={getModalInfo}
          onDeleteReport={removeReport}
        />
      </section>
      {isOpen && (
        <CandidateReportsModalWindow {...modalInfo} onCloseModal={closeModal} />
      )}
    </MainContainer>
  );
};

export default AdministrativePanelReports;

// import { useEffect, useState } from "react";

// import {
//   fetchReportsData,
//   searchAndSubmitSoloCandidate,
//   searchAndSubmitSoloCompany,
//   fetchCompaniesDataUnsliced,
//   deleteReports,
// } from "../../services/fetchData/fehtchData";

// import { convertWordToUpperCase } from "../../assets/heleperFunctions/heleperFunctions";

// const [reports, setReports] = useState(null);
// const [candidateFilter, setCandidateFilter] = useState(null);
// const [companyFilter, setCompanyFilter] = useState(null);
// const [search, setSearch] = useState("");
// const [isOpen, setIsOpen] = useState(false);
// const [modalInfo, setModalInfo] = useState({});

// const getCandidateInfo = async (candidateId, companyId) => {
//   const candidateCompanies = await fetchCompaniesDataUnsliced(candidateId);
//   const data = candidateCompanies.find(
//     (company) => company.companyId === companyId
//   );
//   setModalInfo(() => ({ ...data }));
// };

// const getSearchValues = async (searchTearm) => {
//   const convertToFirstUpperSearchTearm = convertWordToUpperCase(searchTearm);

//   const candidateFilterData = await searchAndSubmitSoloCandidate(
//     convertToFirstUpperSearchTearm
//   );
//   const companyFilterData = await searchAndSubmitSoloCompany(
//     convertToFirstUpperSearchTearm
//   );
//   setCandidateFilter(() => [...candidateFilterData]);
//   setCompanyFilter(() => [...companyFilterData]);
// };

// const getReportsData = async () => {
//   const data = await fetchReportsData();
//   setReports(() => [...data]);
//   setSearch(() => "");
// };

// const onChangeHandler = (e) => {
//   getSearchValues(e.target.value);
//   setSearch(() => e.target.value);
// };

// const getModalInfo = (id, companyId) => {
//   getCandidateInfo(id, companyId);
//   setIsOpen(() => true);
// };

// const closeModal = () => {
//   setIsOpen(() => false);
//   setModalInfo(() => {});
// };

// const removeReport = async (id) => {
//   await deleteReports(id);
//   const data = await fetchReportsData();
//   setReports(() => [...data]);
// };

// const onSubmitHandler = (e) => {
//   e.preventDefault();
//   if (candidateFilter.length === 0 && companyFilter.length > 0) {
//     setReports(() => [...companyFilter]);
//   }
//   if (candidateFilter.length > 0 && companyFilter.length === 0) {
//     setReports(() => [...candidateFilter]);
//   }
// };

// useEffect(() => {
//   getReportsData();
// }, []);
