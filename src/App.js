import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Root, Home, CandidateReports, AdministrativePanel } from "./pages";
import { AdministrativePanelList } from "./components";
import {
  fetchCandidatsData,
  fetchReportsData,
} from "./services/fetchData/fehtchData";

const App = () => {
  const [candidatesList, setCandidatesList] = useState([]);
  useEffect(() => {
    const getCandidates = async () => {
      const data = await fetchCandidatsData();
      setCandidatesList(() => [...data]);
    };
    getCandidates();
  }, []);

  const [reports, setReports] = useState(null);

  useEffect(() => {
    const getReportsData = async () => {
      const data = await fetchReportsData();

      setReports(() => [...data]);
    };

    getReportsData();
  }, []);

  if (!reports) return <div>Loading...</div>;

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
          <Route path={"/panel"} element={<AdministrativePanel />}>
            {/* <Route
              path={"/panel"}
              element={<AdministrativePanelList />}
            ></Route>
            <Route path={"/panel/:id"}></Route> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
