import { TodoItemProps } from "./TodoItem.type";

import { useAppContext } from "../../../contexts";

import styles from "./TodoItem.module.scss";

export default function TodoItem({ item }: TodoItemProps) {
  const { markItemAsDone, removeItem } = useAppContext();
  const extractDateFromDateTime = (date: Date) =>
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <div className={styles.item}>
      <div
        onClick={() => markItemAsDone(item.id)}
        className={`${styles.item__done} ${
          item.done && styles.item__done__active
        }`}
      />
      <div className={styles.item__text}>
        <div>{item.text}</div>
        <div>Added on {extractDateFromDateTime(item.addedOn)}</div>
      </div>
      <div onClick={() => removeItem(item.id)} className={styles.item__image}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png"
          alt="delete"
        />
      </div>
    </div>
  );
}
