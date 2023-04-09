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
