import { Link, useLocation } from "react-router-dom";

const MainHeader = ({ onRefresh }) => {
  const location = useLocation();

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div>
          <Link to={"/"} className="nav__logo" onClick={() => onRefresh()}>
            Interviews Reports
          </Link>
        </div>
        <div className="links-gap">
          {location.pathname === "/" && (
            <>
              <Link to={"/"} className="btn-alt">
                Candidates
              </Link>
              <Link to={"/panel"} className="btn-alt">
                Panels
              </Link>
            </>
          )}

          {(location.pathname === "/panel/submit-report" ||
            location.pathname === "/panel/create") && (
            <>
              <Link to={"/"} className="btn-alt">
                Candidates
              </Link>

              <Link to={"/panel"} className="btn-alt">
                Panels
              </Link>
            </>
          )}

          {location.pathname === "/panel" && (
            <>
              <Link to={"/panel"} className="btn-alt">
                Reports
              </Link>
              <Link to={"/panel/submit-report"} className="btn-alt">
                Create Report
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
