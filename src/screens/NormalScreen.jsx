// NPM Packages
import { useState } from "react";
import { useRecoilState } from "recoil";

// Project files
import ButtonCreateTask from "../components/ButtonCreateTask";
import ButtonToggle from "../components/ButtonToggle";
import TaskList from "../components/TaskList";
import Sorter from "../components/Sorter";
import { listState } from "../state/listState";

export default function NormalScreen({setModal}) {
  // Local state
  const [showAcquired, setShowAcquired] = useState(false);

  // Global state
  const [list, setList] = useRecoilState(listState);

  // Constants
  const acquiredList = list.filter((item) => item.acquired === true);
  const pendingList = list.filter((item) => item.acquired === false);

  // Methods
  function editList(editedItem) {
    const index = list.findIndex((item) => item.id === editedItem.id);
    const clonedList = [...list];

    clonedList[index] = editedItem;
    setList(clonedList);
  }

  return (
    <div id="normal-page">
      <h1>Your To Do List</h1>

      {/* Secondary controls */}
      <Sorter />

      {/* Pending list */}
      <TaskList list={pendingList} editList={editList} />

      {/* Main controls */}
      <ButtonCreateTask setModal={setModal}/>
      <ButtonToggle
        status={showAcquired}
        onClick={() => setShowAcquired(!showAcquired)}
      />

      {/* Acquired list */}
      {showAcquired && <TaskList list={acquiredList} editList={editList} />}
    </div>
  );
}
