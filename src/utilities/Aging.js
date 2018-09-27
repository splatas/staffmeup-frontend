export class Aging {
  static parseDate(date) {
    return Math.abs(Date.parse(date)) / 1000 / 86400;
  }

  static calc(updateDate, startDate) {
    const calculation = Math.floor(
      this.parseDate(updateDate) - this.parseDate(startDate)
    );
    return !isNaN(calculation) ? calculation : "";
  }

  static validation(number) {
    if (number > 0 || isNaN(number)) {
      return false;
    } else if (number <= 0) {
      return true;
    }
  }
}
