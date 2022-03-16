import React, { useState, useEffect } from "react";

import './selectinput.scss';

export default function SelectInput() {
  const [city, setCity] = useState([]);
  useEffect(() => {
    fetch("./iranstates.json")
      .then((res) => res.json())
      .then((response) => {
        setCity(response);
      });
  });
  console.log(city)
  return (
        city.map((c) => {<option value={c}>{c}</option>})
  );
}
