const problem5 = require("./problem5");
describe("tosswinner and winner same", () => {
  test("sample data", () => {
    let dat = [
      { winner: "India", toss_winner: "India", result: "normal" },
      { winner: "Austarlia", toss_winner: "India", result: "tie" },
      { winner: "India", toss_winner: "India", result: "normal" },
    ];
    expect(problem5(dat)).toEqual({ India: 1 });
  });
});
