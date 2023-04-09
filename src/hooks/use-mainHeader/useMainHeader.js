import { useParams, useLocation } from "react-router";

const useMainHeader = () => {
  const location = useLocation();
  const { id } = useParams();

  const hideLogoHandler =
    location.pathname !== "/" &&
    location.pathname !== "/panel" &&
    location.pathname !== `/candidate-reports/${id}` &&
    location.pathname !== "/panel/submit-report" &&
    location.pathname !== "/panel/create";
  const showCandidates =
    location.pathname === "/" ||
    location.pathname === "/panel" ||
    location.pathname === `/candidate-reports/${id}` ||
    location.pathname === "/panel/submit-report" ||
    location.pathname === "/panel/create";

  const showPanel =
    location.pathname === "/" ||
    location.pathname === "/panel/submit-report" ||
    location.pathname === "/panel/create";

  const showPanelSubmit = location.pathname === "/panel";

  return { hideLogoHandler, showCandidates, showPanel, showPanelSubmit };
};

export default useMainHeader;
