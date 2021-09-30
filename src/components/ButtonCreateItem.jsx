// NPM Packages
import AskDetailsModal from "../components/AskDetailsModal";

export default function ButtonCreateItem({setModal}) {

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
