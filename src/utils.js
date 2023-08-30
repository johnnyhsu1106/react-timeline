const utils = {
  DAY_IN_SECONDS:  1000 * 60 * 60 * 24,

  getformattedDate (date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      return {
        ymd: '',
        md: ''
      }
    }

    return {
      ymd: `${year}/${month}/${day}`,
      md: `${month}/${day}`
    }
  }
}

export default utils;