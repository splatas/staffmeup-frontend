export const filterTickets = (name, value) => ({
  type: "FILTER_TICKETS",
  name,
  value
});

export const filteredTickets = value => ({
  type: "FILTERED_TICKETS",
  value
});
