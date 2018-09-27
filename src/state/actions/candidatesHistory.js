import { fetchURL } from "../../fetchURL";

export const fetchCandidatesHistoryRequest = () => ({
  type: "CANDIDATESHISTORY_REQUEST"
});

export const fetchCandidatesHistorySuccess = data => ({
  type: "CANDIDATESHISTORY_SUCCESS",
  data
});

export const fetchCandidatesHistoryError = () => ({
  type: "CANDIDATESHISTORY_ERROR"
});

const fetchCandidatesHistoryURL = () => {
  const url = `${fetchURL}/candidatehistory/getall`;
  
  return fetch(url).then(response => response.json());
};

export function fetchCandidatesHistory() {
  return dispatch => {
    dispatch(fetchCandidatesHistoryRequest());

    return fetchCandidatesHistoryURL().then(data =>
      dispatch(fetchCandidatesHistorySuccess(data))
    );
  };
}
