const fetchCandidatsData = async () => {
  const res = await fetch("http://localhost:3333/api/candidates");
  const data = await res.json();
  console.log(data);
};

const fetchCompaniesData = async () => {
  const res = await fetch("http://localhost:3333/api/companies");
  const data = await res.json();
  console.log(data);
};

const fetchReportsData = async () => {
  const res = await fetch("http://localhost:3333/api/reports");
  const data = await res.json();
  console.log(data);
};

const fetchUsersData = async () => {
  const res = await fetch("http://localhost:3333/api/users");
  const data = await res.json();
  console.log(data);
};
