import moment from "moment";

const getDateToday = () => {
  return moment().format("YYYY-MM-DD");
};

export { getDateToday };
