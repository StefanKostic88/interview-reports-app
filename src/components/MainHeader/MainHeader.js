import { Link } from "react-router-dom";
import { useMainHeader } from "../../hooks";

const MainHeader = ({ onRefresh }) => {
  const { hideLogoHandler, showCandidates, showPanel, showPanelSubmit } =
    useMainHeader();
  window.scrollTo(0, 0);
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div>
          {hideLogoHandler ? (
            <div className="nav__logo">Interviews Reports-404</div>
          ) : (
            <Link to={"/"} className="nav__logo" onClick={() => onRefresh()}>
              Interviews Reports
            </Link>
          )}
        </div>
        <div className="links-gap">
          {showCandidates && (
            <Link to={"/"} className="btn-alt">
              Candidates
            </Link>
          )}
          {showPanel && (
            <Link to={"/panel"} className="btn-alt">
              Panels
            </Link>
          )}
          {showPanelSubmit && (
            <Link to={"/panel/submit-report"} className="btn-alt">
              Create Report
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
