import { useEffect, useState } from "react";
import {
  MainContainer,
  AdminstrativePanelOperations,
  OperationOne,
  OperationTwo,
  OperationThree,
} from "../../components";

import { fetchCompaniesDataUnsliced } from "../../services/fetchData/fehtchData";

const AdnministrativePanelSubmit = ({ candidatesList }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [candidateName, setCandidateName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyList, setCompanyList] = useState(null);
  const [report, setReport] = useState({});

  const generateCompanyList = async (id) => {
    const list = await fetchCompaniesDataUnsliced(id);
    const updatedList = list.map((el) => ({ ...el, isActive: false }));
    setCompanyList(() => [...updatedList]);
  };

  const getCandidateId = (id) => {
    setActiveTab((prev) => prev + 1);
    generateCompanyList(id);
  };

  const getComanyIdAndName = (id, name) => {
    console.log(id);
    setActiveTab((prev) => prev + 1);
    setCompanyName(() => name);
  };

  const backToFirst = () => {
    setActiveTab((prev) => prev - 1);
  };
  const backToSecond = () => {
    setActiveTab((prev) => prev - 1);
  };
  const resetSteper = () => {
    setActiveTab(() => 1);
  };

  useEffect(() => {
    if (!companyList) return;
    setCandidateName(() => companyList[0].candidateName);
    setReport(() => [...companyList]);
  }, [companyList]);

  console.log(candidateName, companyName);

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
          {activeTab === 2 && (
            <OperationTwo
              companyListData={companyList}
              candidateName={candidateName}
              onBackToFirst={backToFirst}
              onCompanyClick={getComanyIdAndName}
            />
          )}
          {activeTab === 3 && (
            <OperationThree
              candidateName={candidateName}
              companyName={companyName}
              report={report}
              onBackToSecond={backToSecond}
              onResetSteper={resetSteper}
            />
          )}
        </AdminstrativePanelOperations>
      </section>
    </MainContainer>
  );
};

export default AdnministrativePanelSubmit;
