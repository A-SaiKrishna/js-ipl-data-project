function poms(matches) {
  /**player of match is to calculate the
   * in each year how many times each player of match is calculated
   * we use reduce function in each it gives output year and pom and his count
   */
  return matches.reduce((acc, pass) => {
    let year = pass["season"];
    let pom = pass["player_of_match"];
    if (acc[year] === undefined) {
      acc[year] = {};
    } //intialisng for each year
    if (acc[year][pom] === undefined) {
      acc[year][pom] = 0; //if player selected for pom then intialise with 0
    }

    acc[year][pom] += 1; //if we got pom in that year then he will get the incrementesd his pom in that year
    return acc;
  }, {});
}
function maxis(poms) {
  /**this function is to calulate the maximum pom got by single player count
   * it takes output of previous function outout
   * uses reduce function to do  soo
   */
  return Object.entries(poms).reduce((acc, pass) => {
    let year = pass[0];
    let max = Object.entries(pass[1]).reduce((acc, pas) => {
      acc = Math.max(pas[1], acc);
      return acc;
    }, 0);
    acc[year] = max; //each ear with it max pom
    return acc;
  }, {});
}

function problem6(matches) {
  let pom = poms(matches); //it is the data of the each season and each player
  let maxi = maxis(pom); //in each max pom got by single player
  //return poms;
  return Object.entries(pom).reduce((acc, pass) => {
    //this functoion is too calculate the number of player each season got or reched the maximum poms
    let year = pass[0];
    let arr = Object.entries(pass[1]).filter((obj) => {
      // this filter function is to take the bowlers whose pom is max
      if (obj[1] === maxi[year]) {
        return true;
      }
      return false;
    });
    acc[year] = arr; // finally array of pom of each is pushed into the acc
    return acc; //answer would be stored in the acc and that is returned
  }, {});
}

module.exports = problem6;
