/* economy rate of each bowler in the year 2015 was found in problem4 and it can be calculated here*/
function testproblem4(problem4, updeliveries) {
  let bowlers = problem4(updeliveries); //economy of every bowler is here in the variable bowlers
  // console.log(bowlers);
  let bowlersArray = Object.entries(bowlers); // answer in the form of objects so we conver it into the array
  bowlersArray.sort((a, b) => a[1] - b[1]); //we sort the resulted array based on the economy rate of the bower
  //console.log(bowlersArray);
  let top10Array = bowlersArray.slice(0, 10); //slice function used take the top 10 elements
  //console.log(top10Array);
  //anser in the top10Array variable and it can be written the file called problem.josn in the locatin public/outut
  require("fs").writeFileSync(
    "/home/saikrishna/Documents/HOFIPL/src/public/output/problem4.json",
    JSON.stringify(top10Array),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = testproblem4;
