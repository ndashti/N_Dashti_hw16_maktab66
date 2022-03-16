import { useEffect,useState,useRef,useCallback } from "react";
import Button from "./Button";
import Title from "./Title";
/**
 * you should use useRef, useCallback, memo, useState.
 * don't remove console logs,
 * check console before and after your chnages
 */
function ParentApp() {
  console.log("App is rendering...");
  useEffect(() => console.log("== ParentApp rendered =="));

 //create two states called value1 and value 2
  const [valu1,setValue1]=useState('')
  const [value2,setValue2]=useState('')


  //create ref for each input (ref1, ref2) and pass them to input elements 
  const ref1=useRef(0);
  const ref2=useRef(0);

  const changeValue1 = useCallback(() => {
    /**
     * get value of input from ref and set first state
     */
   setValue1(ref1.current.value)
  },[]);
  const changeValue2 = useCallback(() => {
    /**
     * get value of input from ref and set second state
     */
    setValue2(ref2.current.value)
  },[]);
  return (
    <div className="App">
      <div className="value-1">
        first value: <Title>{valu1}</Title>
        <br />
        change first value:
        <input ref={ref1}/>
        <Button onClick={changeValue1}> change </Button>
      </div>
      <div className="value-2">
        second value: <Title>{value2}</Title>
        <br />
        change second value:
        <input ref={ref2}/>
        <Button onClick={changeValue2}> change </Button>
      </div>
    </div>
  );
}
export default ParentApp;
