import Todos from "./Todos";

import { AppContextProvider } from "./contexts";

import styles from "./App.module.scss";

export default function App() {
  return (
    <AppContextProvider>
      <div className={styles.container}>
        <Todos />
      </div>
    </AppContextProvider>
  );
}
