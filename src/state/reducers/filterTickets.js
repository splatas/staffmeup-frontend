const filterTicketsState = {
  filtered: [],
  project: "",
  profile: "",
  seniority: " "
};

export const filterTickets = (state = filterTicketsState, action) => {
  switch (action.type) {
    case "FILTER_TICKETS":
      return { ...state, [action.name]: action.value };

    case "FILTERED_TICKETS":
      return { ...state, filtered: action.value };

    default:
      return state;
  }
};
