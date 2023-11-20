/*

take the function form problem3  as parametre and also updataDeeliveries as another paramater
*/
function testproblem3(problem3, updatedDeliveriesdeliveries) {
  // answer could be stored in varaiable ans
  let ans = problem3(updatedDeliveriesdeliveries);
  ///console.log(ans);
  // using writeFileSync of fs is used to create  the json file.
  require("fs").writeFileSync(
    "/home/saikrishna/Documents/HOFIPL/src/public/output/problem3.json",
    JSON.stringify(ans),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = testproblem3;
