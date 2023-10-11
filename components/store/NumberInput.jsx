import { useState } from "react"
const NumberInput = ({setQa}) => {
  const [number, setNumber] = useState(0)
  setQa(number)
  return <div className="container">
    <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} min="0" step="1"/>
    <style jsx>{`
      .container {
        margin-left: 7%;
        display: grid;
        width: 40%;
        justify-self: start;
      }
      input[type="number"] {
        width: 100%;
        padding: 5px;
        position: relative;
        top: -45%;
        font-size: 16px;
        border: 1px solid var(--light-purple);
        color: var(--tone-purple);
        border-radius: 5px;
        text-align: center;
      }
    `}</style>
  </div>
}
export default NumberInput
