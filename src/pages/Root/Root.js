import { Outlet } from "react-router";
import { Footer, MainHeader } from "../../components";
const Root = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  );
};
export default Root;
