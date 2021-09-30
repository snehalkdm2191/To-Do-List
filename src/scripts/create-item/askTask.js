export default function askTask(task) {

  do {
    // guard if user press escape or clicks on the cancel button on the popup window
    if (task === "" || task === null) return null;

    // parse the user input
    task = _parseString(task);
  } while (_isEmpty(task));

  return task;
}

export function _parseString(string) {
  const taskString = string.trim() === undefined ? '' : string.trim();
  return taskString !== "" ? taskString : "";
}

export function _isEmpty(string) {
  const taskString = string === undefined ? '' : string.trim();
  return taskString === "" ? true : false;
}
