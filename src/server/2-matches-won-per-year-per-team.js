// to calculate the number of matches won by the single team in each season
function problem2(matches) {
  // reduce function used in which answer is at acc first it goes through out the macth
  // data then on each year and each team will be incrmented
  if (matches === null || Object.entries(matches).length === 0) return matches;
  return matches.reduce((acc, pass) => {
    let year = pass["season"]; //getting  the year by pass as it contains each object of match at each iteration
    let team = pass["winner"];
    if (acc[year] === undefined) {
      acc[year] = {};
    }
    if (!acc[year][team]) {
      acc[year][team] = 1;
    } else {
      // if result is not tie  then we increment on each year and on each team if it wins
      if (pass["result"] !== "tie") acc[year][team] += 1;
    }
    return acc;
  }, {});
}
// it is exporting so that it will be used in test problem2
module.exports = problem2;
