/* 
testproblem2 calls problem2 function which give data in which
each year each team won or not 
*/

function testproblem2(problem2, matches) {
  //takes two arguments one is problem function and another is match data
  //Answer was stored in ans variable
  const ans = problem2(matches);
  //console.log(ans);
  // this answer is diverted into the public/output folder using fs.
  require("fs").writeFileSync(
    "/home/saikrishna/Documents/HOFIPL/src/public/output/problem2.json",
    JSON.stringify(ans),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = testproblem2;
