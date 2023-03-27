import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MainContainer } from "../../components";
import {
  fetchCandidateData,
  fetchCompaniesData,
} from "../../services/fetchData/fehtchData";

import {
  CandidateReportsInfo,
  CandidateReportsTable,
} from "../CandidateReports";

import "./CandidateReports.css";

const CandidateReports = () => {
  const { id: candidateId } = useParams();
  const [candidateInfo, setCandidateInfo] = useState(null);

  useEffect(() => {
    const getCandidateInfo = async () => {
      const info = await fetchCandidateData(candidateId);
      const candidateCompanies = await fetchCompaniesData(candidateId);

      setCandidateInfo(() => ({ ...info, companies: [...candidateCompanies] }));
    };
    getCandidateInfo();
  }, []);
  if (!candidateInfo) return;
  const { id, email, name, avatar, birthday, education, companies } =
    candidateInfo;

  return (
    <MainContainer>
      <CandidateReportsInfo
        {...{ id, email, name, avatar, birthday, education }}
      />
      <CandidateReportsTable companies={companies} />
    </MainContainer>
  );
};

export default CandidateReports;

{
  /* <div className="modal hidden">
          <button className="close-modal">&times;</button>
          <h2>Josefina Higgins</h2>
          <hr />
          <div className="modal__info">
            <article className="modal__info-data">
              <div className="modal__info-item">
                <p>Company</p>
                <h3>Google</h3>
              </div>
              <div className="modal__info-item">
                <p>Interview&nbsp;Date</p>
                <h3>22.3.2023.</h3>
              </div>
              <div className="modal__info-item">
                <p>Phase</p>
                <h3>Tech</h3>
              </div>
              <div className="modal__info-item">
                <p>Status</p>
                <h3>Passed</h3>
              </div>
            </article>
            <article className="modal__info-data">
              <div className="modal__info-item">
                <p>Notes</p>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </article>
          </div>
        </div> */
}

{
  /* <div className="overlay hidden"></div> */
}
