import TodoItem from "./TodoItem";

import useMainTodosService from "./MainTodosView.service";

import styles from "./MainTodosView.module.scss";

export default function MainTodosView() {
  const { doneItems, pendingItems, onBlur, onInputChange, value } =
    useMainTodosService();
  return (
    <div className={styles.todos}>
      <div className={styles.todos__title}>Crossworkers Todo List</div>
      <div className={styles.todos__input}>
        <input
          value={value}
          onBlur={onBlur}
          onChange={onInputChange}
          placeholder="Input your todo here..."
        />
      </div>
      <div className={styles.todos__list}>
        {pendingItems.map((item) => (
          <TodoItem item={item} key={item.id} />
        ))}
      </div>
      <div className={styles.todos__list}>
        {doneItems.map((item) => (
          <TodoItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
