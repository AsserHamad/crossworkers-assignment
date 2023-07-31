import { ChangeEvent, FunctionComponent, useState } from "react";

const Task2: FunctionComponent = () => {
  const [value, setValue] = useState("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value);

  return (
    <div>
      <label>Controlled Input:</label>
      <input onChange={onInputChange} />
      <br />
      <br />
      <p>{value}</p>
    </div>
  );
};

export default Task2;
