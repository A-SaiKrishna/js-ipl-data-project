/**here it takes the problem7 as function
 * updated deliveries as a data
 */
function testproblem7(problem7, updeliveries) {
  const ans = problem7(updeliveries);
  //redirecting the output to the file named at problem7.js
  require("fs").writeFileSync(
    "/home/saikrishna/Documents/HOFIPL/src/public/output/problem7.json",
    JSON.stringify(ans),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
//using the module exports to import it to the index.js
module.exports = testproblem7;
