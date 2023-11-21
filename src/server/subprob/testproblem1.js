/*number of matches per season calculated at problem1
is being called from here and answer saved at public/output in json file*/
function testproblem1(problem1, matches) {
  //takes two arguments in which one is function from problem1 and the other is matches data
  //answer is saved in yearObject var.
  const yearObject = problem1(matches);
  //console.log(yearObject);
  // to write the outpuut in problem1.json we used fs library and an function called writeFileSync
  //which takes argumenrs as location of file where it need to save and stringifying it character code and if err consoling it
  require("fs").writeFileSync(
    "/home/saikrishna/Documents/HOFIPL/src/public/output/problem1.json",
    JSON.stringify(yearObject),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
//to use this function at index file of our  projrct as it contains only one function exporting directly by its name
module.exports = testproblem1;
