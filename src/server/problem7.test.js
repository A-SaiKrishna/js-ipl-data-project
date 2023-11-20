const problem7 = require("./problem7");
describe("strike rate of a batsman", () => {
  test("sample data", () => {
    let obj = [
      {
        season: "2023",
        batsman: "kohli",
        total_runs: "3",
        wide_runs: "0",
        noball_runs: "0",
      },
      {
        season: "2023",
        batsman: "kohli",
        total_runs: "4",
        wide_runs: "0",
        noball_runs: "1",
      },
      {
        season: "2022",
        batsman: "kohli",
        total_runs: "1",
        wide_runs: "1",
        noball_runs: "0",
      },
      {
        season: "2022",
        batsman: "kohli",
        total_runs: "1",
        wide_runs: "0",
        noball_runs: "0",
      },
    ];
    expect(problem7(obj)).toEqual([
      ["2022", [["kohli", "100.00"]]],
      ["2023", [["kohli", "700.00"]]],
    ]);
  });
});
