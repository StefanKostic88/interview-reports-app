import { Link } from "react-router-dom";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div>
          <Link to={"/"} className="nav__logo">
            Interviews Reports
          </Link>
        </div>
        <div>
          <Link to={"/"} className="btn-alt">
            Candidates
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
