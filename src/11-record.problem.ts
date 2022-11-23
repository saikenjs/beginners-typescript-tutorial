import { expect, it } from "vitest";

const createCache = () => {
  const cache: Record<string, string> = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});

/**
 * Typescript provide Record<T, V> type, it like object.
 * We can pass type of key and value to generic arguments
 *
 * Typescript also have Map, it looks very similar.
 * But, I find some difference between Record and Map in Google.
 * https://stackoverflow.com/questions/18541940/map-vs-object-in-javascript
 */
