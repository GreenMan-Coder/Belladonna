const FrontJewelry = ({row}) => {
  return <div className="container">
    <div className="post">
      <h1 className="iron">Joyas Belladonna</h1>
      <h4>descubre la colección</h4>
      <div className="span"></div>
    </div>
    TRUNK EN LA PARTE DE ABAJO NO? OSEA PARA QUE ELIJAN ENTRE ORO PLATA Y ACERO
    <style jsx>{`
        .container {
          grid-row: ${row};
          height: 65vh;
          display: grid;
          grid-template-columns: 1fr 0.5fr;
          grid-template-rows: 1fr;
          justify-items: center;
          align-items: center;
          background-color: var(--light-purple);
          box-sizing: border-box;
          border-radius: 3px;
          position: relative;
        }
        *{
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        .post{
          justify-self: start;
          position: relative;
          left: 5%;
          grid-column: 1/2;
          width: 80%;
          height: 60%;
          background-color: var(--purple-blanco);
          border-radius: 15px;
          display: grid;
          grid-template-rows: 1fr 0.5fr;
          grid-template-columns: 1fr;
          justify-items: center;
          align-items: center;
        }
        h1{
          align-self: center;
          position: relative;
          top: 20%;
          grid-row: 1/2;
          grid-column: 1/2;
          width: 100%;
          text-align: center;
          font-weight: 400;
          font-size: 3em;
          text-transform: capitalize;
          box-sizing: border-box;
          margin-bottom: 3%;
        }
        h4{
          grid-row: 2/3;
          grid-column: 1/2;
          align-self: flex-start;
          justify-self: center;
          position: relative;
          top: 15%;
        }
        .span{
          grid-row: 1/2;
          grid-column: 1/2;
          width: 45%;
          height: 2%;
          background: var(--normal-purple);
          align-self: center;
          position: relative;
          top: 40%;
        }
    `}</style>
  </div>
}
export default FrontJewelry
