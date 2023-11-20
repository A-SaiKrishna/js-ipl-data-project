/**dismiss is the function to claculate the number of ties a single player
 * dismissed by another player
 */
function dismiss(deleveries) {
  return deleveries.reduce((acc, pass) => {
    if (pass["player_dismissed"] !== "") {
      //if in particular ball player out or not
      let player = pass["player_dismissed"]; //if he is out then take name of outed playyer
      if (acc[player] === undefined) {
        acc[player] = {};
      }
      let taker = "";
      if (pass["dismissal_kind"] === "run out") {
        //if player out by runout then fielder credited with wicket
        taker = pass["fielder"];
      } else {
        taker = pass["bowler"]; // other then runout every dismisal credit goes to the bowler
      }
      if (acc[player][taker] === undefined) {
        acc[player][taker] = 0;
      }
      acc[player][taker] += 1; // incrementing the his credit
    }
    return acc;
  }, {});
}
/**this maxbybowler  give the  maxium times a batsman bowled by single bowler */
function maxbybowler(a) {
  return Object.entries(a).map((obj) => {
    //for each bowler it gives max
    let eachbatter = Object.entries(obj[1]).reduce((acc, pass) => {
      // reduce to find max value for individual
      acc = Math.max(acc, pass[1]);
      return acc;
    }, -Infinity);
    obj[1] = eachbatter; //assigning max times
    return obj;
  });
}
/*calculating the maxi disimals by using above two methods*/
function problem8(deleveries) {
  let a = dismiss(deleveries);
  let maxi = maxbybowler(a);

  return Object.entries(a).map((obj) => {
    //console.log(maxi[obj[0]]);
    let index = maxi.reduce((acc, pass) => {
      //obtaining the maxiumum value for a bowler using reduce function
      if (pass[0] === obj[0]) {
        acc = pass[1];
      }
      return acc;
    }, -1);
    let maxim = Object.entries(obj[1]).filter((subobj) => {
      //filtering only most max dissmisals
      return subobj[1] === index;
    });

    obj[1] = maxim;
    return obj;
  });
}

module.exports = problem8;
