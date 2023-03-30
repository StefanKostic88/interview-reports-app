import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import {
  MainContainer,
  AdministrativePanelList,
  AdminstrativePanelOperations,
  OperationOne,
  OperationTwo,
  OperationThree,
} from "../../components";

import {
  fetchCandidatsData,
  fetchCandidateData,
  fetchReportsData,
} from "../../services/fetchData/fehtchData";

const AdministrativePanel = () => {
  // const [reports, setReports] = useState(null);

  // useEffect(() => {
  //   const getReportsData = async () => {
  //     const data = await fetchReportsData();

  //     setReports(() => [...data]);
  //   };

  //   getReportsData();
  // }, []);

  // if (!reports) return <div>Loading...</div>;

  return (
    <MainContainer>
      <section class="container section" id="home">
        <div class="home">
          <form action="" class="search__form" id="contact-form">
            <div class="search__form-div">
              <label class="search__form-tag">Search</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Search..."
                class="search__form-input"
                id="contact-name"
              />
            </div>
          </form>
        </div>
      </section>
      <section class="section container" id="operation">
        {/* <AdminstrativePanelOperations>
          <OperationOne />
          <OperationTwo />
          <OperationThree />
        </AdminstrativePanelOperations> */}
        {/* <AdministrativePanelList reportsData={reports} /> */}

        <Outlet />
      </section>
    </MainContainer>
  );
};

export default AdministrativePanel;
