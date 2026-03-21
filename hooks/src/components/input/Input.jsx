/** @format */

import { useState } from "react";
import "./inputstyle.css";
const Input = ({Title}) => {
  const [input, setinput] = useState("");
  const [last, setlast] = useState("");
  const [display, setdisplay] = useState("");
  const [store, setstore] = useState([]);

  let handelear = (e) => {
    setinput(e.target.value);
  };
  let lasthandeler=(e)=>{
    setlast(e.target.value);
  }

  let displayhandeler = () => {
    let fullname=input.concat(last)
    setstore([...store,fullname])
    console.log(store);
    setdisplay(fullname);
  };

  return (
    <div className='container'>
    <h1>{Title}</h1>
      <input
        type='text'
        className='input-box'
        onChange={handelear}
        placeholder='Type First Name...'
      />
      <input
        type='text'
        className='input-box'
        onChange={lasthandeler}
        placeholder='Type Last Name'
      />
      <button className='btn' onClick={displayhandeler}>
        DISPLAY
      </button>
      {store.map((v)=>{
        return (
          <ul>
            <li>{v}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Input;
