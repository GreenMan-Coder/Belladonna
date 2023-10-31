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
        background-size: cover;
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
        user-select: none;
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
        user-select: none;
      }
      .card-content:hover p{
        opacity: 1;
        transition: opacity .6s ease-in-out;
        box-sizing: border-box;
      }
      @media screen and (max-width: 2410px) {
        .card-content::after{
          width: 100%;
        }
        h2{
          font-size: 4rem;
        }
        .card-content:hover h2{
          transform: translateY(-380%);
        }
        p{
          padding-top: 0;
          position: relative;
          top: ${title === "DEPILACIÓN" ? "10%" : title === "SEGUIMIENTO" ? "6.5%" : "9%"};
          font-size: 1.8rem;
          padding: 0 3%;
        }
      }
      @media screen and (max-width: 1885px) {
        h2{
          font-size: 3.5rem;
        }
        .card-content:hover h2{
          transform: translateY(-480%);
        }
        p{
          top: ${title === "DEPILACIÓN" ? "8%" : ""};
          font-size: 1.7rem;
        }
      }
      @media screen and (max-width: 1750px) {
        h2{
          font-size: 3.3rem;
        }
        p{
          font-size: 1.5rem;
        }
      }
      @media screen and (max-width: 1410px) {
        h2{
          font-size: 2.8rem;
        }
        .card-content:hover h2{
          transform: translateY(-650%);
        }
        p{
          top: ${title === "LOCACIÓN" ? "10%" : ""};
          font-size: 1.7rem;
        }
      }
      @media screen and (max-width: 1210px) {
        h2{
          font-size: 2.45rem;
        }
        .card-content:hover h2{
          transform: translateY(-750%);
        }
        p{
          font-size: 1.6rem;
        }
      }
      @media screen and (max-width: 1150px) {
        h2{
          font-size: 2.35rem;
        }
        p{
          font-size: 1.5rem;
        }
      }
      @media screen and (max-width: 1084px) {
        p{
          font-size: 1.4em;
        }
      }
      @media screen and (max-width: 1064px) {
        h2{
          font-size: 2.1rem;
        }
        .card-content:hover h2{
          transform: translateY(-850%);
        }
        p{
          font-size: 1.35em;
        }
      }
      @media screen and (max-width: 540px) {
        p{
          font-size: 1.6em;
        }
      }
      @media screen and (max-width: 430px) {
        p{
          font-size: 1.4em;
        }
      }
    `}</style>
  </section>
}
export default ResourcesCard
