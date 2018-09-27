export class Dates {
  static parseDate(date) {
    return date !== "" && (date !== null && date !== undefined)
      ? date.split("T")[0]
      : "- -";
  }
}
