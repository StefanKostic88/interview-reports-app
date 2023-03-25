const MainContainer = ({ children }) => {
  console.log(children);
  return (
    <main
      style={{
        padding: "1rem",
        background: "rgba(0, 0, 0, 0.25)",
        maxWidth: "1400px",
        margin: "0 auto",
        minHeight: "90vh",
      }}
    >
      {children}
    </main>
  );
};

export default MainContainer;
