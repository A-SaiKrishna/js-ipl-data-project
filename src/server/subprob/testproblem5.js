function testproblem5(problem5, matches) {
  //this function takes problem5 function and matches
  let ans = problem5(matches);

  ans["Rising Pune Supergiant"] += ans["Rising Pune Supergiants"]; // due to addition of s to the team rising pune supergiant there is duplication so we
  //added one of its value to it
  // we delete the that extra key value pair
  delete ans["Rising Pune Supergiants"];
  // answer given to the problem5.json
  require("fs").writeFileSync(
    "/home/saikrishna/Documents/HOFIPL/src/public/output/problem5.json",
    JSON.stringify(ans),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
// thin problem is exported to index
module.exports = testproblem5;
