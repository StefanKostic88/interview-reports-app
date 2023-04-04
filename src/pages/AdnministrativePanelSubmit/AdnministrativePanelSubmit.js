import { useEffect, useState } from "react";
import {
  MainContainer,
  AdminstrativePanelOperations,
  OperationOne,
  OperationTwo,
  OperationTwoCreateReport,
  OperationThree,
  OperationThreeCreateReport,
} from "../../components";

import { fetchCompaniesDataUnsliced } from "../../services/fetchData/fehtchData";

const AdnministrativePanelSubmit = ({ candidatesList }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [candidateName, setCandidateName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyList, setCompanyList] = useState(null);
  const [report, setReport] = useState({});
  const [isCreating, setIsCreating] = useState(false);
  const [newCompanies, setNewCompanies] = useState([]);

  const generateCompanyList = async (id) => {
    const list = await fetchCompaniesDataUnsliced(id);
    const updatedList = list.map((el) => ({ ...el, isActive: false }));
    setCompanyList(() => [...updatedList]);
  };

  const filterNewCompanies = async (arr) => {
    const res = await fetch(`http://localhost:3333/api/companies`);
    const data = await res.json();

    const dataStyled = data
      .filter((el) => {
        return !arr.some((el1) => {
          return el.id === el1.companyId;
        });
      })
      .map((el) => ({ ...el, isActive: false }));

    setNewCompanies(() => [...dataStyled]);
  };

  const getCandidateId = (id) => {
    setActiveTab((prev) => prev + 1);
    generateCompanyList(id);
  };

  const getComanyIdAndName = (id, name) => {
    console.log(id);
    setActiveTab((prev) => prev + 1);
    setIsCreating(() => false);
    setCompanyName(() => name);
  };

  const backToFirst = () => {
    setActiveTab((prev) => prev - 1);
    setIsCreating(() => false);
  };
  const backToSecond = () => {
    setActiveTab((prev) => prev - 1);
  };
  const resetSteper = () => {
    setActiveTab(() => 1);
  };

  const createNewReport = () => {
    console.log("New Report Tab");
    setIsCreating(() => true);
    filterNewCompanies(report);
  };
  // console.log(newCompanies);

  useEffect(() => {
    if (!companyList) return;
    setCandidateName(() => companyList[0].candidateName);
    setReport(() => [...companyList]);
  }, [companyList]);

  return (
    <MainContainer>
      <section className="section container" id="operation">
        <AdminstrativePanelOperations tabIsActive={activeTab}>
          {activeTab === 1 && (
            <OperationOne
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
              <OperationThreeCreateReport />
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
