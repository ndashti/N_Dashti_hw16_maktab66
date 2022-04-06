import React, { useContext } from "react";
import { ItemsContext } from "../context/ItemContextProvider";
import List from "./List";

export default function SelectedItems() {
  const { movedItems } = useContext(ItemsContext);
  return (
    <div className='left' >
      <h2>Selected Items</h2>
      {movedItems.map((item) => (
         <List title={item.title} />
      ))}
    </div>
  );
}
