import { formatTime } from "./styling";

describe("styling", () => {
  describe("formatTime", () => {
    describe("works correctly with 60 limit", () => {
      it("should format 65.32210101 to 1:05.322", () => {
        expect(formatTime(65.32210101, 60)).toBe("1:05.322");
      });

      it("should format 3.2009101 to 3.201", () => {
        expect(formatTime(3.2009101, 60)).toBe("3.201");
      });

      it("should format 50 to 50.000", () => {
        expect(formatTime(50, 60)).toBe("50.000");
      });

      it("should format 60 to 1:00.00", () => {
        expect(formatTime(60, 60)).toBe("1:00.000");
      });
    });
    describe("works correctly with 70 limit", () => {
      it("should format 65.32210101 to 65.322", () => {
        expect(formatTime(65.32210101, 70)).toBe("65.322");
      });

      it("should format 73.2009101 to 1:13.201", () => {
        expect(formatTime(73.2009101, 70)).toBe("1:13.201");
      });

      it("should format 50 to 50.000", () => {
        expect(formatTime(50, 70)).toBe("50.000");
      });

      it("should format 70 to 1:10.00", () => {
        expect(formatTime(70, 70)).toBe("1:10.000");
      });
    });
    describe("works correctly with 50 limit", () => {
      it("should format 65.32210101 to 1:05.322", () => {
        expect(formatTime(65.32210101, 50)).toBe("1:05.322");
      });

      it("should format 73.2009101 to 1:13.201", () => {
        expect(formatTime(73.2009101, 50)).toBe("1:13.201");
      });

      it("should format 50 to 0:50.00", () => {
        expect(formatTime(50, 50)).toBe("0:50.000");
      });
    });
  });
});
