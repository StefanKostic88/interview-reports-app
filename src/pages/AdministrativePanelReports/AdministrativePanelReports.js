import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import {
  MainContainer,
  AdministrativePanelList,
  CandidateReportsModalWindow,
} from "../../components";

import {
  fetchReportsData,
  searchAndSubmitSoloCandidate,
  searchAndSubmitSoloCompany,
  fetchCompaniesDataUnsliced,
} from "../../services/fetchData/fehtchData";

import { convertWordToUpperCase } from "../../assets/heleperFunctions/heleperFunctions";

const AdministrativePanelReports = () => {
  const navigate = useNavigate();
  const [reports, setReports] = useState(null);
  const [candidateFilter, setCandidateFilter] = useState(null);
  const [companyFilter, setCompanyFilter] = useState(null);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const getCandidateInfo = async (candidateId, companyId) => {
    console.log(candidateId, companyId);
    const candidateCompanies = await fetchCompaniesDataUnsliced(candidateId);
    const data = candidateCompanies.find(
      (company) => company.companyId === companyId
    );
    setModalInfo(() => ({ ...data }));
  };

  const getSearchValues = async (searchTearm) => {
    const convertToFirstUpperSearchTearm = convertWordToUpperCase(searchTearm);

    const candidateFilterData = await searchAndSubmitSoloCandidate(
      convertToFirstUpperSearchTearm
    );
    const companyFilterData = await searchAndSubmitSoloCompany(
      convertToFirstUpperSearchTearm
    );
    setCandidateFilter(() => [...candidateFilterData]);
    setCompanyFilter(() => [...companyFilterData]);
  };

  const getReportsData = async () => {
    const data = await fetchReportsData();
    setReports(() => [...data]);
    setSearch(() => "");
  };

  const onChangeHandler = (e) => {
    getSearchValues(e.target.value);
    setSearch(() => e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(candidateFilter, companyFilter);
    if (candidateFilter.length === 0 && companyFilter.length > 0) {
      console.log("Company Array");
      setReports(() => [...companyFilter]);
    }
    if (candidateFilter.length > 0 && companyFilter.length === 0) {
      console.log("Candidate Array");
      setReports(() => [...candidateFilter]);
    }
  };

  const getModalInfo = (id, companyId) => {
    console.log(id);
    getCandidateInfo(id, companyId);
    setIsOpen(() => true);
  };

  const closeModal = () => {
    setIsOpen(() => false);
    setModalInfo(() => {});
  };

  useEffect(() => {
    getReportsData();
  }, []);

  if (!reports) return <div>Loading...</div>;

  return (
    <MainContainer>
      <section className="container section" id="home">
        <div className="home">
          <form
            action=""
            className="search__form"
            id="contact-form"
            onSubmit={onSubmitHandler}
          >
            <div className="search__form-div">
              <label className="search__form-tag">Search</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Search..."
                className="search__form-input"
                id="contact-name"
                onChange={onChangeHandler}
                value={search}
              />
            </div>
          </form>
          <button className="btn" onClick={() => navigate("/panel/create")}>
            Create New User
          </button>
        </div>
      </section>
      <section className="section container" id="operation">
        <AdministrativePanelList
          reportsData={reports}
          onGetModalInfo={getModalInfo}
        />
      </section>
      {isOpen && (
        <CandidateReportsModalWindow {...modalInfo} onCloseModal={closeModal} />
      )}
    </MainContainer>
  );
};

export default AdministrativePanelReports;
