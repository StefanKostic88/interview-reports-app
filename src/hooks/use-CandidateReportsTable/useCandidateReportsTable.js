import { useReducer, useState, useEffect } from "react";

import {
  initialSortedState,
  dispatchActionTypes,
  sortedReducer,
} from "../../assets/candidateReportsTableData/candidateReportsTableData";
import {
  sortCompanyFunc,
  sortStatusFunc,
  sortDateFunc,
} from "../../assets/heleperFunctions/heleperFunctions";

const useCandidateReportsTable = (companies) => {
  const [companiesList, setCompaniesList] = useState([]);
  const [sortedState, dispatchSortedState] = useReducer(
    sortedReducer,
    initialSortedState
  );

  const sortByCompanyName = () => {
    const sorted = sortCompanyFunc(companies);
    setCompaniesList(() => [...sorted]);
    dispatchSortedState({ type: dispatchActionTypes.COMPANY_SORTED_UP });
  };
  const sortByCompanyNameReverted = () => {
    const sotrted = sortCompanyFunc(companies, false);
    setCompaniesList(() => [...sotrted]);
    dispatchSortedState({ type: dispatchActionTypes.COMPANY_SORTED_DOWN });
  };

  const sortByPassedStatus = () => {
    const sorted = sortStatusFunc(companies);
    setCompaniesList(() => [...sorted]);
    dispatchSortedState({ type: dispatchActionTypes.STATUS_SORTED_UP });
  };
  const sortByPassedStatusReverted = () => {
    const sorted = sortStatusFunc(companies, false);
    setCompaniesList(() => [...sorted]);
    dispatchSortedState({ type: dispatchActionTypes.STATUS_SORTED_DOWN });
  };

  const sortByDate = () => {
    const sorted = sortDateFunc(companies);
    setCompaniesList(() => [...sorted]);
    dispatchSortedState({ type: dispatchActionTypes.DATE_SORTED_UP });
  };
  const sortByDateReverted = () => {
    const sorted = sortDateFunc(companies, false);
    setCompaniesList(() => [...sorted]);
    dispatchSortedState({ type: dispatchActionTypes.DATE_SORTED_DOWN });
  };

  useEffect(() => {
    if (!companies) return;
    setCompaniesList(() => [...companies]);
  }, []);

  return {
    companiesList,
    sortedState,
    sortByCompanyName,
    sortByCompanyNameReverted,
    sortByPassedStatus,
    sortByPassedStatusReverted,
    sortByDate,
    sortByDateReverted,
  };
};

export default useCandidateReportsTable;
