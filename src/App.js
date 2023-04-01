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
      setCandidatesList(() => [...data]);
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
            path={"/panel/report/:id"}
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
