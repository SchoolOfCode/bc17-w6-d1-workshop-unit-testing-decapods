import { expect, test } from "vitest";
import { calculate } from "/calculator.js";

test('addition test', () => {
 expect(calculate ('+', 9, 10)).toBe(19)
})

test('subtraction test', () => {
    expect(calculate('-', 4, 6)).toBe(-2)
})

test('multiplication test', () => {
    expect(calculate('*', -6, -8)).toBe(48)
})

test('division test', () => {
    expect(calculate('/', 121, 11)).toBe(11)
})

test('square test', () => {
    expect(calculate('sq', 5)).toBe(25)
})

test('square test 2', () => {
    expect(calculate('sq', 3, 44)).toBe(9)
})

test('error test 1', () => {
    expect(calculate('%', 124, 56)).toBe(1)
})

test('error test 2', () => {
    expect(calculate('🍕', -41414, 2)).toBe(1)
})