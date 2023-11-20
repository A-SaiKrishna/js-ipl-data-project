function testproblem9(problem9, deliveries) {
  let ans = problem9(deliveries);
  //console.log(ans);
  const result = ans.reduce((acc, pass) => {
    // using the reduce function to calculate the max one
    if (Number(acc[1]) > Number(pass[1])) {
      acc = pass;
    }
    return acc;
  });
  //console.log(ans1);
  // this fs used to wroite the output into the problem9.json file
  require("fs").writeFileSync(
    "/home/saikrishna/Documents/HOFIPL/src/public/output/problem9.json",
    JSON.stringify(result),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = testproblem9;
