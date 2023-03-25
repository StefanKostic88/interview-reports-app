import { useNavigate, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";

const MainHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      <nav className="nav container">
        <Link to={"/"} className="nav__logo">
          <span>Interview Reports</span>
        </Link>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item" onClick={() => navigate("/")}>
              <button className="nav__link active btn">
                <span>
                  <MdPeopleAlt />
                </span>
                <span className="nav__name">Candidates</span>
              </button>
            </li>
            {location.pathname !== "/panel" && (
              <li className="nav__item" onClick={() => navigate("/panel")}>
                <span className="nav__name">Administrative Panle</span>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
