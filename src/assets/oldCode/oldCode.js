//App comp

// const [candidatesList, setCandidatesList] = useState([]);
// const [isSubmited, setIsSubmited] = useState(false);
// const [resetInputSignal, setResetInputSignal] = useState(false);

// const registerSubmit = () => {
//   setIsSubmited(() => true);
// };
// const getCandidates = async () => {
//   const data = await fetchCandidatsData();

//   const dataAddedFalseIsActive = data.map((el) => ({
//     ...el,
//     isActive: false,
//   }));
//   setCandidatesList(() => [...dataAddedFalseIsActive]);
// };

// const refresh = () => {
//   setCandidatesList(() => []);
//   getCandidates();
//   setResetInputSignal(() => true);
// };

// useEffect(() => {
//   getCandidates();
// }, []);

// useEffect(() => {
//   getCandidates();
//   setIsSubmited(() => false);
// }, [isSubmited]);
// useEffect(() => {
//   setResetInputSignal(() => false);
// }, [resetInputSignal]);

///////////////////PAGES///////////////////////

//Home

// const [filteredUsers, setFilteredUsers] = useState(null);
// const [isLoading, setIsLoading] = useState(true);

// const filterCandidate = (candidateName) => {
//   const candidateConverted = candidateName.toLowerCase();
//   const data = candidatesList.filter((candidate) =>
//     candidate.name.toLowerCase().startsWith(candidateConverted)
//   );
//   setFilteredUsers(() => [...data]);
// };

// useEffect(() => {
//   setFilteredUsers(() => [...candidatesList]);
//   setIsLoading(() => false);
// }, [candidatesList]);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setIsLoading(() => false);
//   }, 500);
//   return () => {
//     clearTimeout(timer);
//     setIsLoading(() => true);
//   };
// }, [filteredUsers]);

//Create Report

// const {
//   inputVal: ,
//   valOnChangeHandler: candidateNameOnChangeHandler,
//   resetVal: resetCandidateName,
// } = useCreateForm(() => "");
// const {
//   inputVal: candidateEmail,
//   valOnChangeHandler: candidateEmailOnChangeHandler,
//   resetVal: resetCandidateEmail,
// } = useCreateForm(() => "");

// const {
//   inputVal: candidateEducation,
//   valOnChangeHandler: educationOnChangeHandler,
//   resetVal: resetCandidateEducation,
// } = useCreateForm(() => "");

// const {
//   inputVal: candidateBirthDay,
//   valOnChangeHandler: birthdayChangeHandler,
//   resetVal: resetCandidateBirthday,
// } = useCreateForm(() => "");
// const {
//   inputVal: interviewDate,
//   valOnChangeHandler: interviewDateOnChangeHandler,
//   resetVal: resetInterviewDate,
// } = useCreateForm(() => "");

// const {
//   inputVal: candidatePhase,
//   valOnChangeHandler: onCandidatePhaseChangeHandler,
//   resetVal: resetCandidatePhase,
// } = useCreateForm(() => "cv");

// const {
//   inputVal: candidateStatus,
//   valOnChangeHandler: candidateStatusOnChangeHandler,
//   resetVal: resetCandidateStatus,
// } = useCreateForm(() => "passed");

// const {
//   inputVal: candidateNotes,
//   valOnChangeHandler: notesOnChangeHandler,
//   resetVal: resetCandidateNotes,
// } = useCreateForm(() => "Notes");
// const {
//   inputVal: companyName,
//   valOnChangeHandler: companyNameOnChangeHandler,
//   resetVal: resetCompanyName,
// } = useCreateForm(() => "Google");

// const resetAllInputs = () => {
//   resetCandidateName();
//   resetCandidateEmail();
//   resetCandidateEducation();
//   resetCandidateBirthday();
//   resetInterviewDate();
//   resetCandidatePhase();
//   resetCandidateStatus();
//   resetCandidateNotes();
//   resetCompanyName();
// };

// const inputArr = [
//   {
//     type: "text",
//     name: "name",
//     id: "name",
//     onChangeHandler: candidateNameOnChangeHandler,
//     label: "Candidate Name:",
//     value: candidateName,
//   },
//   {
//     type: "email",
//     name: "email",
//     id: "email",
//     onChangeHandler: candidateEmailOnChangeHandler,
//     label: "Candidate Email:",
//     value: candidateEmail,
//   },
//   {
//     type: "text",
//     name: "education",
//     id: "education",
//     onChangeHandler: educationOnChangeHandler,
//     label: "Education:",
//     value: candidateEducation,
//   },
//   {
//     type: "date",
//     name: "birthday",
//     id: "birthday",
//     onChangeHandler: birthdayChangeHandler,
//     label: "Birthday:",
//     value: candidateBirthDay,
//   },
//   {
//     type: "date",
//     name: "interview-date",
//     id: "interview-date",
//     onChangeHandler: interviewDateOnChangeHandler,
//     label: "Interview Date:",
//     value: interviewDate,
//   },
// ];

// const optionsArr = [
//   {
//     onChangeHandler: companyNameOnChangeHandler,
//     id: "company-name",
//     name: "company-name",
//     label: "Company Name:",
//     otions: [
//       { value: "Google" },
//       { value: "Facebook" },
//       { value: "Microsoft" },
//       { value: "Tesla" },
//       { value: "Alphabet" },
//     ],
//   },
//   {
//     onChangeHandler: onCandidatePhaseChangeHandler,
//     id: "tehnical",
//     name: "tehnical",
//     label: "Phase:",
//     otions: [
//       { value: "cv" },
//       { value: "hr" },
//       { value: "tech" },
//       { value: "final" },
//     ],
//   },
//   {
//     onChangeHandler: candidateStatusOnChangeHandler,
//     id: "select",
//     name: "select",
//     label: "Select:",
//     otions: [{ value: "passed" }, { value: "declined" }],
//   },
// ];
//

//Candidate report

// const [candidateInfo, setCandidateInfo] = useState(null);
// const [isOpen, setIsOpen] = useState(false);
// const [modalInfo, setModalInfo] = useState({});
// const closeModal = () => {
//   setIsOpen(() => false);
//   setModalInfo(() => ({}));
// };

//Admin Panel Submit

// const [candidateId, setcCndidateId] = useState(null);
// const [activeTab, setActiveTab] = useState(1);
// const [candidateName, setCandidateName] = useState("");
// const [companyName, setCompanyName] = useState("");
// const [companyList, setCompanyList] = useState(null);
// const [report, setReport] = useState({});
// const [isCreating, setIsCreating] = useState(false);
// const [newCompanies, setNewCompanies] = useState([]);

// const generateCompanyList = async (id) => {
//   const list = await fetchCompaniesDataUnsliced(id);
//   const updatedList = list.map((el) => ({ ...el, isActive: false }));
//   setCompanyList(() => [...updatedList]);
// };

// const getCandidateName = (name) => {
//   setCandidateName(() => name);
// };

// const filterNewCompanies = async (arr) => {
//   const res = await fetch(`http://localhost:3333/api/companies`);
//   const data = await res.json();

//   const dataStyled = data.filter((el) => {
//     return !arr.some((el1) => {
//       return el.id === el1.companyId;
//     });
//   });

//   setNewCompanies(() => [...dataStyled]);
// };

// const getCandidateId = (id) => {
//   setActiveTab((prev) => prev + 1);
//   generateCompanyList(id);
//   setcCndidateId(() => id);
// };

// const getComanyIdAndName = (reportId, name) => {
//   setActiveTab((prev) => prev + 1);
//   setIsCreating(() => false);
//   setCompanyName(() => name);

//   const individualReport = companyList.find(
//     (company) => company.id === reportId
//   );

//   setReport(() => ({ ...individualReport }));
// };

// const generateNewReport = (companyID, companyName) => {
//   setActiveTab((prev) => prev + 1);
//   setReport(() => ({
//     companyId: companyID,
//     companyName: companyName,
//     candidateId: candidateId,
//     candidateName: candidateName,
//     interviewDate: "",
//     isActive: false,
//     note: "Note",
//     phase: "cv",
//     status: "Passed",
//   }));
// };

// const initCreate = (name) => {
//   setIsCreating(() => true);
//   setCompanyName(() => name);
// };

// const backToFirst = () => {
//   setActiveTab((prev) => prev - 1);
//   setIsCreating(() => false);
// };
// const backToSecond = () => {
//   setIsCreating(() => false);
//   setActiveTab((prev) => prev - 1);
// };
// const resetSteper = () => {
//   setActiveTab(() => 1);
//   setIsCreating(() => false);
// };

// const createNewReport = () => {
//   setIsCreating(() => true);
//   filterNewCompanies(companyList);
// };

//Admin Panel Reports

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

// CandidateRportsTable

// const [companyIsSortedUp, setCompanyIsSortedUp] = useState(true);
// const [dateIsSorted, setDateIsSorted] = useState(true);
// const [statusIsSorted, setStatusIsSorted] = useState(true);

// const [companiesList, setCompaniesList] = useState([]);
// const [sortedState, dispatchSortedState] = useReducer(
//   sortedReducer,
//   initialSortedState
// );

// const sortCompanyFunc = (arr, sortUp = true) => {
//   if (sortUp) {
//     return arr.sort((a, b) => {
//       if (a.companyName < b.companyName) {
//         return -1;
//       }
//     });
//   } else {
//     return arr.sort((a, b) => {
//       if (a.companyName > b.companyName) {
//         return -1;
//       }
//     });
//   }
// };
// const sortStatusFunc = (arr, sortUp = true) => {
//   if (sortUp) {
//     return arr.sort((a, b) => {
//       if (a.status < b.status) {
//         return -1;
//       }
//     });
//   } else {
//     return arr.sort((a, b) => {
//       if (a.status > b.status) {
//         return -1;
//       }
//     });
//   }
// };

// const sortDateFunc = (arr, sortUp = true) => {
//   if (sortUp) {
//     return arr.sort((a, b) => {
//       if (a.interviewDate < b.interviewDate) {
//         return -1;
//       }
//     });
//   } else {
//     return arr.sort((a, b) => {
//       if (a.interviewDate > b.interviewDate) {
//         return -1;
//       }
//     });
//   }
// };

// const sortByCompanyName = () => {
//   const sorted = sortCompanyFunc(companies);
//   setCompaniesList(() => [...sorted]);
//   dispatchSortedState({ type: dispatchActionTypes.COMPANY_SORTED_UP });
// };
// const sortByCompanyNameReverted = () => {
//   const sotrted = sortCompanyFunc(companies, false);
//   setCompaniesList(() => [...sotrted]);
//   dispatchSortedState({ type: dispatchActionTypes.COMPANY_SORTED_DOWN });
// };

// const sortByPassedStatus = () => {
//   const sorted = sortStatusFunc(companies);
//   setCompaniesList(() => [...sorted]);
//   dispatchSortedState({ type: dispatchActionTypes.STATUS_SORTED_UP });
// };
// const sortByPassedStatusReverted = () => {
//   const sorted = sortStatusFunc(companies, false);
//   setCompaniesList(() => [...sorted]);
//   dispatchSortedState({ type: dispatchActionTypes.STATUS_SORTED_DOWN });
// };

// const sortByDate = () => {
//   const sorted = sortDateFunc(companies);
//   setCompaniesList(() => [...sorted]);
//   dispatchSortedState({ type: dispatchActionTypes.DATE_SORTED_UP });
// };
// const sortByDateReverted = () => {
//   const sorted = sortDateFunc(companies, false);
//   setCompaniesList(() => [...sorted]);
//   dispatchSortedState({ type: dispatchActionTypes.DATE_SORTED_DOWN });
// };

// useEffect(() => {
//   if (!companies) return;
//   setCompaniesList(() => [...companies]);
// }, []);
// console.log(sortedState);

{
  /* <div className="single__candidat-info">
            <p>Name:</p>
            <h3>{name}</h3>
          </div>
          <div className="single__candidat-info">
            <p>Email:</p>
            <h3>{email}</h3>
          </div> */
}

{
  /* <div className="single__candidat-info">
  <p>Date of Birth:</p>
  <h3>{birthday}</h3>
  </div>
  <div className="single__candidat-info">
  <p>Education:</p>
  <h3>{education}</h3>
  </div> */
}
