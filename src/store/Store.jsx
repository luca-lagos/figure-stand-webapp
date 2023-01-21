import { useContext, createContext, useState } from "react";

const AppContext = createContext({
  items: [],
  addItem: (item) => {},
  updateItem: (item) => {},
  deleteItem: (id) => {},
  getItem: (id) => {},
});

export default function Store({ children }) {
  const [items, setItems] = useState(
    [
      {
        id: '0',
        name: "di rocco",
        image: "",
        state: "purchased",
      },
      {
        id: '1',
        name: "gomez",
        image: "",
        state: "purchased",
      },
      {
        id: '2',
        name: "andino",
        image: "",
        state: "purchased",
      },
    ],
    []
  );
  function addItem(item) {
    const copy = [...items];
    copy.push(item);
    setItems([...copy]);
  }
  function getItem(id) {
    return items.find((item) => item.id === id);
  }
  function updateItem(item) {}
  function deleteItem(id) {}
  return (
    <AppContext.Provider
      value={{ items, addItem, updateItem, deleteItem, getItem }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
