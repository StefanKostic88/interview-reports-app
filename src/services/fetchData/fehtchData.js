import {
  generateCandidateData,
  generateCompanyData,
  generatePanelLIstInfo,
  generateReports,
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
  console.log(data);
  return data.map((company) => generateCompanyData(company));
};

export const fetchReportsData = async () => {
  const res = await fetch("http://localhost:3333/api/reports");
  const data = await res.json();
  console.log(data);
  return data.map((company) => generatePanelLIstInfo(company));
};

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

export const fetchCandidateDataUnsliced = async (id) => {
  const res = await fetch(`http://localhost:3333/api/candidates/?id=${id}`);
  const data = await res.json();
  return generateCandidateData(data[0]);
};

// export const generateNameAndReports = async () => {
//   const res = await fetch("http://localhost:3333/api/candidates");
//   const data = await res.json();
//   const res1 = await fetch("http://localhost:3333/api/companies");
//   const data1 = await res1.json();

//   const { id: candidateId, name: candidateName } = data.at(-1);
//   const { id: companyId, name: companyName } = data1.at(-1);
//   const obj = {
//     candidateId,
//     candidateName,
//     companyId,
//     companyName,
//   };
//   console.log(obj);
// };
// getIdOfLast();

export const postUser = async (user) => {
  await fetch(`http://localhost:3333/api/candidates`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const postReport = async (report) => {
  await fetch(`http://localhost:3333/api/reports`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(report),
  });
};

export const getCompanyIdAndName = async (companyName) => {
  const res = await fetch(`http://localhost:3333/api/companies`);
  const data = await res.json();
  return data.find((company) => company.name === companyName);
};

export const generateAndPostReport = async (
  companyNameInput,
  candidateStatusInput,
  candidatePhaseInput,
  candidateNotesInput,
  interviewDateInput
) => {
  const { id: companyId, name: companyName } = await getCompanyIdAndName(
    companyNameInput
  );
  const res = await fetch("http://localhost:3333/api/candidates");
  const data = await res.json();
  const { name: candidateName, id: candidateId } = data.at(-1);

  const newVal = {
    candidateName,
    candidateId,
    companyId,
    companyName,
    phase: candidatePhaseInput,
    status: candidateStatusInput,
    note: candidateNotesInput,
    interviewDate: interviewDateInput,
  };

  const newReport = generateReports(newVal);

  postReport(newReport);
};

export const fetchSoloReportAndUpdate = async (id, obj) => {
  await fetch(`http://localhost:3333/api/reports/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
};

export const deleteReports = async (id) => {
  await fetch(`http://localhost:3333/api/reports/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteCandidate = async (id) => {
  await fetch(`http://localhost:3333/api/candidates/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
