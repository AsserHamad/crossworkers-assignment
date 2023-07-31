import { ChangeEvent, FunctionComponent, useState } from "react";

const defaultItems = Array.from(
  { length: 20 },
  (_, index) => `Item ${index + 1}`
);

const Task3: FunctionComponent = () => {
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
      <label>Search Input: </label>
      <input value={inputValue} onChange={onInputChange} />
      <br />
      <br />
      {visibleItems.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default Task3;
