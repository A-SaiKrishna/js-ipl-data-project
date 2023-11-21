/**this function calls problem6 function
 * it takes the answer from it
 * and push  into the problem6.json
 */
function testproblem6(problem6, matches) {
  let ans = problem6(matches);

  require("fs").writeFileSync(
    "/home/saikrishna/Documents/HOFIPL/src/public/output/problem6.json",
    JSON.stringify(ans),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = testproblem6;
