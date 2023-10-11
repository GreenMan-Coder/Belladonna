const CarShop = ({items}) => {
  return <div className="container">
    <h2>Carrito de Compras</h2>
    <ul>
      {items.map((item, index) => {
        console.log("item____: ",item.product.name)
        return (
          <li key={index}>
            {item.product.name}
          </li>
        );
      })}
    </ul>
    <style jsx>{`
      .container {
        position: fixed;
        bottom: 1%;
        right: 5%;
        height: 70%;
        width: 40%;
        border: 2px solid var(--light-pink);
        z-index: 3;
        background-color: var(--purple-blanco);
        border-radius: 3%;
      }
    `}</style>
  </div>
}
export default CarShop
