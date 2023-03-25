const fetchCandidatsData = async () => {
  const res = await fetch("http://localhost:3333/api/candidates");
  const data = await res.json();
  console.log(data);
};
