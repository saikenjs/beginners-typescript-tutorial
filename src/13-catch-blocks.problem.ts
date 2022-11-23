import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});

/**
 * In catch block, default type is `unknown`, we need handle this to get error message.
 * In almost case, I using `instanceof` operator.
 *
 * I found a post I think it helpful for everyone:
 * https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
 */
