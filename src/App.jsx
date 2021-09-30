// NPM Packages
import { useEffect,useState } from "react";
import { useRecoilState } from "recoil";

// Project files
import NormalScreen from "./screens/NormalScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import Modal from "./components/Modal";
import STORAGE_KEY from "./scripts/storageKey";
import { listState } from "./state/listState";
import "./css/style.css";

export default function App() {
  // Global state
  const [list, setList] = useRecoilState(listState);
  // Local state
  const [modal, setModal] = useState(null);

  // Methods
  function loadData(storageKey, setList) {
    const data = localStorage.getItem(storageKey);
    const parsedData = JSON.parse(data) ?? [];

    setList(parsedData);
  }

  function saveData(storageKey, list) {
    const stringifyList = JSON.stringify(list);

    localStorage.setItem(storageKey, stringifyList);
  }

  useEffect(() => loadData(STORAGE_KEY, setList), []);
  useEffect(() => saveData(STORAGE_KEY, list), [list]);

  return (
    <div className="App">

      {list.length === 0 ? <WelcomeScreen setModal={setModal} /> : <NormalScreen setModal={setModal} />}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
