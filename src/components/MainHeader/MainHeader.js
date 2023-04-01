import { Link, useLocation } from "react-router-dom";

const MainHeader = () => {
  const location = useLocation();

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div>
          <Link to={"/"} className="nav__logo">
            Interviews Reports
          </Link>
        </div>
        <div>
          {location.pathname !== "/panel" && (
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
              <Link to={"/panel"} className="btn-alt">
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

// {location.pathname === "/panel" && (

//   )}

// {location.pathname !== "/panel" && (

//   )}
