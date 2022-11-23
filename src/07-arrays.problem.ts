interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};

/**
 * In typescript, we can declare array by 2 ways:
 * - Generic syntax: Array<number>
 * - Shorthand syntax: number[];
 * There are no difference at all.
 *
 * When use with `readonly` keyword, generic syntax will be errors: Ex: readonly Array<number> -> error
 * The following is okay: ReadonlyArray<number>.
 *
 * For me, I prefer using generic syntax. Although it looks a bit long, but it modern and easy to read.
 */
