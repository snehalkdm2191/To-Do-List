import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../state/listState";
import requestNewTask from "../scripts/create-item/requestNewTask";

export default function AskDetailsModal() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(null);
  const [list, setList] = useRecoilState(listState);

  function onAdd() {
    if (task === null || date === null) {
      alert("Please enter valid task..");
    } else {
      const listLength = list.length + 1;
      const newTask = requestNewTask(listLength, task, date);
      if (newTask !== null) setList([...list, newTask]);
      window.location.reload();
    }
  }

  return (
    <div className="row">
      <div className="form-group">
        <label className="form-label">What's the task?</label>
        <input
          className="form-control"
          placeholder="Enter task here.."
          variant="outlined"
          size="small"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">What's the end Date for the task?</label>
        <input
          className="form-control"
          type="date"
          id="task-date"
          name="task-date"
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <div className="form-group text-center mb-3">
        <br />
        <button
          type="button"
          className="button-main"
          data-toggle="modal"
          onClick={onAdd}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
