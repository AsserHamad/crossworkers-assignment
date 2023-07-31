import React, { createContext, useContext, useState } from "react";
import { Todo } from "../Todos/Todos.type";

const AppContext = createContext<{
  items: Todo[];
  visibleItems: Todo[];
  onInput: (input: string) => void;
  addItem: (item: string) => void;
  removeItem: (index: string) => void;
  markItemAsDone: (index: string) => void;
}>({
  items: [],
  visibleItems: [],
  onInput: (input) => {},
  addItem: (item) => {},
  removeItem: (index) => {},
  markItemAsDone: (index) => {},
});

const defaultItems = [
  {
    text: "Give the dog a shower.",
    addedOn: new Date(),
    done: false,
    id: "1",
  },
  {
    text: "Help mom with some chores",
    addedOn: new Date(),
    done: false,
    id: "2",
  },
  {
    text: "Get dinner.",
    addedOn: new Date(),
    done: false,
    id: "3",
  },
];

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [items, setItems] = useState<Todo[]>(defaultItems);
  const [visibleItems, setVisibleItems] = useState<Todo[]>(defaultItems);

  const onInput = (inputText: string) => {
    const regex = new RegExp(`${inputText}`, "g");
    setVisibleItems(items.filter((item) => regex.test(item.text)));
  };

  const addItem = (item: string) =>
    setItems((oldItems) => {
      const newItems = [...oldItems].concat({
        text: item,
        done: false,
        addedOn: new Date(),
        id: Date.now().toString(),
      });
      setVisibleItems(newItems);
      return newItems;
    });

  const markItemAsDone = (id: string) =>
    setItems((oldItems) => {
      const newItems = [...oldItems].map((item) => {
        if (item.id === id) item.done = true;
        return item;
      });
      setVisibleItems(newItems);
      return newItems;
    });

  const removeItem = (id: string) =>
    setItems((oldItems) => {
      const newItems = [...oldItems].filter((item) => item.id !== id);
      setVisibleItems(newItems);
      return newItems;
    });

  return (
    <AppContext.Provider
      value={{
        items,
        visibleItems,
        onInput,
        addItem,
        removeItem,
        markItemAsDone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
