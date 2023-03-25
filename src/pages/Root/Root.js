import { Outlet } from "react-router";
import { Footer, MainHeader, AppContainer } from "../../components";
const Root = () => {
  return (
    <AppContainer>
      <MainHeader />
      <Outlet />
      <Footer />
    </AppContainer>
  );
};
export default Root;
