const csv = require("csvtojson");
const fs = require("fs");
const testproblem1 = require("./test/testproblem1");
const testproblem2 = require("./test/testproblem2");
const matches = require("/home/saikrishna/Documents/HOFIPL/matches.json");
const deleveries = require("/home/saikrishna/Documents/HOFIPL/deleveries.json");
const updatingDel = require("./updatingDel");
const testproblem3 = require("./test/testproblem3");
const testproblem4 = require("./test/testproblem4");
const testproblem5 = require("./test/testproblem5");
const problem5 = require("./problem5");
const testproblem6 = require("./test/testproblem6");
const problem1 = require("./problem1");
const problem2 = require("./problem2");
const problem3 = require("./problem3");
const problem4 = require("./problem4");
const problem6 = require("./problem6");
const problem7 = require("./problem7");
const problem8 = require("./problem8");
const problem9 = require("./problem9");
const updeliveries = require("/home/saikrishna/Documents/HOFIPL/upDeleveries.json");
const testproblem7 = require("./test/testproblem7");
const testproblem8 = require("./test/testproblem8");
const testproblem9 = require("./test/testproblem9");

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
