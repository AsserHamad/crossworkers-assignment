import Searchbar from "./Searchbar/Searchbar";

import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Searchbar />
    </div>
  );
}
