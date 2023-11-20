/*
we need to calculate the extra runs by each team in the year 2016
*/
function problem3(deleveries) {
  if (deleveries === null || Object.entries(deleveries).length === 0)
    return deleveries;
  //deleveries contain the year as "season" and we use reduce function.

  return deleveries.reduce((acc, pass) => {
    // checking weather season is 2016

    if (pass["season"] === "2016") {
      //if it season 2016 then take the team variable in which we store the name of batting team
      let team = pass["batting_team"];
      //if there is no key of team in ans intialise with 0
      if (acc[team] === undefined) {
        acc[team] = 0; //Number(pass["extra_runs"]);
      }
      // add the extra runs.
      acc[team] += Number(pass["extra_runs"]);
    }
    return acc;
  }, {});
}
module.exports = problem3;
