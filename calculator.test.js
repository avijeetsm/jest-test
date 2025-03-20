/**
 * Tests for calculator.js
 */

const calculator = require('./calculator');

describe('Calculator module', () => {
  describe('add function', () => {
    test('adds two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('handles negative numbers', () => {
      expect(calculator.add(-1, -2)).toBe(-3);
      expect(calculator.add(-5, 10)).toBe(5);
    });

    test('handles zero', () => {
      expect(calculator.add(0, 0)).toBe(0);
      expect(calculator.add(0, 5)).toBe(5);
    });
  });

  describe('subtract function', () => {
    test('subtracts two positive numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('handles negative numbers', () => {
      expect(calculator.subtract(-1, -2)).toBe(1);
      expect(calculator.subtract(-5, 10)).toBe(-15);
    });

    test('handles zero', () => {
      expect(calculator.subtract(0, 0)).toBe(0);
      expect(calculator.subtract(5, 0)).toBe(5);
    });
  });

  describe('multiply function', () => {
    test('multiplies two positive numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('handles negative numbers', () => {
      expect(calculator.multiply(-1, -2)).toBe(2);
      expect(calculator.multiply(-5, 10)).toBe(-50);
    });

    test('handles zero', () => {
      expect(calculator.multiply(0, 5)).toBe(0);
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide function', () => {
    test('divides two positive numbers correctly', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test('handles negative numbers', () => {
      expect(calculator.divide(-6, -3)).toBe(2);
      expect(calculator.divide(-6, 3)).toBe(-2);
    });

    test('handles zero as numerator', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test('throws error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
});
