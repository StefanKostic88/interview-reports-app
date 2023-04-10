import { useState } from "react";
import { fetchCompaniesDataUnsliced } from "../../services/fetchData/fehtchData";
const useAdministrativePanelSubmit = () => {
  const [candidateId, setcCndidateId] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [candidateName, setCandidateName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyList, setCompanyList] = useState(null);
  const [report, setReport] = useState({});
  const [isCreating, setIsCreating] = useState(false);
  const [newCompanies, setNewCompanies] = useState([]);
  const [reportMsg, setReportMsg] = useState("");
  const [showMsgIsVisible, setShowMsgIsVisible] = useState(false);

  const generateCompanyList = async (id) => {
    const list = await fetchCompaniesDataUnsliced(id);
    const updatedList = list.map((el) => ({ ...el, isActive: false }));
    setCompanyList(() => [...updatedList]);
  };

  const getCandidateName = (name) => {
    setCandidateName(() => name);
  };

  const filterNewCompanies = async (arr) => {
    const res = await fetch(`http://localhost:3333/api/companies`);
    const data = await res.json();

    const dataStyled = data.filter((el) => {
      return !arr.some((el1) => {
        return el.id === el1.companyId;
      });
    });

    setNewCompanies(() => [...dataStyled]);
  };

  const getCandidateId = (id) => {
    setActiveTab((prev) => prev + 1);
    generateCompanyList(id);
    setcCndidateId(() => id);
  };

  const getComanyIdAndName = (reportId, name) => {
    setActiveTab((prev) => prev + 1);
    setIsCreating(() => false);
    setCompanyName(() => name);

    const individualReport = companyList.find(
      (company) => company.id === reportId
    );

    setReport(() => ({ ...individualReport }));
  };

  const generateNewReport = (companyID, companyName) => {
    console.log(companyID);
    setActiveTab((prev) => prev + 1);
    setReport(() => ({
      companyId: companyID,
      companyName: companyName,
      candidateId: candidateId,
      candidateName: candidateName,
      interviewDate: "",
      isActive: false,
      note: "Note",
      phase: "cv",
      status: "Passed",
    }));
  };

  const initCreate = (name) => {
    setIsCreating(() => true);
    setCompanyName(() => name);
  };

  const backToFirst = () => {
    setActiveTab((prev) => prev - 1);
    setIsCreating(() => false);
  };
  const backToSecond = () => {
    setIsCreating(() => false);
    setActiveTab((prev) => prev - 1);
  };
  const resetSteper = () => {
    setActiveTab(() => 1);
    setIsCreating(() => false);
  };

  const createNewReport = () => {
    setIsCreating(() => true);
    filterNewCompanies(companyList);
  };

  const getSubmitMsg = (str) => {
    setShowMsgIsVisible(() => true);
    setReportMsg(() => str);
    const timer = setTimeout(() => {
      setShowMsgIsVisible(() => false);
      setReportMsg(() => "");
      clearTimeout(timer);
    }, 3000);
  };
  return {
    candidateId,
    activeTab,
    candidateName,
    companyName,
    companyList,
    report,
    isCreating,
    newCompanies,
    getCandidateName,
    getCandidateId,
    getComanyIdAndName,
    generateNewReport,
    initCreate,
    backToFirst,
    backToSecond,
    resetSteper,
    createNewReport,
    getSubmitMsg,
    reportMsg,
    showMsgIsVisible,
  };
};
export default useAdministrativePanelSubmit;

//
