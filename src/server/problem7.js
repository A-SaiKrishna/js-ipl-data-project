/**fun function used to get the each batsman's details how much score he scored
 * and how much balls he faced
 * it return the object contains year as key and value contains batter and his details
 */
function fun(deleveries) {
  return deleveries.reduce((acc, pass) => {
    let year = pass["season"];
    let batsman = pass["batsman"];
    if (acc[year] === undefined) acc[year] = {}; //intialising year
    if (acc[year][batsman] === undefined) acc[year][batsman] = [0, 0]; //initialising the batsman
    acc[year][batsman][0] += Number(pass["total_runs"]); //Adding the runs he scored on particular ball
    if (pass["wide_runs"] === "0" && pass["noball_runs"] === "0")
      acc[year][batsman][1] += 1; //adding the ball if and only if ball is not a wide or noball
    if (Number(pass["wide_runs"]) === "1") acc[year][batsman] -= 1; //if it is a wide ball then we need to decrease the run 1 as it is given as penality for wide
    return acc;
  }, {});
}
/**problem 7 function takes the output of fun and
 * it divide the runns by balls and product of 100
 * after that we cut it for two decimals.
 */
function problem7(deleveries) {
  let a = fun(deleveries);
  return Object.entries(a).map((obj) => {
    let b = Object.entries(obj[1]).map((obj2) => {
      //map function used to calculate the
      obj2[1] = ((obj2[1][0] / obj2[1][1]) * 100).toFixed(2); //strike rate calculation
      return obj2;
    });
    obj[1] = b;
    return obj;
    //console.log(obj[1]);
    // return (obj[1][player] = ((b[1][0] / b[1][1]) * 100).toFixed(2));
  });
}
module.exports = problem7;
