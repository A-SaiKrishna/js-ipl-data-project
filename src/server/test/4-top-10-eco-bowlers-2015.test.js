const problem4 = require("../4-top-10-eco-bowlers-2015");
describe("top 10 economical bowlers", () => {
  test("sample test case against indian bowlers", () => {
    let bow = [
      {
        season: "2015",
        bowler: "harbajan",
        total_runs: "2",
        noball_runs: "0",
        wide_runs: "0",
      },
      {
        season: "2016",
        bowler: "shami",
        total_runs: "1",
        noball_runs: "0",
        wide_runs: "0",
      },
      {
        season: "2015",
        bowler: "shami",
        total_runs: "2",
        noball_runs: "0",
        wide_runs: "0",
      },
      {
        season: "2015",
        bowler: "shami",
        total_runs: "1",
        noball_runs: "0",
        wide_runs: "1",
      },
      {
        season: "2016",
        bowler: "shami",
        total_runs: "1",
        noball_runs: "1",
        wide_runs: "0",
      },
    ];
    expect(problem4(bow)).toEqual({
      harbajan: 1.71,
      shami: 2.57,
    });
  });
});
