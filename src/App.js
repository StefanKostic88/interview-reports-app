import { Route, Routes } from "react-router";
import { Root, Home, CandidateReports } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Root />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/candidate-reports"} element={<CandidateReports />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
