export const ticketsHistory = (state = { data: [] }, action) => {
  switch (action.type) {
    case "TICKETSHISTORY_REQUEST":
      return state;

    case "TICKETSHISTORY_SUCCESS":
      return { ...state, data: action.data };

    case "TICKETSHISTORY_ERROR":
      return state;

    default:
      return state;
  }
};
