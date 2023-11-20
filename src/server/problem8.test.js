const problem8 = require("./problem8");
describe("highest times one player has been dismissed", () => {
  test("sample ", () => {
    let obj = [
      {
        player_dismissed: "warner",
        dismissal_kind: "run out",
        fielder: "kohli",
        bowler: "shami",
      },
      {
        player_dismissed: "miller",
        dismissal_kind: "lbw",
        fielder: "",
        bowler: "bumrah",
      },
      {
        player_dismissed: "kane",
        dismissal_kind: "catch",
        fielder: "rohit",
        bowler: "jadeja",
      },
      {
        player_dismissed: "",
        dismissal_kind: "",
        fielder: "",
        bowler: "jadeja",
      },
      {
        player_dismissed: "warner",
        dismissal_kind: "wicket",
        fielder: "",
        bowler: "kohli",
      },
    ];
    expect(problem8(obj)).toEqual([
      ["warner", [["kohli", 2]]],
      ["miller", [["bumrah", 1]]],
      ["kane", [["jadeja", 1]]],
    ]);
  });
});
