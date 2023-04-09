export const initialSortedState = {
  companyIsSortedUp: true,
  dateIsSorted: true,
  statusIsSorted: true,
};

export const dispatchActionTypes = {
  COMPANY_SORTED_UP: "sort company up",
  COMPANY_SORTED_DOWN: "sort company down",
  STATUS_SORTED_UP: "sort by passed status up",
  STATUS_SORTED_DOWN: "sort by passed status down",
  DATE_SORTED_UP: "sort by date up",
  DATE_SORTED_DOWN: "sort by date down",
};

export const sortedReducer = (state, action) => {
  switch (action.type) {
    case dispatchActionTypes.COMPANY_SORTED_UP:
      return {
        companyIsSortedUp: false,
        dateIsSorted: true,
        statusIsSorted: true,
      };
    case dispatchActionTypes.COMPANY_SORTED_DOWN:
      return initialSortedState;
    case dispatchActionTypes.STATUS_SORTED_UP:
      return {
        statusIsSorted: false,
        companyIsSortedUp: true,
        dateIsSorted: true,
      };
    case dispatchActionTypes.STATUS_SORTED_DOWN:
      return initialSortedState;
    case dispatchActionTypes.DATE_SORTED_UP:
      return {
        dateIsSorted: false,
        statusIsSorted: true,
        companyIsSortedUp: true,
      };
    case dispatchActionTypes.DATE_SORTED_DOWN:
      return initialSortedState;
    default:
      return initialSortedState;
  }
};
