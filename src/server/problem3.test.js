const problem3 = require("./problem3");
describe("extra runs", () => {
  test("for empty input", () => {
    expect(problem3({})).toEqual({});
  });
  test("if input was null", () => {
    expect(problem3(null)).toBe(null);
  });
  test("running against sample data", () => {
    let dele = [
      { season: "2016", batting_team: "India", extra_runs: "2" },
      { season: "2017", batting_team: "India", extra_runs: "2" },
      { season: "2016", batting_team: "Australia", extra_runs: "12" },
      { season: "2016", batting_team: "Australia", extra_runs: "1" },
    ];
    expect(problem3(dele)).toEqual({
      India: 2,
      Australia: 13,
    });
  });
});
