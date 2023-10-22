const ResourcesCard = ({url, tam, title, text, pos, top}) => {
  return <section className="container">
    <div className="card-content">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
    <style jsx>{`
      .container {
        align-self: center;
        position: relative;
        width: 100%;
        height: 100%;
        background-image: ${url};
        background-repeat: no-repeat;
        background-position: right;
        background-size: ${tam};
        background-attachment: local;
        display: grid;
        justify-items: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0 5px 15px 1px var(--light-purple);
      }
      .card-content{
        box-sizing: border-box;
        position: relative;
        height: 90%;
        margin: 0 20px;
        display: grid;
        grid-template-rows: 1fr;
        justify-items: center;
        align-content: end;
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
      }
      .card-content:hover h2{
        transform: translateY(-550%);
        transition: transform 0.5s;
        background: transparent;
      }
      p{
        padding-top: ${top};
        z-index: 1;
        grid-row: 1/2;
        align-self: ${pos};
        transition: grid-row-start 0.5s ease;
        color: var(--purple-blanco);
        opacity: 0;
        transition: opacity .2s ease-in-out;
      }
      .card-content:hover p{
        opacity: 1;
        transition: opacity .6s ease-in-out;
        box-sizing: border-box;
      }
      @media screen and (max-width: 280px) {
        .container{
          width: 100%;
          height: 98%;
        }
        .card-content{
          margin: 0;
          width: 97%;
        }
        .card-content::after{
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
        h2{
          font-size: 2em;
        }
        .card-content:hover h2{
          transform: translateY(0%);
          visibility: hidden;
          transition: visibility 0.1s ease-in-out;
        }
        p{
          padding: 2% 2%;
          margin: 0;
          font-size: 1.2em;
          text-align: justify;
        }
        .card-content:hover p{
          opacity: 1;
          transition: opacity .6s ease-in-out;
          box-sizing: border-box;
        }
      }
    `}</style>
  </section>
}
export default ResourcesCard
