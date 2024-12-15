import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: " asdads hello  world  ",
    expected: ["asdads", "hello", "world"],
  },
  {
    input: "a b c d",
    expected: ["a", "b", "c", "d"],
  },
  {
    input: "CHARMANDER is THE best",
    expected: ["charmander", "is", "the", "best"],
  },
  {
    input: "Pikachu is kinda mean to ash",
    expected: ["pikachu", "is", "kinda", "mean", "to", "ash"],
  },
])("cleanInput(%j)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
