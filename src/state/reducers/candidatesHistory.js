export const candidatesHistory = (state = { data: [] }, action) => {
  switch (action.type) {
    case "CANDIDATESHISTORY_REQUEST":
      return state;

    case "CANDIDATESHISTORY_SUCCESS":
      return { ...state, data: action.data };

    case "CANDIDATESHISTORY_ERROR":
      return state;

    default:
      return state;
  }
};
