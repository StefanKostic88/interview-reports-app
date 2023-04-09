// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import {
  Root,
  Home,
  CandidateReports,
  AdministrativePanelReports,
  AdnministrativePanelSubmit,
  CreateReport,
  ErrorPage,
  Loading,
} from "./pages";
import { useRootPage } from "./hooks";
import { fetchCandidatsData } from "./services/fetchData/fehtchData";
import { useLocation } from "react-router";

const App = () => {
  // const { pathname } = useLocation();
  const {
    list: candidatesList,
    resetInputSignal,
    registerSubmit,
    refresh,
    firstLoad,
  } = useRootPage(fetchCandidatsData);

  return (
    <>
      {firstLoad ? (
        <Loading />
      ) : (
        <Routes>
          <Route path={"/"} element={<Root onRefresh={refresh} />}>
            <Route
              path={"/"}
              element={
                <Home
                  candidatesList={candidatesList}
                  onResetInput={resetInputSignal}
                />
              }
            />
            <Route
              path={"/candidate-reports/:id"}
              element={<CandidateReports />}
            />

            <Route path={"/panel"} element={<AdministrativePanelReports />} />
            <Route
              path={"/panel/create"}
              element={<CreateReport onRegistersubmit={registerSubmit} />}
            />
            <Route
              path={"/panel/submit-report"}
              element={
                <AdnministrativePanelSubmit candidatesList={candidatesList} />
              }
            />
            <Route path={"*"} element={<ErrorPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
