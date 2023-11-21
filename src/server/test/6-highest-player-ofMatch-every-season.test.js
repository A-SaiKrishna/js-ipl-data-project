const problem6 = require("../6-highest-player-ofMtach-every-season");
describe("highest player of match", () => {
  test("sample data", () => {
    let obj = [
      { season: "2023", player_of_match: "kohli" },
      { season: "2023", player_of_match: "rohit" },
      { season: "2023", player_of_match: "rohit" },
      { season: "2023", player_of_match: "kohli" },
      { season: "2023", player_of_match: "kl" },
    ];
    expect(problem6(obj)).toEqual({
      2023: [
        ["kohli", 2],
        ["rohit", 2],
      ],
    });
  });
});
