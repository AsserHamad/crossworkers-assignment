import { ChangeEvent, FunctionComponent, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";

const defaultItems = Array.from(
  { length: 20 },
  (_, index) => `Item ${index + 1}`
);

const Task4: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [items] = useState(defaultItems);
  const [visibleItems, setVisibleItems] = useState(defaultItems);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.currentTarget.value;
    setInputValue(inputText);
    const regex = new RegExp(`${inputText}`, "g");
    setVisibleItems(items.filter((item) => regex.test(item)));
  };
  return (
    <div>
      <Input value={inputValue} onChange={onInputChange} />
      <br />
      <List items={visibleItems} />
    </div>
  );
};

export default Task4;
