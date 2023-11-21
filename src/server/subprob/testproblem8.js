/**this function calls the problem8 function which is used
 * calculate the strike rate of the batsman
 */
function testproblem8(problem8, deliveries) {
  let ans = problem8(deliveries);
  //output is converted into the problem8.js
  require("fs").writeFileSync(
    "/home/saikrishna/Documents/HOFIPL/src/public/output/problem8.json",
    JSON.stringify(ans),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = testproblem8;
