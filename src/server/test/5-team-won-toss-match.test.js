const problem5 = require("../5-team-won-toss-match");
describe("tosswinner and winner same", () => {
  test("sample data", () => {
    let dat = [
      { winner: "India", toss_winner: "India", result: "normal" },
      { winner: "Austarlia", toss_winner: "India", result: "tie" },
      { winner: "India", toss_winner: "India", result: "normal" },
    ];
    expect(problem5(dat)).toEqual({ India: 2 });
  });
});
