// Project files
import TaskItem from "./TaskItem";

export default function TaskList({ list, editList }) {
  // Components
  const List = list.map((item) => (
    <TaskItem key={item.id} item={item} editList={editList} />
  ));

  return (
    <section className="shopping-list">
      {list.length > 0 ? List : <p>No task to show...</p>}
    </section>
  );
}
