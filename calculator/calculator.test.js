import { expect, test } from "vitest";
import { calculate } from "/calculator.js";

test('addition test', () => {
 expect(calculate ('+', 9, 10)).toBe(19)
})
