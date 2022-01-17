import { findPrefixCount } from "./strings";

describe("strings", () => {
  describe("findPrefixCount", () => {
    describe("finds matches", () => {
      it("gets correct count all the same", () => {
        expect(findPrefixCount([
          "hello",
          "hello",
          "hello",
          "hello",
        ], true)).toBe(5);
      });
      it("gets correct count for hello prefix", () => {
        expect(findPrefixCount([
          "hello world",
          "hello mother",
          "hello father",
          "hello!",
        ], true)).toBe(5);
      });
      it("gets zero when nothing matches", () => {
        expect(findPrefixCount([
          "cat",
          "dog",
          "rat",
        ], true)).toBe(0);
      });
      it("returns 0 when only given a single string", () => {
        expect(findPrefixCount([
          "by myself",
        ], true)).toBe(0);
      });
      it("returns 0 when given no strings", () => {
        expect(findPrefixCount([], true)).toBe(0);
      });
      it("is case sensitive", () => {
        expect(findPrefixCount([
          "Hello",
          "HELLO",
          "Hello",
        ], true)).toBe(1);
      });
      it("is correctly case-insensitive", () => {
        expect(findPrefixCount([
          "Hello",
          "HELLO",
          "Hello",
        ], false)).toBe(5);
      });
    });
  });
});
