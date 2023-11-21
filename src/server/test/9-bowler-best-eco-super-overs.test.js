const problem9 = require("../9-bowler-best-eco-super-overs");
describe("super or not", () => {
  test("sample", () => {
    let obj = [
      {
        is_super_over: "1",
        bowler: "bhuvi",
        total_runs: "2",
        wide_runs: "0",
        noball_runs: "0",
      },
      {
        is_super_over: "1",
        bowler: "bhuvi",
        total_runs: "6",
        wide_runs: "0",
        noball_runs: "0",
      },
      {
        is_super_over: "0",
        bowler: "harshal",
        total_runs: "4",
        wide_runs: "0",
        noball_runs: "0",
      },
      {
        is_super_over: "1",
        bowler: "bhuvi",
        total_runs: "1",
        wide_runs: "1",
        noball_runs: "0",
      },
      {
        is_super_over: "1",
        bowler: "bhuvi",
        total_runs: "1",
        wide_runs: "0",
        noball_runs: "1",
      },
    ];
    expect(problem9(obj)).toEqual([["bhuvi", "4.29"]]);
  });
});
