import { useState, ChangeEvent } from "react";

import { useAppContext } from "../../contexts";

export default function useMainTodosService() {
  const { visibleItems, addItem } = useAppContext();
  const [value, setValue] = useState("");

  const pendingItems = visibleItems.filter((item) => !item.done);
  const doneItems = visibleItems.filter((item) => item.done);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  const onBlur = () => {
    addItem(value);
    setValue("");
  };

  return {
    value,
    pendingItems,
    doneItems,
    onInputChange,
    onBlur,
  };
}
