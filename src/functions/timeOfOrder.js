import moment from "moment";

export const timeOfOrder = () => {
  const time = moment().add(2, "hours").format("hh:00");
  return time;
};
