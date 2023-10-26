const Information = ({sub, title, paragraph, href, side}) => {
  return <article className="container">
    <hgroup>
      <h3>{sub}</h3>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <div className="link">
        <a href={href}>Enlace aquí
          <svg viewBox="0 0 512 512"><path color="#ffe3fe" fill="currentcolor" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
        </a>
      </div>
    </hgroup>
    <style jsx>{`
      .container {
        height: 100%;
        width: 80%;
        position: relative;
        left: ${side};
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
      }
      hgroup{
        position: relative;
        height: 90%;
        display: grid;
        grid-template-rows: 14% 22% 35% 10%;
      }
      h3{
        grid-row: 1/2;
        position: absolute;
        margin: 0;
        bottom: 0;
        color: var(--normal-purple);
        box-sizing: border-box;
        overflow: hidden;
        font-size: 1.8em;
      }
      h2{
        grid-row: 2/3;
        margin: 0;
        color: var(--light-purple);
        font-size: 2.4em;
      }
      p{
        grid-row: 3/4;
        align-self: center;
        margin: 0;
        box-sizing: border-box;
        color: var(--light-purple);
        font-size: 1.1em;
      }
      .link{
        grid-row: 4/5;
        display: grid;
        grid-template-columns: 0.5fr 1fr;
      }
      a{
        position: absolute;
        grid-column: 1/2;
        text-decoration: none;
        box-sizing: border-box;
        color: var(--light-purple);
        font-weight: 900;
        font-size: 1.25em;
      }
      svg{
        position: relative;
        top: 4px;
        width: 17px;
        grid-column: 2/3;
        margin-left: 5px;
      }
      @media screen and (max-width: 2410px) {
        .container {
          align-self: flex-start;
          height: 88%;
        }
        hgroup{
          top: 7%;
        }
        h3{
          font-size: 3.5em;
        }
        h2{
          font-size: 5.5em;
        }
        p{
          font-size: 1.7em;
          position: relative;
          top: ${title === "Conócenos" ? '11%' : "0"};
        }
        a{
          font-size: 2em;
          bottom: 20%;
        }
        svg{
          width: 0.7em;
          left: 5%;
          box-sizing: border-box;
          padding-bottom: 1%;
          margin: 0;
        }
      }
      @media screen and (max-width: 1754px) {
        .container {
          height: 100%;
          width: 100%;
          left: 0;
          display: grid;
          justify-items: center;
          align-items: center;
          padding: 0 3%;
        }
        hgroup{
          top: 0;
          height: 100%;
        }
        h3{
          height: 100%;
          width: 100%;
          grid-row: 1/2;
        }
        h2{
          height: 100%;
          width: 100%;
        }
        p{
          height: 100%;
          top: 0;
          box-sizing: border-box;
          padding-top: 8%;
        }
      }
      @media screen and (max-width: 1126px) {
        h3{
          font-size: 3em;
          padding-top: 4%;
        }
        h2{
          font-size: 4.5em;
          box-sizing: border-box;
        }
        p{
          box-sizing: border-box;
          padding-top: 5%;
        }
        a{
          font-size: 1.8em;
          bottom: 30%;
        }
      }
      @media screen and (max-width: 850px) {
        h3{
          font-size: 2.3em;
          padding-top: 0;
          top: 45%;
        }
        h2{
          font-size: 3.5em;
          box-sizing: border-box;
        }
        p{
          font-size: 1.5em;
        }
        a{
          font-size: 1.5em;
        }
      }
      @media screen and (max-width: 705px) {
        h3{
          font-size: 2em;
          top: 50%;
        }
        h2{
          font-size: 3em;
        }
      }
      @media screen and (max-width: 586px) {
        h3{
          font-size: 1.5em;
          top: 0;
        }
        h2{
          height: 50%;
          width: 90%;
          position: relative;
          top: -40%;
          font-size: 2.5em;
        }
        p{
          position: relative;
          top: -40%;
          font-size: 1.5em;
        }
        a{
          font-size: 1.5em;
        }
      }
    `}</style>
  </article>
}
export default Information
