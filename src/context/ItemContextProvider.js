import React, { useState, useEffect, createContext } from "react";

//url
const BASE_URL = "https://624ad442852fe6ebf88bc5a7.mockapi.io/items";

export const ItemsContext = createContext();

export function ItemContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [movedItems, setMovedItems] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const moveToSelectedItem = (id,checked) => {
    if (!checked) {
      setMovedItems([...movedItems.filter((it) => it.id !== id)]);
    } else {
      const selectedItem = items.find((it) => it.id === id);
      setMovedItems([...movedItems, selectedItem]);
    }
  };

  const itemContextValue = { items, movedItems, moveToSelectedItem };

  return (
    <ItemsContext.Provider value={itemContextValue}>
      {children}
    </ItemsContext.Provider>
  );
}
