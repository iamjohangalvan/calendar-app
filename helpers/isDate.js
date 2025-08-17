const moment = require('moment');

const isDate = (value, rest) => {
  if (!value) {
    return false;
  }
  const fecha = moment(value);
  if (fecha.isValid()) {
    return true;
  } else {
    return false;
  }
  // console.log(value);
  // console.log(rest);
  // const date = new Date(value);
  // return !isNaN(date.getTime());
};

module.exports = {
  isDate
};
