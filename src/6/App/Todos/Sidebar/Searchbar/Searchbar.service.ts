import { ChangeEvent } from "react";

import { useAppContext } from "../../../contexts";

export default function useSearchbarService() {
  const { onInput } = useAppContext();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    onInput(e.currentTarget.value);

  return {
    onInputChange,
  };
}
