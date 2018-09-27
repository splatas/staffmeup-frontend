import { fetchURL } from "../../fetchURL";

export const fetchOnlyCandidatesRequest = () => ({
  type: "ONLYCANDIDATES_REQUEST"
});

export const fetchOnlyCandidatesSuccess = data => ({
  type: "ONLYCANDIDATES_SUCCESS",
  data
});

export const fetchOnlyCandidatesError = () => ({
  type: "ONLYCANDIDATES_ERROR"
});

const fetchOnlyCandidatesURL = () => {
  const url = `${fetchURL}/candidate/getcandidatesview`;

  return fetch(url).then(response => response.json());
};

export function fetchOnlyCandidates() {
  return dispatch => {
    dispatch(fetchOnlyCandidatesRequest());

    return fetchOnlyCandidatesURL().then(data =>
      dispatch(fetchOnlyCandidatesSuccess(data))
    );
  };
}
