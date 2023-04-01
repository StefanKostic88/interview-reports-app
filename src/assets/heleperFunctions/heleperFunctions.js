const convertDate = (date) => {
  return new Date(date).toLocaleString("SR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export const convertWordToUpperCase = (str) => {
  return str
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
};

export const generateCandidateData = ({
  avatar,
  birthday,
  education,
  email,
  id,
  name,
}) => ({
  avatar,
  birthday: convertDate(birthday),
  education,
  email,
  id,
  name,
});

export const generateCompanyData = ({
  candidateId,
  candidateName,
  companyId,
  companyName,
  id,
  interviewDate,
  note,
  phase,
  status,
}) => ({
  candidateId,
  candidateName,
  companyId,
  companyName,
  id,
  interviewDate: convertDate(interviewDate),
  note,
  phase,
  status,
});

export const generatePanelLIstInfo = ({
  candidateName,
  candidateId,
  interviewDate,
  status,
  companyName,
  companyId,
}) => ({
  candidateName,
  candidateId,
  interviewDate: convertDate(interviewDate),
  status,
  companyName,
  companyId,
});
