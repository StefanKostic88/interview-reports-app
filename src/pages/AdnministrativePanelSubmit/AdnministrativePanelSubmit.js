// import { useState } from "react";
import {
  MainContainer,
  AdminstrativePanelOperations,
  OperationOne,
  OperationTwo,
  OperationTwoCreateReport,
  OperationThree,
  OperationThreeCreateReport,
} from "../../components";

// import { fetchCompaniesDataUnsliced } from "../../services/fetchData/fehtchData";

import useAdministrativePanelSubmit from "../../hooks/use-adminstritive-panel-submit/useAdministrativePanelSubmit";

const AdnministrativePanelSubmit = ({ candidatesList }) => {
  const {
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
  } = useAdministrativePanelSubmit();

  return (
    <MainContainer>
      <section className="section container" id="operation">
        <AdminstrativePanelOperations tabIsActive={activeTab}>
          {activeTab === 1 && (
            <OperationOne
              onCandidateName={getCandidateName}
              candidatesList={candidatesList}
              onCandidateClick={getCandidateId}
            />
          )}
          {activeTab === 2 &&
            (isCreating ? (
              <OperationTwoCreateReport
                newCompanies={newCompanies}
                candidateName={candidateName}
                onBackToFirst={backToFirst}
                onCompanyClick={generateNewReport}
                onGetCompanyTest={initCreate}
              />
            ) : (
              <OperationTwo
                companyListData={companyList}
                candidateName={candidateName}
                onBackToFirst={backToFirst}
                onCompanyClick={getComanyIdAndName}
                onCreateNewReport={createNewReport}
              />
            ))}
          {activeTab === 3 &&
            (isCreating ? (
              <OperationThreeCreateReport
                candidateName={candidateName}
                companyName={companyName}
                newReport={report}
                onBackToSecond={backToSecond}
                onResetSteper={resetSteper}
              />
            ) : (
              <OperationThree
                candidateName={candidateName}
                companyName={companyName}
                report={report}
                onBackToSecond={backToSecond}
                onResetSteper={resetSteper}
              />
            ))}
        </AdminstrativePanelOperations>
      </section>
    </MainContainer>
  );
};

export default AdnministrativePanelSubmit;

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
