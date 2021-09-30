// Project files
import requestNewTask from "./requestNewTask";

// _askPrice
test("Should return a valid item if the user sends valid information", () => {
  // Arrange
  const mockId = 1;
  const mockTask = "Yoga";
  const mockDate = "2021-09-06";

  const result = {
    id: 1,
    task: "Yoga",
    date:"2021-09-06",
    acquired: false
  };

  // Act
  const test = requestNewTask(mockId,mockTask,mockDate);

  // Assert
  expect(test).toStrictEqual(result);
});
