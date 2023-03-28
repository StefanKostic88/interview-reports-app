import {
  generateCandidateData,
  generateCompanyData,
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

export const fetchSoloCompanyData = async (companyId) => {
  const res = await fetch(
    `http://localhost:3333/api/reports?companyId=${companyId}`
  );
  const data = await res.json();
  console.log(data);
};

export const fetchReportsData = async () => {
  const res = await fetch("http://localhost:3333/api/reports");
  const data = await res.json();
  console.log(data);
};

export const fetchUsersData = async () => {
  const res = await fetch("http://localhost:3333/api/users");
  const data = await res.json();
  console.log(data);
};
