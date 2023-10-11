import { useEffect, useState } from "react";
import Galery from "./Galery"

const Jewelry = ({name, setProductsAdded}) => {
  const [jewelry, setJewelry] = useState([]);
  const [bisuteria, setBisuteria] = useState([])
  const [identification, setIdentification] = useState(0)
  useEffect(() => {
    if (name === "joyeria") {
      fetch("/api/v1/joyeria/GoldSilver")
        .then((response) => response.json())
        .then((data) => {
          setJewelry(data);
        })
    } else {
      fetch("/api/v1/joyeria/Bisuteria")
        .then((response) => response.json())
        .then((data) => setBisuteria(data));
    }
  }, [name]);
  const handleClick = (num) =>{
    setIdentification(num);
  };
  const filterJewelryByType = (type) =>{
    if (name === "joyeria") {
      return jewelry.filter((item) => item.type === type);
    }else{
      return bisuteria.filter((item) => item.type === type);
    }
  }
  const handleAddToCart = (product) => {
    setProductsAdded(product);
  };
  return <section className="container">
    <div className="head">
      <h1>{name}</h1>
      <nav>
        <ul>
          <li onClick={() => handleClick(1)}>anillos</li>
          <li onClick={() => handleClick(2)}>pulseras</li>
          <li onClick={() => handleClick(3)}>aretes</li>
          <li onClick={() => handleClick(4)}>cadenas</li>
        </ul>
      </nav>
    </div>
    {name === "link-two" ?
      <Galery handleAddToCart={handleAddToCart} items={identification === 0 ? jewelry :
        identification === 1 ? filterJewelryByType('anillo') :
        identification === 2 ? filterJewelryByType('pulsera') :
        identification === 3 ? filterJewelryByType('arete') :
        identification === 4 ? filterJewelryByType('cadena') :""}/>
    :
      <Galery handleAddToCart={handleAddToCart} items={identification === 0 ? bisuteria :
        identification === 1 ? filterJewelryByType('anillo') :
        identification === 2 ? filterJewelryByType('pulsera') :
        identification === 3 ? filterJewelryByType('arete') :
        identification === 4 ? filterJewelryByType('cadena') :""}/>
    }
    <style jsx>{`
      .container {
        width: 100%;
        height: 100%;
        grid-row: 4/5;
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
        text-transform: capitalize;
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
