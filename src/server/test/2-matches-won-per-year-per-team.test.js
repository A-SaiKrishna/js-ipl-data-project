const problem2 = require("../2-matches-won-per-year-per-team");
describe("problem2", () => {
  test("null or not", () => {
    expect(problem2(null)).toBeNull();
  });
  test("empty object or not", () => {
    expect(problem2({})).toEqual({});
  });
  test("sample icc ", () => {
    let icc = [
      { season: "2022", winner: "India", result: "normal" },
      { season: "2022", winner: "Australia", result: "normal" },
      { season: "2022", winner: "India", result: "tie" },
      { season: "2022", winner: "India", result: "normal" },
    ];
    expect(problem2(icc)).toEqual({
      2022: {
        India: 2,
        Australia: 1,
      },
    });
  });
});
