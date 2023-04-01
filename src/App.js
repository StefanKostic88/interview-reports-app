import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import {
  Root,
  Home,
  CandidateReports,
  AdministrativePanelReports,
  AdnministrativePanelSubmit,
} from "./pages";

import { fetchCandidatsData } from "./services/fetchData/fehtchData";

const App = () => {
  const [candidatesList, setCandidatesList] = useState([]);
  useEffect(() => {
    const getCandidates = async () => {
      const data = await fetchCandidatsData();

      const dataAddedFalseIsActive = data.map((el) => ({
        ...el,
        isActive: false,
      }));
      setCandidatesList(() => [...dataAddedFalseIsActive]);
    };
    getCandidates();
  }, []);

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Root />}>
          <Route
            path={"/"}
            element={<Home candidatesList={candidatesList} />}
          />
          <Route
            path={"/candidate-reports/:id"}
            element={<CandidateReports />}
          />
          <Route path={"/panel"} element={<AdministrativePanelReports />} />
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
