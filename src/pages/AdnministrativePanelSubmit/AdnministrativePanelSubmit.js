import {
  MainContainer,
  AdminstrativePanelOperations,
  OperationOne,
  OperationTwo,
  OperationTwoCreateReport,
  OperationThree,
  OperationThreeCreateReport,
  UserCreatedMessage,
} from "../../components";

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
    getSubmitMsg,
    reportMsg,
    showMsgIsVisible,
  } = useAdministrativePanelSubmit();

  return (
    <MainContainer>
      {showMsgIsVisible && <UserCreatedMessage msg={reportMsg} />}
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
                onGetSubmitMsg={getSubmitMsg}
                candidateName={candidateName}
                companyName={companyName}
                newReport={report}
                onBackToSecond={backToSecond}
                onResetSteper={resetSteper}
              />
            ) : (
              <OperationThree
                onGetSubmitMsg={getSubmitMsg}
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
