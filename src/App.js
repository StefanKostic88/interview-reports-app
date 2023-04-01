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

  useEffect(() => {
    getCandidates();
  }, []);
  // console.log(candidatesList);

  // useEffect(() => {
  //   getCandidates();
  //   setIsSubmited(() => false);
  // }, [isSubmited]);

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
