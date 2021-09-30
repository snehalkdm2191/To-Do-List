import { sortByString, reverseSort } from "./list-sorter";

// To do
// Should throw an error if key does not exist

test("Should sort list using a key called task that is a string", () => {
  // Arrange
  const mockKey = "task";
  const mockArray = [
    { id: 3, task: "Beta"},
    { id: 1, task: "Charlie"},
    { id: 2, task: "Alfa"},
  ];
  const result = [
    { id: 2, task: "Alfa"},
    { id: 3, task: "Beta"},
    { id: 1, task: "Charlie"},
  ];
  // Act
  const test = sortByString(mockArray, mockKey);
  const testToString = JSON.stringify(test);
  const resultToString = JSON.stringify(result);

  // Assert
  expect(testToString).toEqual(resultToString);
});

test("Should reverse sort list using a key called task that is a string", () => {
  // Arrange
  const mockKey = "task";
  const mockArray = [
    { id: 2, task: "Alfa"},
    { id: 3, task: "Beta"},
    { id: 1, task: "Charlie"},
  ];
  const result = [
    { id: 1, task: "Charlie"},
    { id: 3, task: "Beta"},
    { id: 2, task: "Alfa"},
  ];
  // Act
  const test = reverseSort(mockArray, mockKey);
  const testToString = JSON.stringify(test);
  const resultToString = JSON.stringify(result);

  // Assert
  expect(testToString).toEqual(resultToString);
});
