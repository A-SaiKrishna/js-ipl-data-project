/* this function is too calculate the toss winner and the winner of match thorught the ipl*/
function problem5(matches) {
  //matches data contains the keys names toss_winneer and winnner
  return matches.reduce((acc, pass) => {
    if (pass["toss_winner"] === pass["winner"] && pass["result"] !== "tie") {
      //we need wether match win or tie using the key "result"
      if (acc[pass["winner"]] === undefined) acc[pass["winner"]] = 0; //intialising
      acc[pass["winner"]] += 1; //if condition is true winner key value get incremeted by one
    }
    return acc;
  }, {});
}
module.exports = problem5;
