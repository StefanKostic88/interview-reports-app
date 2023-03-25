import { useNavigate } from "react-router";

const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1400px",
          background: "white",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div>
          <h3>Interview Reports</h3>
        </div>
        <ul>
          <li>
            <button onClick={() => navigate("/")}>Candidates</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
