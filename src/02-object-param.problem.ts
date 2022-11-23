import { expect, it } from "vitest";

// type Args = { first: number; second: number };
interface Args {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: Args) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});

/**
 * Clearly define object type. We can using `type` or `interface`.
 * Difference between `type` and `interface`:
 * - We only use primitive type when using `type`. Ex: type Name = string
 * - When you want using tuple, we must use `type`. Ex: type Coordinate = [number, number]
 * - We can only use union with `type`. Ex: type Animal = Dog | Cat
 * - We can merge `interface`, but `type` cannot.
 */
