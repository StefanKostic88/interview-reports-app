import { useState, useEffect } from "react";
import {
  fetchReportsData,
  searchAndSubmitSoloCandidate,
  searchAndSubmitSoloCompany,
  fetchCompaniesDataUnsliced,
  deleteReports,
} from "../../services/fetchData/fehtchData";

import { convertWordToUpperCase } from "../../assets/heleperFunctions/heleperFunctions";

const useAdminstrativePanelReport = () => {
  const [reports, setReports] = useState(null);
  const [candidateFilter, setCandidateFilter] = useState(null);
  const [companyFilter, setCompanyFilter] = useState(null);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const getCandidateInfo = async (candidateId, companyId) => {
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

  const getModalInfo = (id, companyId) => {
    getCandidateInfo(id, companyId);
    setIsOpen(() => true);
  };

  const closeModal = () => {
    setIsOpen(() => false);
    setModalInfo(() => {});
  };

  const removeReport = async (id) => {
    await deleteReports(id);
    const data = await fetchReportsData();
    setReports(() => [...data]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (candidateFilter.length === 0 && companyFilter.length > 0) {
      setReports(() => [...companyFilter]);
    }
    if (candidateFilter.length > 0 && companyFilter.length === 0) {
      setReports(() => [...candidateFilter]);
    }
  };

  useEffect(() => {
    getReportsData();
  }, []);

  return {
    reports,
    candidateFilter,
    companyFilter,
    search,
    isOpen,
    modalInfo,
    onSubmitHandler,
    removeReport,
    getModalInfo,
    onChangeHandler,
    closeModal,
  };
};

export default useAdminstrativePanelReport;
