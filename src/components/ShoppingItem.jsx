// Project files
import Checkbox from "./Checkbox";

export default function ShoppingItem({ item, editList }) {
  // Constants
  const { task, date, acquired } = item;

  // Methods
  function editItem(key, editedValue) {
    const editedItem = { ...item };

    editedItem[key] = editedValue;
    editList(editedItem);
  }

  return (
    <article className={`shopping-item ${acquired && "checked"}`}>
      <Checkbox
        checked={acquired}
        onChange={() => editItem("acquired", !acquired)}
      />
      <span className="name">{task}</span>
      <span className="spacer"></span>
      <p className="price">{date}</p>
    </article>
  );
}
