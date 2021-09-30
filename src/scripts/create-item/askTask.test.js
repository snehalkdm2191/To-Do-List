// Project files
import askTask, { _isEmpty, _parseString } from "./askTask";

// askTask
test("should pass on the first time", () => {
  // Arrange
  const mockValue = "Yoga";
  const result = "Yoga";

  // Act
  const test = askTask(mockValue);

  // Assert
  expect(test).toBe(result);
});

// askTask
test("should return null if string is empty", () => {
  // Arrange
  const mockValue = "";
  const result = null;

  // Act
  const test = askTask(mockValue);

  // Assert
  expect(test).toBe(result);
});

// askTask
test("should return null if string is empty", () => {
  // Arrange
  const mockValue = "   ";
  const result = null;

  // Act
  const test = askTask(mockValue);

  // Assert
  expect(test).toBe(result);
});

// askTask
test("should return the value without extra spaces", () => {
  // Arrange
  const mockValue = "  Yoga  ";
  const result = "Yoga";

  // Act
  const test = askTask(mockValue);

  // Assert
  expect(test).toBe(result);
});

// _parseString
test("Should return the string back withouth alterations", () => {
  // Arrange
  const value = "Yoga";
  const result = "Yoga";

  // Act
  const test = _parseString(value);

  // Assert
  expect(test).toBe(result);
});

test("Should return the string back withouth extra spaces", () => {
  // Arrange
  const value = "   Yoga   "; // the string has on purpose 3 spaces before and after
  const result = "Yoga";

  // Act
  const test = _parseString(value);

  // Assert
  expect(test).toBe(result);
});

test("Should return the empty string withouth alterations", () => {
  // Arrange
  const value = ""; // the string has on purpose 3 spaces before and after
  const result = "";

  // Act
  const test = _parseString(value);

  // Assert
  expect(test).toBe(result);
});

test("Should return the empty string withoutg extra spaces", () => {
  // Arrange
  const value = "   "; // the string has on purpose only 3 empty spaces
  const result = "";

  // Act
  const test = _parseString(value);

  // Assert
  expect(test).toBe(result);
});

// _isEmpty
test("Should be true when string is empty", () => {
  // Arrange
  const value = "";
  const result = true;

  // Act
  const test = _isEmpty(value);

  // Assert
  expect(test).toBe(result);
});

test("Should be false when string is not empty", () => {
  // Arrange
  const value = "Yoga";
  const result = false;

  // Act
  const test = _isEmpty(value);

  // Assert
  expect(test).toBe(result);
});

