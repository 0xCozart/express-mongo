const sum = require("./mock");

// <expect> returns an "expectation" object,
// matchers are called to "expectiation" objects,
// the result from the "match" will either pass or fail the test.
// <.toBe()> uses Object.is to test exact equality.
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// <.toEqual> recursively checks the values of an Object or an Array.
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// <.not.<matcher>> checks for the opposite of the <.matcher>.
test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
