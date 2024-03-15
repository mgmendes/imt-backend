const { soma, multiplicacao, subtracao } = require("./calc");

test("adds 1 + 2 to equal 3", () => {
  expect(soma(1, 2)).toBe(3);
});

test("subtract 6 - 2 to equal 4", () => {
  expect(subtracao(6, 2)).toBe(4);
});

test("multiply 4 * 5 to equal 20", () => {
  expect(multiplicacao(4, 5)).toBe(20);
});
