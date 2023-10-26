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
        h2{
          font-size: 3.75em;
        }
        .card-content:hover h2{
          transform: translateY(-320%);
        }
        p{
          font-size: 1.8em;
        }
        .card-content:hover p{
          opacity: 1;
          transition: opacity .6s ease-in-out;
          box-sizing: border-box;
        }
      }
      @media screen and (max-width: 2146px) {
        p{
          position: relative;
          top: ${title === "SEGUIMIENTO" ? "4%" : "0"};
        }
      }
      @media screen and (max-width: 2070px) {
        h2{
          font-size: 3.5em;
        }
        p{
          top: 0;
          font-size: 1.6em;
        }
      }
      @media screen and (max-width: 2010px) {
        .card-content:hover h2{
          transform: translateY(-350%);
        }
      }
      @media screen and (max-width: 1802px) {
        h2{
          font-size: 3.3em;
        }
        .card-content:hover h2{
          transform: translateY(-380%);
        }
        p{
          top: ${title === "LOCACIÓN" ? "2%" : "5%"};
          font-size: 1.5em;
        }
      }
      @media screen and (max-width: 1650px) {
        h2{
          font-size: 2.8em;
        }
        .card-content:hover h2{
          transform: translateY(-460%);
        }
        p{
          top: ${title === "DEPILACIÓN" ? "5%" : "8%"};
          font-size: 1.48em;
        }
      }
      @media screen and (max-width: 1642px) {
        p{
          top: ${title === "LOCACIÓN" ? "4%" : ""};
        }
      }
      @media screen and (max-width: 1510px) {
        h2{
          font-size: 2.7em;
        }
        .card-content:hover h2{
          transform: translateY(-480%);
        }
        p{
          top: ${title === "DEPILACIÓN" ? "10%" : title === "SEGUIMIENTO" ? "6.5%" : "14%"};
          text-align: center;
          padding: 0 5%;
          font-size: 1.44em;
        }
      }
      @media screen and (max-width: 1314px) {
        p{
          top: ${title === "DEPILACIÓN" ? "10%" : title === "SEGUIMIENTO" ? "6.5%" : "10.8%"};
        }
      }
      @media screen and (max-width: 1146px) {
        h2{
          font-size: 2.3em;
        }
        .card-content:hover h2{
          transform: translateY(-600%);
        }
        p{
          top: ${title === "SEGUIMIENTO" ? "6%" : "9%"};
          font-size: 1.38em;
        }
      }
      @media screen and (max-width: 1094px) {
        h2{
          font-size: 2.2em;
        }
        .card-content:hover h2{
          transform: translateY(-600%);
        }
        p{
          top: ${title === "SEGUIMIENTO" ? "9%" : "13%"};
          font-size: 1.2em;
        }
      }
      @media screen and (max-width: 969px) {
        h2{
          font-size: 1.85em;
        }
        .card-content:hover h2{
          transform: translateY(-750%);
        }
        p{
          font-size: 1.08em;
        }
      }
      @media screen and (max-width: 910px) {
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
          font-size: 2.5em;
        }
        .card-content:hover h2{
          transform: translateY(0%);
          visibility: hidden;
          transition: visibility 0.1s ease-in-out;
        }
        p{
          top: 0;
          margin: 0;
          font-size: 1.5em;
          text-align: justify;
        }
        .card-content:hover p{
          opacity: 1;
          transition: opacity .6s ease-in-out;
          box-sizing: border-box;
        }
      }
      @media screen and (max-width: 810px) {
        p{
          font-size: 1.3em;
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
