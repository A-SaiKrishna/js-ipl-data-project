/* to calculate the  economy of the bowler in the year so we are using the concept of high order functions 
and first we calculate number of balls he balled and the number of runs given*/
function problem4(deleveries) {
  // creating ballPlusScore variable in which it contains bowler in the season 2015
  //and their runs given and balls they bowled
  let ballplusScore = deleveries.reduce((acc, pass) => {
    if (pass["season"] === "2015") {
      //checking if the season is 2015 or not
      let bowler = pass["bowler"];
      if (acc[bowler] === undefined) {
        acc[bowler] = [0, 0]; // intialising it with array in which 0 th index is runs and 1 th index is balls faced
      }
      acc[bowler][0] += Number(pass["total_runs"]); //incrementin total runs for each object of deleveries i.e each ball
      if (pass["noball_runs"] === "0" && pass["wide_runs"] === "0") {
        acc[bowler][1] += 1; // if ball is not a noball and the wide ball we need to calculate the balls just increment.
      }
    }
    return acc; //return this 2d array value to bowler key of answer
  }, {});
  return Object.entries(ballplusScore).reduce((acc, pass) => {
    let bowler = pass[0];
    let over = pass[1][1] / 6 + (pass[1][1] % 6); //calculating the economy of the bowler by using the simple calculation
    let result = (pass[1][0] / over).toFixed(2); //making the result to fix to the last two decimal points
    acc[bowler] = Number(result); //pushing the value of economy rate to the key as bowler name.

    return acc;
  }, {});
}

//exporting the function so that it can be calculated by the testproblem4
module.exports = problem4;
