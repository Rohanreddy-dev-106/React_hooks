/** @format */

import { useState } from "react";
import "./expensive.css";
const ExpensiveTraker = () => {
  const [country, setCountry] = useState("");
  const [convert, setconvert] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleConvert = () => {
    if (country === "USA") {
      setconvert(amount * 0.012); // INR → USD
    } else if (country === "JAPAN") {
      setconvert(amount * 1.8); // INR → JPY
    } else if (country === "GERMANY") {
      setconvert(amount * 0.011); // INR → EUR
    }
  };

  return (
    <div className='converter'>
      <input
        type='text'
        placeholder='Give Indian Rupees'
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <select onChange={(e) => setCountry(e.target.value)}>
        <option value=''>Select Country</option>
        <option value='USA'>USA</option>
        <option value='JAPAN'>Japan</option>
        <option value='GERMANY'>Germany</option>
      </select>

      <button onClick={handleConvert}>Convert</button>

      <h2>Converted Amount: {convert}</h2>
    </div>
  );
};

export default ExpensiveTraker;
