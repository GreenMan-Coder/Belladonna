import SocialNetworks from "./SocialNetworks"
import Link from "next/link"

const Description = ({sub, title, paragraph, href, pad}) => {
  return <div className="container">
    <h3>{sub}</h3>
    <h1>{title}</h1>
    { title === "Depilación con cera" ? <div className="nets">
      <SocialNetworks marg="0" tam="6.5%" href="https://www.facebook.com/profile.php?id=100074125141678&mibextid=ZbWKwL">
        <svg viewBox="0 0 512 512"> <path color="#3f0c3a" fill="currentcolor"d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
      </SocialNetworks>
      <SocialNetworks marg="8px" tam="6%" href="https://instagram.com/belladonna_depilacion?igshid=ZDdkNTZiNTM=">
        <svg viewBox="0 0 448 512"> <path color="#3f0c3a" fill="currentcolor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
      </SocialNetworks>
    </div>
    :
    <div className="jewelInsta">
      <SocialNetworks marg="8px" tam="7.4%" href="https://instagram.com/bella_donnajoyas?igshid=ZDdkNTZiNTM=">
        <svg viewBox="0 0 448 512"> <path color="#3f0c3a" fill="currentcolor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
      </SocialNetworks>
    </div>
    }
    <p>{paragraph}</p>
    <Link href={href} legacyBehavior>
      <a>¡Conoce más aquí!</a>
    </Link>
    <style jsx>{`
      .container {
        flex-grow: 2/3;
        justify-self: start;
        align-self: start;
        box-sizing: border-box;
        margin-top: 4em;
        width: 80%;
        height: auto;
        display: flex;
        flex-direction: column;
      }
      h3{
        margin: 0;
        color: var(--light-purple);
      }
      h1{
        font-size: 65px;
        font-weight: 700;
        margin: 0;
        flex-grow: 2;
        color: var(--normal-purple);
      }
      .nets{
        box-sizing: border-box;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
      }
      p{
        box-sizing: border-box;
        margin-top: ${pad};
        overflow: hidden;
        font-size: 17px;
        color: var(--normal-purple);
      }
      a{
        box-sizing: border-box;
        margin-top: 1em;
        overflow: hidden;
        text-decoration: none;
        font-weight: 900;
        color: var(--normal-purple);
      }
      @media screen and (max-width: 2410px) {
        .container{
          box-sizing: border-box;
          margin: 0;
          padding: 0 3%;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-rows: 0.3fr 1fr 0.5fr 0.3fr;
          justify-items: center;
          align-items: center;
        }
        h3{
          justify-self: start;
          align-self: end;
          grid-row: 1/2;
          grid-column: 1/2;
          width: 100%;
          font-size: 3.5em;
        }
        h1{
          grid-row: 2/3;
          grid-column: 1/2;
          font-size: 7.5em;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
        }
        .nets{
          grid-row: 2/3;
          grid-column: 1/2;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          width: 100%;
          align-self: center;
          position: relative;
          top: 8%;
        }
        .jewelInsta{
          grid-row: 2/3;
          grid-column: 1/2;
          box-sizing: border-box;
          margin: 0;
          align-self: center;
          padding: 0;
          width: 100%;
          position: relative;
          top: 10%;
        }
        p{
          justify-self: start;
          margin: 0;
          font-size: 2.6em;
          align-self: ${title === "Depilación con cera" ? "center" : "start"};
        }
        a{
          margin: 0;
          align-self: start;
          justify-self: start;
          font-size: 2.6em;
        }
      }
      @media screen and (max-width: 2277px) {
        h3{
          font-size: 3em;
        }
        h1{
          font-size: 6.5em;
        }
        .jewelInsta{
          top: 0;
        }
        p{
          justify-self: start;
          margin: 0;
          font-size: 2.6em;
          align-self: ${title === "Depilación con cera" ? "center" : "start"};
        }
        a{
          margin: 0;
          align-self: start;
          justify-self: start;
          font-size: 2.6em;
        }
      }
      @media screen and (max-width: 2005px) {
        h3{
          font-size: 2.3em;
        }
        h1{
          font-size: 4.5em;
        }
        p{
          font-size: 2em;
        }
        a{
          font-size: 2.3em;
          align-self: end;
        }
        .nets{
          position: relative;
          top: -6%;
        }
      }
      @media screen and (max-width: 1575px) {
        .jewelInsta{
          top: -8%;
        }
      }
      @media screen and (max-width: 1457px) {
        h3{
          font-size: 2em;
        }
        h1{
          font-size: 4em;
        }
        p{
          font-size: 1.9em;
        }
        a{
          font-size: 2.3em;
          align-self: end;
        }
        .nets{
          position: relative;
          top: -6%;
        }
      }
      @media screen and (max-width: 1094px) {
        h3{
          font-size: 1.8em;
        }
        h1{
          font-size: 3.5em;
        }
        p{
          font-size: 1.7em;
        }
        a{
          font-size: 2em;
          align-self: end;
        }
        .nets{
          position: relative;
          top: -6%;
        }
      }
      @media screen and (max-width: 956px) {
        h3{
          position: relative;
          top: 20%;
          font-size: 1.8em;
        }
        h1{
          position: relative;
          top: 5%;
          font-size: ${title === "Joyería" ? "4em" : "3.2em"};
        }
        p{
          font-size: 1.7em;
        }
        a{
          font-size: 2em;
          align-self: end;
        }
        .nets{
          position: relative;
          top: -14%;
        }
        .jewelInsta{
          top: -8%;
        }
      }
      @media screen and (max-width: 875px) {
        h3{
          font-size: 1.55em;
        }
        h1{
          position: relative;
          top: 5%;
          font-size: ${title === "Joyería" ? "4em" : "3em"};
        }
        p{
          font-size: 1.5em;
        }
        a{
          font-size: 1.6em;
          align-self: end;
          position: relative;
          bottom: 30%;
        }
      }
      @media screen and (max-width: 820px) {
        h3{
          top: 45%;
          font-size: 1.5em;
        }
        h1{
          top: 10%;
          font-size: ${title === "Joyería" ? "4em" : "3.5em"};
        }
        .nets{
          top: 15%;
        }
        p{
          font-size: 1.5em;
        }
        a{
          font-size: 1.6em;
          align-self: end;
          position: relative;
          bottom: 30%;
        }
      }
      @media screen and (max-width: 660px) {
        h3{
          top: 40%;
          font-size: 1.4em;
        }
        h1{
          font-size: ${title === "Joyería" ? "3.5em" : "3em"};
        }
        .nets{
          top: 5%;
        }
        a{
          font-size: 1.42em;
        }
      }
      @media screen and (max-width: 540px) {
        .container{
          align-self: end;
          box-sizing: border-box;
          margin: 0;
          padding: 0 3%;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-rows: 0.3fr 1fr 0.5fr 0.3fr;
          justify-items: center;
          align-items: center;
        }
        h3{
          justify-self: start;
          align-self: end;
          grid-row: 1/2;
          grid-column: 1/2;
          width: 100%;
          font-size: 1.6em;
        }
        h1{
          grid-row: 2/3;
          grid-column: 1/2;
          font-size: 3em;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
        }
        .nets{
          top: 10%;
        }
        .jewelInsta{
          bottom: 0%;
          top: 4%;
        }
        p{
          margin: 0;
          font-size: 1.6em;
          align-self: ${title === "Depilación con cera" ? "center" : "start"};
        }
        a{
          margin: 0;
          align-self: end;
          justify-self: start;
          font-size: 1.6em;
        }
      }
      @media screen and (max-width: 488px) {
        .nets{
          top: 28%;
        }
        }
        p{
          align-self: ${title === "Depilación con cera" ? "end" : "start"};
        }
        a{
          bottom: 0;
          top: 20%;
          font-size: 1.6em;
        }
      }
      @media screen and (max-width: 415px) {
        .container{
          align-self: end;
          box-sizing: border-box;
          margin: 0;
          padding: 0 3%;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-rows: 0.3fr 1fr 0.5fr 0.3fr;
          justify-items: center;
          align-items: center;
        }
        h3{
          justify-self: start;
          align-self: end;
          grid-row: 1/2;
          grid-column: 1/2;
          width: 100%;
          font-size: 1.6em;
        }
        h1{
          grid-row: 2/3;
          grid-column: 1/2;
          font-size: 3em;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
        }
        .nets{
          grid-row: 2/3;
          grid-column: 1/2;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          width: 100%;
          align-self: center;
          position: relative;
          top: 24%;
        }
        .jewelInsta{
          grid-row: 2/3;
          grid-column: 1/2;
          box-sizing: border-box;
          margin: 0;
          align-self: center;
          padding: 0;
          width: 100%;
          position: relative;
          bottom: 5%;
        }
        p{
          margin: 0;
          font-size: 1.6em;
          align-self: ${title === "Depilación con cera" ? "center" : "start"};
        }
        a{
          margin: 0;
          align-self: end;
          justify-self: start;
          font-size: 1.6em;
        }
      }
    `}</style>
  </div>
}
export default Description
