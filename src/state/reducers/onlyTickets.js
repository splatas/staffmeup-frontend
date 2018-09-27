export const onlyTickets = (state = { data: [] }, action) => {
  switch (action.type) {
    case "ONLYTICKETS_REQUEST":
      return state;

    case "ONLYTICKETS_SUCCESS":
      return { ...state, data: action.data };

    case "ONLYTICKETS_ERROR":
      return state;

    default:
      return state;
  }
};
