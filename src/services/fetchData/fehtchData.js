export const fetchCandidatsData = async () => {
  const res = await fetch("http://localhost:3333/api/candidates");
  const data = await res.json();
  return data;
};

export const fetchCompaniesData = async () => {
  const res = await fetch("http://localhost:3333/api/companies");
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
