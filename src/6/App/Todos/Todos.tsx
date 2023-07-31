import MainTodosView from "./MainTodosView";
import Sidebar from "./Sidebar";

import styles from "./Todos.module.scss";

export default function Todos() {
  return (
    <div className={styles.todos}>
      <Sidebar />
      <MainTodosView />
    </div>
  );
}
