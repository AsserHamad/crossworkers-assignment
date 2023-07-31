// Style
import { ChangeEvent, FunctionComponent, useState } from "react";

import styles from "./index.module.scss";

const Task5: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputFields = [
    {
      label: "Email",
      value: email,
      onChange: setEmail,
      type: "text",
    },
    {
      label: "Password",
      value: password,
      onChange: setPassword,
      type: "password",
    },
  ];

  const onSubmit = () => {
    // If you want to do something with form submit

    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id={styles["task-5"]}>
      <div className={styles.container}>
        <div className={styles.container__block}>
          <div className={styles.container__form}>
            <form onSubmit={onSubmit}>
              <div className={styles.form__title}>
                <span>Welcome Back</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicin.</span>
              </div>
              {inputFields.map((field) => (
                <InputElement key={field.label} {...field} />
              ))}
              <button>Login</button>
            </form>
          </div>
          <div className={styles.container__background} />
        </div>
      </div>
    </div>
  );
};

const InputElement = ({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (text: string) => void;
  type?: string;
}) => {
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(event.currentTarget.value);
  return (
    <div className={styles.form__field}>
      <label>{label}</label>
      <input name={type} type={type} onChange={onInputChange} value={value} />
    </div>
  );
};

export default Task5;
