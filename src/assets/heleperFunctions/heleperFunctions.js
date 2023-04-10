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
  id,
}) => ({
  candidateName,
  candidateId,
  interviewDate: interviewDate ? convertDate(interviewDate) : null,
  status,
  companyName,
  companyId,
  id,
});

export const generateReports = ({
  candidateName,
  companyName,
  interviewDate,
  phase,
  status,
  note,
  companyId,
  candidateId,
}) => {
  return {
    candidateId,
    candidateName,
    companyId,
    companyName,
    interviewDate,
    phase,
    status,
    note,
  };
};

export const generateUser = (name, email, birthday, education) => {
  return {
    name,
    email,
    birthday,
    education,
    // "avatar": "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png",
    // "id": 84852315
  };
};

export const updateReport = ({
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
  candidateName,
  companyName,
  candidateId,
  companyId,
  id,
  interviewDate,
  note,
  phase,
  status,
});

export const createRerport = ({
  candidateId,
  candidateName,
  companyId,
  companyName,
  // id,
  interviewDate,
  note,
  phase,
  status,
}) => ({
  candidateName,
  companyName,
  candidateId,
  companyId,
  // id,
  interviewDate,
  note,
  phase,
  status,
});

export const sortCompanyFunc = (arr, sortUp = true) => {
  if (sortUp) {
    return arr.sort((a, b) => {
      if (a.companyName < b.companyName) {
        return -1;
      }
    });
  } else {
    return arr.sort((a, b) => {
      if (a.companyName > b.companyName) {
        return -1;
      }
    });
  }
};
export const sortStatusFunc = (arr, sortUp = true) => {
  if (sortUp) {
    return arr.sort((a, b) => {
      if (a.status < b.status) {
        return -1;
      }
    });
  } else {
    return arr.sort((a, b) => {
      if (a.status > b.status) {
        return -1;
      }
    });
  }
};

export const sortDateFunc = (arr, sortUp = true) => {
  if (sortUp) {
    return arr.sort((a, b) => {
      if (a.interviewDate < b.interviewDate) {
        return -1;
      }
    });
  } else {
    return arr.sort((a, b) => {
      if (a.interviewDate > b.interviewDate) {
        return -1;
      }
    });
  }
};

export const getDate = (date) => {
  let day = +date.split(".")[0];
  let month = +date.split(".")[1];
  const year = +date.split(".")[2];

  if (month.toString().length === 1) {
    month = "0" + month;
  }
  if (day.toString().length === 1) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
};
