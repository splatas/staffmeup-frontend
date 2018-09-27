import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { onlyTickets } from "./reducers/onlyTickets";
import { onlyCandidates } from "./reducers/onlyCandidates";
import { ticketsHistory } from "./reducers/ticketsHistory";
import { candidatesHistory } from "./reducers/candidatesHistory";

export const store = createStore(
  combineReducers({
    onlyTickets,
    onlyCandidates,
    ticketsHistory,
    candidatesHistory
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
