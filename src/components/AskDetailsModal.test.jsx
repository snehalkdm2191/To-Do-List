// Project files
import requestNewTask from "../scripts/create-item/requestNewTask";

test("Should open modal and add new task", () => {
  // Arrange
  const fakeTask = {
    id: 1,
    task: "singing class",
    date: "2021-09-04",
    acquired: false,
  };

  const task = "Yoga";
  const date = "2021-09-06";
  const result = [
    {
      id: 1,
      task: "singing class",
      date: "2021-09-04",
      acquired: false,
    },
    {
      id: 2,
      task: "Yoga",
      date: "2021-09-06",
      acquired: false,
    },
  ];

  // Act
  const newTask = requestNewTask(2, task, date);
  const fakeList = [fakeTask, newTask];

  // Assert
  expect(fakeList).toStrictEqual(result);
});
