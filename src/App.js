import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Root, Home, CandidateReports, AdministrativePanel } from "./pages";
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
          <Route path={"/panel"} element={<AdministrativePanel />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
