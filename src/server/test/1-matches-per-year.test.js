const problem1 = require("../1-matches-per-year");
describe("problem1", () => {
  test("returns an empty object for empty input", () => {
    const matches = {};
    const answer = problem1(matches);
    expect(answer).toEqual(matches);
  });

  test("returns a null for a null", () => {
    const matches = null;
    const answer = problem1(matches);
    expect(answer).toBeNull();
  });

  test("calculates the number of matches played by each team", () => {
    const matches = [
      { season: "2023", team: "Bangalore" },
      { season: "2022", team: "Hyderabad" },
      { season: "2022", team: "Chennai" },
      { season: "2022", team: "Bangalore" },
      { season: "2023", team: "Hyderabad" },
      { season: "2023", team: "Chennai" },
      { season: "2022", team: "Chennai" },
    ];

    const result = problem1(matches);

    expect(result).toEqual({
      2023: 3,
      2022: 4,
    });
  });
});
