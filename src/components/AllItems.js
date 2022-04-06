import React, { useContext } from "react";

//context
import { ItemsContext } from "../context/ItemContextProvider";

//component
import List from "./List";

//css
import "./allItem.css";

export default function AllItems() {
  const { items, moveToSelectedItem } = useContext(ItemsContext);

  const checkHandler = (event) => {
    moveToSelectedItem(event.target.name,event.target.checked);
  };

  return (
    <div className='right'>
      <h2>ALL Items</h2>
      {items.map((item) => (
        <div className="container" key={item.id}>
          <input type="checkbox" name={item.id} onChange={checkHandler} />
          <List title={item.title} />
        </div>
      ))}
    </div>
  );
}
