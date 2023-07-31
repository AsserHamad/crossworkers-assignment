import useSearchbarService from "./Searchbar.service";

import styles from "./Searchbar.module.scss";

export default function Searchbar() {
  const { onInputChange } = useSearchbarService();
  return (
    <input
      className={styles.searchbar}
      onInput={onInputChange}
      placeholder="Search..."
    />
  );
}
