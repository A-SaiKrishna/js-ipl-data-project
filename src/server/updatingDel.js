function updatingDel(matches, deleveries) {
  let idYear = matches.reduce((acc, pss) => {
    let id = pss["id"];
    let year = pss["season"];
    acc[id] = year;
    return acc;
  }, {});
  let upd = deleveries.map((obj) => {
    obj["season"] = idYear[obj["match_id"]];
    return obj;
  });
  require("fs").writeFileSync(
    "/home/saikrishna/Documents/HOFIPL/upDeleveries.json",
    JSON.stringify(upd),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = updatingDel;
