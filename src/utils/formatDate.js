import moment from "moment";
/* Function Header
 *
 * function to format dates
 * @author Peter Walton
 * @param  {UTCDateString}
 * @return {string}
 */
export function formatDate(UTCDateString) {
  return moment(UTCDateString).format("DD MMM yyyy - hh:mm");
}

export function pickerDate(UTCDateString) {
  return moment(UTCDateString).format("DD/MM/yyyy hh:mm");
}

export function timePart(UTCDateString) {
  return moment(UTCDateString).format("hh:mm");
}

// var now  = "04/09/2013 15:00:00";
// var then = "02/09/2013 14:20:30";

// var ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
// var d = moment.duration(ms);
// var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

// // outputs: "48:39:30"
