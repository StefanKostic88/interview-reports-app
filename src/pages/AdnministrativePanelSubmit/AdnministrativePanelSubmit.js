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
  console.log();

  const backToFirst = () => {
    setActiveTab((prev) => prev - 1);
  };
  const backToSecond = () => {
    setActiveTab((prev) => prev - 1);
  };

  useEffect(() => {
    if (!companyList) return;
    setCandidateName(() => companyList[0].candidateName);
  }, [companyList]);
  useEffect(() => {
    // if (!companyList) return;
    // setCandidateName(() => companyList[0].candidateName);
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
              onBackToSecond={backToSecond}
            />
          )}
        </AdminstrativePanelOperations>
      </section>
    </MainContainer>
  );
};

export default AdnministrativePanelSubmit;
