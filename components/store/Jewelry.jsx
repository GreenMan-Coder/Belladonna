import { useEffect, useState } from "react";
import Galery from "./Galery"

const Jewelry = ({row}) => {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/bisuteria')
      .then((response) => response.json())
      .then((data) => setJewelry(data));
  }, []);

  return <section className="container">

    <div className="head">
      <h1>Bisuteria</h1>
      <nav>
        <ul>
          <li>anillos</li>
          <li>pulseras</li>
          <li>aretes</li>
          <li>cadenas</li>
        </ul>
      </nav>
    </div>
    <Galery items={jewelry}/>

    <style jsx>{`
      .container {
        width: 100%;
        height: 100%;
      }
      .head{
        height: 7%;
        display: grid;
        grid-template-columns: 0.5fr 1fr;
        justify-items: start;
        align-items: center;
        background-color: var(--light-pink);
        border-radius: 5px;
        position: sticky;
        top: 23%;
        z-index: 2;
        box-sizing: border-box;
        margin-bottom: 4%;
      }
      h1{
        grid-column: 1/2;
        margin: 0;
        padding: 0;
        position: relative;
        left: 2%;
        font-weight: 400;
        font-size: 1.25rem;
        color: var(--tone-purple);
      }
      .head nav{
        grid-column: 2/3;
        justify-self: end;
        width: 100%;
      }
      .head ul{
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        padding: 0;
      }
      .head li{
        flex: 1;
        text-align: center;
        font-size: 1.1rem;
        font-weight: 400;
        color: var(--tone-purple);
        cursor: pointer;
      }
      .head::before,
      .head::after {
        content: "";
        position: absolute;
        left: 0px;
        right: 0px;
        height: 5px;
        background-color: var(--light-pink);
        opacity: 0.5;
      }
      .head::before {
        top: -7px;
      }
      .head::after {
        bottom: -7px;
      }
    `}</style>
  </section>
}
export default Jewelry
