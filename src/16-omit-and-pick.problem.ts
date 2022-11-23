import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

// type MyType = Omit<User, "id">;
type MyType = Pick<User, "firstName" | "lastName">;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];

/**
 * Typescript provider Pick and Omit to create new data type from exist type.
 * In addition, Typescript also have many utility types, follow link below.
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 */
