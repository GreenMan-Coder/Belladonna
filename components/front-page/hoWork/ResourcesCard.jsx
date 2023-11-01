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

      @media screen and (max-width: 2560px) and (max-height: 2560px) {
        .card-content::after{
          width: 100%;
        }
        h2{
          font-size: 4rem;
        }
        .card-content:hover h2{
          transform: translateY(-450%);
        }
        p{
          padding-top: 0;
          position: relative;
          top: ${title === "DEPILACIÓN" ? "9%" : title === "SEGUIMIENTO" ? "6.5%" : "9%"};
          font-size: 2rem;
          padding: 0 3%;
        }
      }
      @media screen and (max-width: 2560px) and (max-height: 1080px) {
        h2{
          font-size: 3.5rem;
        }
        .card-content:hover h2{
          transform: translateY(-510%);
        }
        p{
          top: ${title === "DEPILACIÓN" ? "9%" : title === "SEGUIMIENTO" ? "9%" : "9%"};
        }
      }
      @media screen and (max-width: 2560px) and (max-height: 960px) {
        h2{
          font-size: 3.3rem;
        }
        .card-content:hover h2{
          transform: translateY(-480%);
        }
      }
      @media screen and (max-width: 2560px) and (max-height: 860px) {
        h2{
          font-size: 3.5rem;
        }
        .card-content:hover h2{
          transform: translateY(-410%);
        }
      }
      @media screen and (max-width: 2560px) and (max-height: 800px) {
        h2{
          font-size: 3rem;
        }
        .card-content:hover h2{
          transform: translateY(-450%);
        }
      }
      @media screen and (max-width: 2560px) and (max-height: 720px) {
        h2{
          font-size: 2.7rem;
        }
        .card-content:hover h2{
          transform: translateY(-470%);
        }
      }
      @media screen and (max-width: 2560px) and (max-height: 680px) {
        h2{
          font-size: 2.5rem;
        }
        .card-content:hover h2{
          transform: translateY(-440%);
        }
        p{
          font-size: 1.7rem;
        }
      }

      @media screen and (max-width: 2560px) and (max-height: 680px) {
        h2{
          font-size: 2.5rem;
        }
        .card-content:hover h2{
          transform: translateY(-440%);
        }
        p{
          font-size: 1.7rem;
        }
      }

      @media screen and (max-width: 2280px) and (max-height: 2560px) {
        h2{
          font-size: 3.6rem;
        }
        .card-content:hover h2{
          transform: translateY(-510%);
        }
        p{
          font-size: 2rem;
          top: ${title === "DEPILACIÓN" ? "9%" : title === "SEGUIMIENTO" ? "9%" : "9%"};
        }
      }
      @media screen and (max-width: 2280px) and (max-height: 990px) {
        h2{
          font-size: 3.3rem;
        }
        .card-content:hover h2{
          transform: translateY(-510%);
        }
      }
      @media screen and (max-width: 2280px) and (max-height: 880px) {
        h2{
          font-size: 3.2rem;
        }
        .card-content:hover h2{
          transform: translateY(-490%);
        }
        p{
          font-size: 1.8rem;
          top: ${title === "DEPILACIÓN" ? "9%" : title === "SEGUIMIENTO" ? "6%" : "6%"};
        }
      }
      @media screen and (max-width: 2280px) and (max-height: 845px) {
        .card-content:hover h2{
          transform: translateY(-450%);
        }
      }
      @media screen and (max-width: 2280px) and (max-height: 780px) {
        .card-content:hover h2{
          transform: translateY(-400%);
        }
      }
      @media screen and (max-width: 2280px) and (max-height: 715px) {
        h2{
          font-size: 3rem;
        }
        .card-content:hover h2{
          transform: translateY(-390%);
        }
        p{
          font-size: 1.6rem;
          top: ${title === "DEPILACIÓN" ? "9%" : title === "SEGUIMIENTO" ? "6%" : "9%"};
        }
      }
      @media screen and (max-width: 2280px) and (max-height: 665px) {
        h2{
          font-size: 2.7rem;
        }
        .card-content:hover h2{
          transform: translateY(-390%);
        }
        p{
          font-size: 1.6rem;
          top: ${title === "DEPILACIÓN" ? "9%" : title === "SEGUIMIENTO" ? "6%" : "9%"};
        }
      }
      @media screen and (max-width: 2280px) and (max-height: 600px) {
        .card-content:hover h2{
          transform: translateY(-370%);
        }
      }

      @media screen and (max-width: 2100px) and (max-height: 2560px) {
        h2{
          font-size: 3.6rem;
        }
        p{
          font-size: 1.8rem;
          top: ${title === "DEPILACIÓN" ? "9%" : title === "SEGUIMIENTO" ? "6%" : "9%"};
        }
      }
      @media screen and (max-width: 2100px) and (max-height: 970px) {
        h2{
          font-size: 3.3rem;
        }
        .card-content:hover h2{
          transform: translateY(-470%);
        }
      }
      @media screen and (max-width: 2100px) and (max-height: 847px) {
        h2{
          font-size: 3.1rem;
        }
        .card-content:hover h2{
          transform: translateY(-440%);
        }
      }
      @media screen and (max-width: 2100px) and (max-height: 760px) {
        h2{
          font-size: 2.9rem;
        }
        .card-content:hover h2{
          transform: translateY(-400%);
        }
        p{
          font-size: 1.6rem;
          top: ${title === "DEPILACIÓN" ? "13%" : title === "SEGUIMIENTO" ? "10.5%" : "8%"};
        }
      }
      @media screen and (max-width: 2100px) and (max-height: 760px) {
        h2{
          font-size: 2.7rem;
        }
        .card-content:hover h2{
          transform: translateY(-400%);
        }
        p{
          font-size: 1.4rem;
          top: ${title === "DEPILACIÓN" ? "13%" : title === "SEGUIMIENTO" ? "10.5%" : "14%"};
        }
      }
      @media screen and (max-width: 2100px) and (max-height: 640px) {
        .card-content:hover h2{
          transform: translateY(-350%);
        }
      }

      @media screen and (max-width: 1800px) and (max-height: 2560px) {

      }
      }
    `}</style>
  </section>
}
export default ResourcesCard
