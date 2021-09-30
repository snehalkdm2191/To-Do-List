// NPM Packages
import { useState } from "react";
import { useRecoilState } from "recoil";

// Project files
import { listState } from "../state/listState";
import { sortByString, reverseSort } from "../scripts/sorter/list-sorter";

export default function Sorter() {
  // Local state
  const [activeButton] = useState("");

  // Global state
  const [list, setList] = useRecoilState(listState);
  const [sortDirection, setSortDirection] = useState({ id: "down" });
   // Methods
   function sortHandler(sortType) {
    if (sortDirection[sortType] === "down") {
      setSortDirection({ [sortType]: "up" });
      setList(reverseSort(list, sortType));
    } else {
      setSortDirection({ [sortType]: "down" });
      setList(sortByString(list, sortType));
    }
  }

  return (
    <section className="sort-controls">
      <span className="label">Sort by:</span>
      <button
        className={`button-toggle ${activeButton === "task" ? "active" : ""}`}
        onClick={() => sortHandler("task")}
      >
        Task <i className={`fas fa-chevron-${sortDirection["task"]}`} />
      </button>
      <button
        className={`button-toggle ${activeButton === "date" ? "active" : ""}`}
        onClick={() => sortHandler("date")}
      >
        Date <i className={`fas fa-chevron-${sortDirection["date"]}`} />
      </button>
    </section>
  );
}
