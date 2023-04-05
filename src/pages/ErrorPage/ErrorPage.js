import React from "react";
import { MainContainer } from "../../components";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <div
        style={{
          minHeight: "38rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Error: 404</h1>
        <h2
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            color: "#1055CC",
          }}
          onClick={() => navigate("/")}
        >
          Go to Home Page
        </h2>
      </div>
    </MainContainer>
  );
};

export default ErrorPage;
