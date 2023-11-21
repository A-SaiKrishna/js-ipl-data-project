const csv = require("csvtojson");
const fs = require("fs");
const matches = require("/home/saikrishna/Documents/HOFIPL/matches.json");
const deleveries = require("/home/saikrishna/Documents/HOFIPL/deleveries.json");
const updatingDel = require("./src/server/updatingDel");
const updeliveries = require("/home/saikrishna/Documents/HOFIPL/upDeleveries.json");

//answers called by another functions
const testproblem1 = require("./src/server/subprob/testproblem1");
const testproblem2 = require("./src/server/subprob/testproblem2");
const testproblem3 = require("./src/server/subprob/testproblem3");
const testproblem4 = require("./src/server/subprob/testproblem4");
const testproblem5 = require("./src/server/subprob/testproblem5");
const testproblem6 = require("./src/server/subprob/testproblem6");
const testproblem7 = require("./src/server/subprob/testproblem7");
const testproblem8 = require("./src/server/subprob/testproblem8");
const testproblem9 = require("./src/server/subprob/testproblem9");

//each problem answer.
const problem1 = require("./src/server/1-matches-per-year");
const problem2 = require("./src/server/2-matches-won-per-year-per-team");
const problem3 = require("./src/server/3-extra-runs-per-team-2016");
const problem4 = require("./src/server/4-top-10-eco-bowlers-2015");
const problem5 = require("./src/server/5-team-won-toss-match");
const problem6 = require("./src/server/6-highest-player-ofMtach-every-season");
const problem7 = require("./src/server/7-strike-rate-batsman-each-season");
const problem8 = require("./src/server/8-one-player-dismissed-another");
const problem9 = require("./src/server/9-bowler-best-eco-super-overs");

function cstojson() {
  /**here we  update the deleveries json file by updating the season for each ball */
  updatingDel(matches, deleveries);
  //converting the matches csv file to json file using csvtojson library

  csv()
    .fromFile("/home/saikrishna/Documents/HOFIPL/src/data/matches.csv")
    .then((obj) =>
      fs.writeFileSync(
        "/home/saikrishna/Documents/HOFIPL/matches.json",
        JSON.stringify(obj),
        "utf-8",
        (err) => console.log(err)
      )
    );
  //deliveries json created as folows

  csv()
    .fromFile("/home/saikrishna/Documents/HOFIPL/src/data/deliveries.csv")
    .then((obj) =>
      fs.writeFileSync(
        "/home/saikrishna/Documents/HOFIPL/deleveries.json",
        JSON.stringify(obj),
        "utf-8",
        (err) => console.log(err)
      )
    );
}
//formating deliveries
cstojson();
//problems
//writing output of problem1.js
testproblem1(problem1, matches);

//writing output of problem2.js
testproblem2(problem2, matches);

//problem-3 function
testproblem3(problem3, updeliveries);

//problem-4 function
testproblem4(problem4, updeliveries);

//problem-5 function
testproblem5(problem5, matches);

//problem-6 function
testproblem6(problem6, matches);

//problem-7
testproblem7(problem7, updeliveries);

//problem-8
testproblem8(problem8, deleveries);

//problem-9
testproblem9(problem9, deleveries);
