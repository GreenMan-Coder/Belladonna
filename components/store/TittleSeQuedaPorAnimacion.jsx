const Tittle = ({row}) => {
  return <div className="container">
    <h1>Joyería</h1>

    <style jsx>{`
      .container {
        grid-row: ${row};
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        position: sticky;
        top: 23.5%;
      }
      h1{
        position: relative;
        margin: 0;
        margin: 0 5px 0.5em 5px;
        font-size: 1.9em;
        font-weight: 400;
        color: var(--normal-purple);
        text-align: center;
        text-transform: uppercase;
        animation: slideIn 0.5s forwards;
      }

      @keyframes slideIn {
        from {
          top: -100%;
        }
        to {
          top: 0.7%;
        }
      }
    `}</style>
  </div>
}
export default Tittle
