// Project files
import askTask from "./askTask";
import askDate from "./askDate";

export default function requestNewTask(taskID, task, date) {
  const taskDetails = askTask(task);
  if (taskDetails === null) return null;

  const taskDate = askDate(date);
  if (taskDate === null) return null;

  const newTask = {
    id: taskID,
    task: taskDetails,
    date: date,
    acquired: false
  };

  return newTask;
}
