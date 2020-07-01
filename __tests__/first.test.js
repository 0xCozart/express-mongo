const letterCount = require("..");

test("letterCount works with regular strings", () => {
  expect(letterCount("awesome", "e")).toBe(2);
});

test("arithmetic", () => {
  expect(4 + 4).toBeGreaterThan(7);
  expect(4 + 4).toBeLessThan(9);
});

test("refrence", () => {
  var arr = [1, 2, 3];
  expect(arr).toEqual([1, 2, 3]);
  expect(arr).not.toBe([1, 2, 3]);
  expect(arr).toContain(1);
});
