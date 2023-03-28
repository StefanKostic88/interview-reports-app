const convertDate = (date) => {
  return new Date(date).toLocaleString("SR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
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
