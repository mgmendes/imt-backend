const { soma, multiplicacao, subtracao, divisao } = require("./calc");

test("adds 1 + 2 to equal 3", () => {
  expect(soma(1, 2)).toBe(3);
});

test("subtract 6 - 2 to equal 4", () => {
  expect(subtracao(6, 2)).toBe(4);
});

test("multiply 4 * 5 to equal 20", () => {
  expect(multiplicacao(4, 5)).toBe(20);
});

test("divide 10 / 2 to equal 5", () => {
  expect(divisao(10, 2)).toBe(5);
});
