import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import {
  Root,
  Home,
  CandidateReports,
  AdministrativePanelReports,
  AdnministrativePanelSubmit,
  CreateReport,
} from "./pages";

import { fetchCandidatsData } from "./services/fetchData/fehtchData";

const App = () => {
  const [candidatesList, setCandidatesList] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);
  const [resetInputSignal, setResetInputSignal] = useState(false);

  const registerSubmit = () => {
    setIsSubmited(() => true);
  };
  const getCandidates = async () => {
    const data = await fetchCandidatsData();

    const dataAddedFalseIsActive = data.map((el) => ({
      ...el,
      isActive: false,
    }));
    setCandidatesList(() => [...dataAddedFalseIsActive]);
  };

  const refresh = () => {
    setCandidatesList(() => []);
    getCandidates();
    setResetInputSignal(() => true);
  };

  useEffect(() => {
    getCandidates();
  }, []);

  useEffect(() => {
    getCandidates();
    setIsSubmited(() => false);
  }, [isSubmited]);
  useEffect(() => {
    setResetInputSignal(() => false);
  }, [resetInputSignal]);

  return (
    <>
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
        </Route>
      </Routes>
    </>
  );
};

export default App;
