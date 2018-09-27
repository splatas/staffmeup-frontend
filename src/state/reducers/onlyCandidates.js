export const onlyCandidates = (state = { data: [] }, action) => {
  switch (action.type) {
    case "ONLYCANDIDATES_REQUEST":
      return state;

    case "ONLYCANDIDATES_SUCCESS":
      return { ...state, data: action.data };

    case "ONLYCANDIDATES_ERROR":
      return state;

    default:
      return state;
  }
};
