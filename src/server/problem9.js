/**this function  calculates the
 * if it is a super over
 * then runs given and balls bowled
 */
function fun(deleveries) {
  return deleveries.reduce((acc, pass) => {
    let bowler = pass["bowler"]; //getting bowler name
    if (pass["is_super_over"] === "1") {
      // if it is a super over
      if (acc[bowler] === undefined) {
        acc[bowler] = [0, 0]; //initialising the  each bowler with zeroes
      }
      acc[bowler][0] += Number(pass["total_runs"]); //0th index with runs given
      if (!(pass["wide_runs"] !== "0" && pass["noball_runs"] !== "0")) {
        // ball is counted if and only if it is not wide and noball
        acc[bowler][1] += 1;
      }
    }
    return acc;
  }, {});
}
function problem9(deleveries) {
  let supe = fun(deleveries);
  return Object.entries(supe).map((obj) => {
    //using map to make it economy as value of bowler(key)
    let runs = obj[1][0];
    let balls = obj[1][1];
    let overs = balls / 6 + (balls % 6);
    obj[1] = (runs / overs).toFixed(2);
    //console.log(obj);
    return obj;
  });
}
//importing the problem9 function
module.exports = problem9;
