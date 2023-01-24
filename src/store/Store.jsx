import { useContext, createContext, useState } from "react";

const AppContext = createContext({
  items: [],
  addItem: (item) => {},
  updateItem: (updatedItem) => {},
  deleteItem: (id) => {},
  getItem: (id) => {},
});

export default function Store({ children }) {
  const [items, setItems] = useState([]);
  function addItem(item) {
    const copy = [...items];
    copy.push(item);
    setItems([...copy]);
  }
  function getItem(id) {
    return items.find((item) => item.id === id);
  }
  function updateItem(updatedItem) {
    const copy = [...items];
    let tmp = copy.find((item) => item.id === updatedItem.id);
    tmp = updateItem;
    setItems([...copy]);
  }
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
