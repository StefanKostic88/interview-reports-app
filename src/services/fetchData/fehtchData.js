import {
  generateCandidateData,
  generateCompanyData,
  generatePanelLIstInfo,
} from "../../assets/heleperFunctions/heleperFunctions";

export const fetchCandidatsData = async () => {
  const res = await fetch("http://localhost:3333/api/candidates");
  const data = await res.json();
  return data.map((candidate) => generateCandidateData(candidate));
};

export const fetchCandidateData = async (id) => {
  const idSliced = id.slice(1);
  const res = await fetch(
    `http://localhost:3333/api/candidates/?id=${idSliced}`
  );
  const data = await res.json();
  return generateCandidateData(data[0]);
};

export const fetchCompaniesData = async (id) => {
  const idSliced = id.slice(1);
  const res = await fetch(
    `http://localhost:3333/api/reports?candidateId=${idSliced}`
  );
  const data = await res.json();
  return data.map((company) => generateCompanyData(company));
};

export const fetchCompaniesDataUnsliced = async (id) => {
  const res = await fetch(
    `http://localhost:3333/api/reports?candidateId=${id}`
  );
  const data = await res.json();
  return data.map((company) => generateCompanyData(company));
};

// export const fetchSoloCompanyData = async (companyId) => {
//   const res = await fetch(
//     `http://localhost:3333/api/reports?companyId=${companyId}`
//   );
//   const data = await res.json();
//   console.log(data);
// };

export const fetchReportsData = async () => {
  const res = await fetch("http://localhost:3333/api/reports");
  const data = await res.json();
  return data.map((company) => generatePanelLIstInfo(company));
};

// export const fetchUsersData = async () => {
//   const res = await fetch("http://localhost:3333/api/users");
//   const data = await res.json();
//   console.log(data);
// };

export const searchAndSubmitSoloCandidate = async (name) => {
  const res = await fetch(
    `http://localhost:3333/api/reports?candidateName=${name}`
  );
  const data = await res.json();
  return data.map((company) => generatePanelLIstInfo(company));
};
export const searchAndSubmitSoloCompany = async (name) => {
  const res = await fetch(
    `http://localhost:3333/api/reports?companyName=${name}`
  );
  const data = await res.json();
  return data.map((company) => generatePanelLIstInfo(company));
};
