const ResourcesCard = ({url, tam, title, text}) => {
  return <section className="container">
    <div className="card-content">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
    <style jsx>{`
      .container {
        position: relative;
        width: 95%;
        height: 100%;
        background-image: ${url};
        display: grid;
        justify-items: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0 5px 15px 1px var(--light-purple);
      }
      .card-content{
        box-sizing: border-box;
        display: grid;
        grid-template-rows: 1fr;
        justify-items: center;
        align-items: end;
      }
      .card-content::after{
        content: '';
        position: absolute;
        width: 105%;
        height: 100%;
        border-radius: 10px;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }
      .card-content:hover::after{
        background: var(--tone-purple);
        opacity: 0.9;
        transition: opacity 0.5s ease-in-out;
        transition: background 0.7s ease-in-out;
      }
      h2{
        position: absolute;
        grid-row: 1/2;
        align-self: end;
        font-size: 30px;
        height: auto;
        color: var(--purple-blanco);
        z-index: 2;
        transform: translateY(0%);
        transition: transform 0.5s;
        background: var(--tone-purple);
        border-radius: 10px;
        box-sizing: border-box;
        padding: 0 5px;
        user-select: none;
      }
      .card-content:hover h2{
        transform: translateY(-550%);
        transition: transform 0.5s;
        background: transparent;
      }
      p{
        z-index: 1;
        grid-row: 1/2;
        align-self: center;
        transition: grid-row-start 0.5s ease;
        color: var(--purple-blanco);
        opacity: 0;
        transition: opacity .2s ease-in-out;
        user-select: none;
        box-sizing: border-box;
      }
      .card-content:hover p{
        opacity: 1;
        transition: opacity .6s ease-in-out;
        box-sizing: border-box;
      }

      @media screen and (max-width: 2500px){
        .container {
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: local;
        }
        .card-content::after{
          top: 0;
          width: 102%;
        }
        h2{
          font-size: 3.6em;
          bottom: 0;
        }
        .card-content:hover h2{
          transform: translateY(-700%);
          transition: transform 0.5s;
          background: transparent;
        }
        p{
          font-size: 2em;
          padding: 0 1em;
          position: relative;
          top: 10%;
        }
      }
    `}</style>
  </section>
}
export default ResourcesCard
