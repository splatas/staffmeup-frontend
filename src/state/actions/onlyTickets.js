import { fetchURL } from "../../fetchURL";

export const fetchOnlyTicketRequest = () => ({
  type: "ONLYTICKETS_REQUEST"
});

export const fetchOnlyTicketSuccess = data => ({
  type: "ONLYTICKETS_SUCCESS",
  data
});

export const fetchOnlyTicketError = () => ({
  type: "ONLYTICKETS_ERROR"
});

const fetchOnlyTicketsURL = () => {
  // const url = `${fetchURL}/ticket/getonlytickets`;
  const url = `${fetchURL}/tickethistory/getthelastupdate`;

  return fetch(url).then(response => response.json());
};

export function fetchOnlyTickets() {
  return dispatch => {
    dispatch(fetchOnlyTicketRequest());

    return fetchOnlyTicketsURL().then(data =>
      dispatch(fetchOnlyTicketSuccess(data))
    );
  };
}
