import { fetchURL } from "../../fetchURL";

export const fetchTicketsHistoryRequest = () => ({
  type: "TICKETSHISTORY_REQUEST"
});

export const fetchTicketsHistorySuccess = data => ({
  type: "TICKETSHISTORY_SUCCESS",
  data
});

export const fetchTicketsHistoryError = () => ({
  type: "TICKETSHISTORY_ERROR"
});

const fetchTicketsHistoryURL = () => {
  const url = `${fetchURL}/tickethistory/getall`;

  return fetch(url).then(response => response.json());
};

export function fetchTicketsHistory() {
  return dispatch => {
    dispatch(fetchTicketsHistoryRequest());

    return fetchTicketsHistoryURL().then(data =>
      dispatch(fetchTicketsHistorySuccess(data))
    );
  };
}
