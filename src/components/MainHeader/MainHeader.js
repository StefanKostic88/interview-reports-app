import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";

const MainHeader = () => {
  const navigate = useNavigate();
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
                {/* <i className="bx bx-home-alt nav__icon"></i> */}
                <span>
                  <MdPeopleAlt />
                </span>
                <span className="nav__name">Candidates</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
