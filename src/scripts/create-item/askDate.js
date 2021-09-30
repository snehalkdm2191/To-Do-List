export default function askDate(taskDate) {

    do {
      // guard if user press escape or clicks on the cancel button on the popup window
      if (taskDate === "" || taskDate === null) return null;
  
    } while (_isEmpty(taskDate));
  
    return taskDate;
  }
  
  export function _isEmpty(string) {
    const taskString = string === undefined ? '' : string;
    return taskString === "" ? true : false;
  }
  