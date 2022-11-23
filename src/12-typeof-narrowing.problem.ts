import { expect, it } from "vitest";

const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === "number") {
    return amount;
  }

  return amount.amount;
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});

/**
 * The typeof operator returns a string indicating the type of the operand's value. (According MDN web docs)
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * I think this docs above provide all information, no need to explain more.
 */
