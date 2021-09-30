// Project files
import askDate, { _isEmpty } from "./askDate";

// askDate
test("should pass on the first time", () => {
  // Arrange
  const mockValue = "2021-09-06";
  const result = "2021-09-06";

  // Act
  const test = askDate(mockValue);

  // Assert
  expect(test).toBe(result);
});

test("should return null", () => {
  // Arrange
  const result = null;
  const mockValue = "";

  // Act
  const test = askDate(mockValue);

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

// _isEmpty
test("Should be false when string is not empty", () => {
  // Arrange
  const value = "2021-09-06";
  const result = false;

  // Act
  const test = _isEmpty(value);

  // Assert
  expect(test).toBe(result);
});

