/*
we are using high order function 
to calculate the number of matches played by the team*/
function problem1(matches) {
  if (matches === null || Object.entries(matches).length === 0) return matches;
  return matches.reduce((acc, pass) => {
    let year = pass["season"];
    if (acc[year]) {
      acc[year] += 1; //  using for loop to check if year key present in the acc if it increment it
    } else acc[year] = 1; // otherwise u need to intialise it .
    return acc;
  }, {}); // acc will be returned so it contains year as key and number of matches as argument
}
module.exports = problem1;
