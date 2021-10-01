// NPM Packages
import AskDetailsModal from "./AskDetailsModal";

export default function ButtonCreateTask({setModal}) {

  // Methods
  function createItem() {
    setModal(<AskDetailsModal/>);
  }

  return (
    <button className="button-main" data-testid="btn-test" onClick={() => createItem()}>
      Add a new task
    </button>
  );
}
