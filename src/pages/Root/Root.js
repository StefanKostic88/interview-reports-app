import { Outlet } from "react-router";
import { Footer, MainHeader, AppContainer } from "../../components";
const Root = ({ onRefresh }) => {
  return (
    <AppContainer>
      <MainHeader onRefresh={onRefresh} />
      <Outlet />
      <Footer />
    </AppContainer>
  );
};
export default Root;
