const FrontLayout = ({row}) => {
  return <section className="container">
    <hgroup>
      <h3>Bienvenida a</h3>
      <h1>BELLA<span>DONNA</span></h1>
    </hgroup>
    <p>Excelencia y profesionalismo en depilación con cera: Tu piel, nuestro <span>compromiso</span>.</p>
    <style jsx>{`
      .container {
        position: relative;
        grid-row: ${row};
        font-family: var(--font);
        background-image: url(/img/front-page/woman-front.png);
        background-repeat: no-repeat;
        background-attachment: local;
        z-index: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
      }
      hgroup{
        margin: 0;
        box-sizing: border-box;
        color: var(--normal-purple);
      }
      h1{
        font-weight: 700;
        margin: 0;
      }
      span{

      }
      h3{
        width: 20%;
        margin: 0;
        margin-bottom: -18px;
        font-size: 1.5em;
        color: var(--tone-purple);
        opacity: 0.8;
        border: 1px solid green;
      }
      p{
        margin: 0;
        color: var(--light-purple);
        background-color: var(--tone-purple);
        text-align: center;
        opacity: 0.8;
      }

      @media screen and (max-width: 2500px) and (max-height: 3840px) {
        .container {
          height: 45vh;
          background-position: right -5% bottom 0%;
          background-size: 50%;
        }
        hgroup{
          position: relative;
          align-self: center;
          width: 100%;
          display: grid;
          grid-template-rows: 1fr 3fr;
          justify-items: center;
          border: 1px solid green;
        }
        h1{
          grid-row: 2/3;
          grid-column: 1/2;
          font-size: 22rem;
          justify-self: center;
          align-self: center;
        }
        h3{
          grid-row: 1/2;
          grid-column: 1/2;
          font-size: 5.5em;
          opacity: 0.8;
          justify-self: start;
          align-self: end;
          position: relative;
          left: 5%;
        }
        p{
          font-size: 4.3em;
          width: 100%;
          position: absolute;
          bottom: 0;
          box-sizing: border-box;
          padding: 2% 0;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 3640px) {
        .container {
          background-size: 45%;
          background-position: right -5% bottom 0%;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 3340px) {
        .container {
          background-size: 40%;
          background-position: right -5% bottom 0%;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 3060px) {
        .container {
          background-size: 37%;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 2870px) {
        .container {
          background-size: 35%;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 2750px) {
        .container {
          background-size: 33%;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 2640px) {
        .container {
          min-height: 74rem;
        }
      }


      @media screen and (max-width: 2500px) and (max-height: 2590px) {
        .container {
          background-size: 35%;
          background-position: right 10% bottom 0%;
          min-height: 86rem;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 2560px) {
        .container {
          background-size: 46%;
          background-position: right 0% bottom 0%;
        }
        h1{
          font-size: 18.5rem;
        }
        h3{
          font-size: 4.7rem;
        }
        p{
          font-size: 4.2em;
        }
      }



      @media screen and (max-width: 1960px) and (max-height: 2730px){
        .container {
          background-size: 40%;
          background-position: right -12% bottom 0%;
        }
      }
      @media screen and (max-width: 1960px) and (max-height: 2560px){
        h3{
          font-size: 4rem;
          left: 4%;
        }
      }
      @media screen and (max-width: 1960px) and (max-height: 1230px){
        .container{
          background-size: 55%;
        }
        h1{
          font-size: 13rem;
        }
        h3{
          font-size: 4rem;
          left: 4%;
        }
        p{
          font-size: 3.2rem;
        }
      }
      @media screen and (max-width: 1960px) and (max-height: 1027px){
        .container{
          background-size: 45%;
        }
        h1{
          font-size: 12rem;
        }
        h3{
          font-size: 3.6rem;
          left: 7.5%;
        }
        p{
          font-size: 3rem;
        }
      }
      @media screen and (max-width: 1960px) and (max-height: 860px){
        .container{
          background-position: 100% 100%;
          background-size: 38%;
        }
      }
      @media screen and (max-width: 1960px) and (max-height: 755px){
        .container{
          background-position: 100% 100%;
          background-size: 34%;
        }
        h1{
          font-size: 11rem;
        }
        h3{
          font-size: 3.4rem;
          left: 10%;
          top: 56%;
        }
        p{
          font-size: 2.75rem;
        }
      }
      @media screen and (max-width: 1960px) and (max-height: 690px){
        .container{
          background-position: 80% 100%;
          background-size: 30%;
        }
        h1{
          font-size: 13rem;
          top: 30%;
        }
        h3{
          font-size: 3.4rem;
          left: 5%;
          top: 95%;
        }
        p{
          font-size: 2.75rem;
        }
      }
      @media screen and (max-width: 1960px) and (max-height: 625px){
        .container{
          background-position: 80% 100%;
          background-size: 27%;
        }
        h1{
          font-size: 12.5rem;
        }
        h3{
          font-size: 3.3rem;
          left: 7%;
        }
        p{
          font-size: 2.55rem;
        }
      }

      @media screen and (max-width: 1810px) and (max-height: 2560px) {
        h1{
          font-size: 13rem;
        }
      }

      @media screen and (max-width: 1660px) and (max-height: 2560px) {
        .container{
          background-size: 75%;
          max-height: 85rem;
        }
        h1{
          font-size: 11.3rem;
        }
        p{
          font-size: 3.4rem;
        }
      }
      @media screen and (max-width: 1660px) and (max-height: 1130px) {
        .container{
          background-size: 60%;
        }
        h1{
          font-size: 10.5rem;
        }
        h3{
          font-size: 3.3rem;
          left: 6%;
          top: 49%;
        }
        p{
          font-size: 2.8rem;
        }
      }
      @media screen and (max-width: 1660px) and (max-height: 940px) {
        .container{
          background-position: 100% 100%;
          background-size: 48%;
        }
      }
      @media screen and (max-width: 1660px) and (max-height: 785px) {
        .container{
          background-position: 85% 100%;
          background-size: 41%;
        }
        h1{
          font-size: 11rem;
        }
        p{
          font-size: 2.5rem;
        }
      }
      @media screen and (max-width: 1660px) and (max-height: 690px) {
        .container{
          background-position: 85% 100%;
          background-size: 37%;
        }
        h1{
          top: 20%;
          font-size: 11rem;
        }
        h3{
          font-size: 3rem;
          left: 4%;
          top: 65%;
        }
        p{
          font-size: 2.5rem;
        }
      }
      @media screen and (max-width: 1660px) and (max-height: 645px) {
        .container{
          background-position: 85% 100%;
          background-size: 34%;
        }
      }

      @media screen and (max-width: 1650px) and (max-height: 2560px) {
        .container{
          background-position: 105% 100%;
          background-size: 65%;
        }
        h1{
          font-size: 13rem;
        }
        h3{
          left: 1%;
        }
        p{
          font-size: 3.5rem;
        }
      }
      @media screen and (max-width: 1650px) and (max-height: 1130px) {
        .container{
          background-size: 53%;
        }
        h3{
          font-size: 4rem;
          left: 2.5%;
        }
        p{
          font-size: 3.1rem;
        }
      }
      @media screen and (max-width: 1650px) and (max-height: 955px) {
        .container{
          background-size: 44%;
        }
        p{
          font-size: 2.85rem;
        }
      }
      @media screen and (max-width: 1650px) and (max-height: 815px) {
        .container{
          background-position: 90% 100%;
          background-size: 35%;
        }
        h1{
          font-size: 12rem;
        }
        h3{
          font-size: 3.5rem;
          left: 5%;
        }
        p{
          font-size: 2.8rem;
        }
      }
      @media screen and (max-width: 1650px) and (max-height: 680px) {
        .container{
          background-position: 85% 100%;
          background-size: 29%;
        }
        h1{
          font-size: 12rem;
        }
        p{
          font-size: 2.6rem;
        }
      }

      @media screen and (max-width: 1480px) and (max-height: 2560px) {
        .container{
          max-height: 80rem;
        }
        h3{
          font-size: 4rem;
        }
        h1{
          font-size: 11rem;
        }
      }

      @media screen and (max-width: 1365px) and (max-height: 2560px)  {
        .container{
          max-height: 75rem;
        }
      }

      @media screen and (max-width: 1270px) and (max-height: 2560px){
        .container{
          max-height: 65rem;
        }
        h3{
          font-size: 3.5rem;
          left: 5%;
        }
        h1{
          font-size: 9.5rem;
        }
        p{
          font-size: 2.75rem;
        }
      }
      @media screen and (max-width: 1270px) and (max-height: 1130px){
        .container{
          background-position: 110% 100%;
          background-size: 65%;
        }
      }
      @media screen and (max-width: 1270px) and (max-height: 910px){
        .container{
          background-position: 110% 100%;
          background-size: 53%;
        }
      }
      @media screen and (max-width: 1270px) and (max-height: 765px){
        .container{
          background-position: 85% 100%;
          background-size: 45%;
        }
        h3{
          font-size: 3rem;
          left: 6%;
        }
        h1{
          font-size: 9.3rem;
        }
        p{
          font-size: 2.2rem;
        }
      }
      @media screen and (max-width: 1270px) and (max-height: 765px){
        .container{
          background-position: 85% 100%;
          background-size: 39%;
        }
        h3{
          font-size: 3rem;
          left: 6%;
          top: 100%;
        }
        h1{
          top: 33%;
          font-size: 9.3rem;
        }
        p{
          font-size: 2.15rem;
        }
      }

      @media screen and (max-width: 1165px) and (max-height: 2560px){

        h3{
          font-size: 3rem;
        }
        h1{
          font-size: 8.5rem;
        }
        p{
          font-size: 2.5rem;
        }
      }

      @media screen and (max-width: 1065px) and (max-height: 2560px){
        .container{
          max-height: 55rem;
        }
        h3{
          top: 105%;
          font-size: 2.8rem;
        }
        h1{
          top: 40%;
          font-size: 8rem;
        }
        p{
          font-size: 2.2rem;
        }
      }
      @media screen and (max-width: 1065px) and (max-height: 795px){
        .container{
          background-position: 100% 100%;
          background-size: 45%;
        }
      }
      @media screen and (max-width: 1065px) and (max-height: 715px){
        .container{
          background-position: 100% 100%;
          background-size: 38%;
        }
        h3{
          top: 112%;
          left: 9%;
          font-size: 2.4rem;
        }
        h1{
          top: 40%;
          font-size: 7rem;
        }
        p{
          font-size: 1.8rem;
        }
      }
      @media screen and (max-width: 1065px) and (max-height: 650px){
        .container{
          background-position: 95% 100%;
          background-size: 33%;
        }
        p{
          font-size: 1.7rem;
        }
      }

      @media screen and (max-width: 980px)  and (max-height: 2560px){
        .container{
          max-height: 50rem;
        }
        h1{
          top: 35%;
          font-size: 7.3rem;
        }
        h3{
          top: 92%;
          font-size: 2.7rem;
        }
        p{
          font-size: 1.9rem;
        }
      }
      @media screen and (max-width: 980px)  and (max-height: 715px){
        .container{
          background-position: 95% 100%;
          background-size: 43%;
        }
        h1{
          top: 35%;
          font-size: 6.5rem;
        }
        h3{
          top: 95%;
          font-size: 2rem;
        }
        p{
          font-size: 1.7rem;
        }
      }
      @media screen and (max-width: 980px)  and (max-height: 670px){
        .container{
          background-position: 95% 100%;
          background-size: 37%;
        }
        h1{
          top: 50%;
          font-size: 6.5rem;
        }
        h3{
          top: 135%;
          font-size: 2rem;
        }
        p{
          font-size: 1.65rem;
        }
      }
      @media screen and (max-width: 980px)  and (max-height: 612px){
        .container{
          background-position: 80% 100%;
          background-size: 33%;
        }
      }

      @media screen and (max-width: 900px)  and (max-height: 2560px){
        .container{
          max-height: 50rem;
          background-position: 110% 100%;
          background-size: 70%;
        }
        h1{
          font-size: 6.8rem;
        }
        h3{
          left: 2%;
          font-size: 2.7rem;
        }
        p{
          font-size: 1.75rem;
        }
      }
      @media screen and (max-width: 900px)  and (max-height: 865px){
        .container{
          background-position: 110% 100%;
          background-size: 58%;
        }
      }
      @media screen and (max-width: 900px)  and (max-height: 760px){
        .container{
          background-position: 100% 100%;
          background-size: 50%;
        }
        p{
          font-size: 1.65rem;
        }
      }
      @media screen and (max-width: 900px)  and (max-height: 715px){
        .container{
          background-position: 95% 100%;
          background-size: 47%;
        }
        h3{
          left: 3.5%;
        }
        p{
          font-size: 1.55rem;
        }
      }
      @media screen and (max-width: 900px)  and (max-height: 670px){
        .container{
          background-position: 80% 100%;
          background-size: 37%;
        }
        h1{
          top: 45%;
          font-size: 6rem;
        }
        h3{
          top: 120%;
          left: 6%;
          font-size: 2.3rem;
        }
        p{
          font-size: 1.55rem;
        }
      }

      @media screen and (max-width: 790px)  and (max-height: 2560px){
        .container{
          background-position: 130% 100%;
          background-size: 80%;
        }
        h1{
          font-size: 6rem;
        }
        h3{
          font-size: 2.6rem;
        }
      }
      @media screen and (max-width: 790px)  and (max-height: 870px){
        .container{
          background-position: 130% 100%;
          background-size: 67%;
        }
        h1{
          font-size: 6.5rem;
        }
        h3{
          font-size: 2rem;
          left: 2%;
        }
        p{
          font-size: 1.5rem;
        }
      }
      @media screen and (max-width: 790px)  and (max-height: 785px){
        .container{
          background-position: 110% 100%;
          background-size: 56%;
        }
      }
      @media screen and (max-width: 790px)  and (max-height: 705px){
        .container{
          background-position: 100% 100%;
          background-size: 50%;
        }
      }
      @media screen and (max-width: 790px)  and (max-height: 660px){
        .container{
          background-position: 100% 100%;
          background-size: 41%;
        }
        h1{
          font-size: 6rem;
        }
        h3{
          font-size: 1.9rem;
          left: 3%;
        }
        p{
          font-size: 1.25rem;
        }
      }

      @media screen and (max-width: 720px)  and (max-height: 1920px){
        .container{
          background-position: 140% 100%;
          background-size: 73%;
          height: 46vh;
          min-height: 29rem;
          max-height: 50rem;
        }
        h1{
          font-size: 5.6rem;
          top: 30%;
        }
        h3{
          font-size: 1.5rem;
          left: 4%;
          top: 82%;
        }
        p{
          font-size: 1.4rem;
        }
      }

      @media screen and (max-width: 720px)  and (max-height: 1280px){
        .container{
          background-position: 140% 100%;
          background-size: 73%;
          height: 50vh;
          min-height: 40rem;
        }
        h1{
          font-size: 5.5rem;
          top: 40%;
        }
        h3{
          font-size: 1.4rem;
          left: 5%;
          top: 107%;
        }
        p{
          font-size: 1.3rem;
        }
      }

      @media screen and (max-width: 720px)  and (max-height: 1315px){
        .container{
          background-position: 140% 100%;
          background-size: 73%;
          height: 48vh;
        }
        h1{
          font-size: 5.6rem;
          top: 30%;
        }
        h3{
          font-size: 1.5rem;
          top: 85%;
        }
        p{
          font-size: 1.4rem;
        }
      }

      @media screen and (max-width: 720px)  and (max-height: 1371px){
        .container{
          height: 46vh;
        }
        h1{
          font-size: 5.6rem;
          top: 30%;
        }
        h3{
          left: 4%;
          font-size: 1.5rem;
          top: 82%;
        }
        p{
          font-size: 1.4rem;
        }
      }














      @media screen and (max-width: 700px)  and (max-height: 2560px){
        .container{
          max-height: 42rem;
          background-position: 100% 100%;
          background-size: 70%;
        }
        h1{
          font-size: 4.5rem;
        }
        h3{
          font-size: 1.5rem;
          left: 7%;
        }
        p{
          font-size: 1.1rem;
          padding: 1.3rem 0;
        }
      }
      @media screen and (max-width: 670px)  and (max-height: 2560px){
        .container{
          max-height: 39rem;
          background-position: 100% 100%;
          background-size: 70%;
        }
        p{
          font-size: 1rem;
          padding: 1.2rem 0;
        }
      }
      @media screen and (max-width: 610px)  and (max-height: 2560px){
        .container{
          max-height: 37rem;
          background-position: 100% 100%;
          background-size: 70%;
        }
        h1{
          font-size: 4.2rem;
        }
        h3{
          font-size: 1.44rem;
          left: 7%;
        }
        p{
          font-size: 0.9rem;
          padding: 1rem 0;
        }
      }

      @media screen and (max-width: 570px)  and (max-height: 560px){
        .container{
          max-height: 33rem;
        }
      }

      @media screen and (max-width: 540px)  and (max-height: 560px){
        .container{
          max-height: 31rem;
        }
        h1{
          font-size: 3.5rem;
        }
        h3{
          font-size: 1.3rem;
        }
        p{
          font-size: 0.8rem;
        }
      }

      @media screen and (max-width: 500px)  and (max-height: 560px){
        .container{
          max-height: 29rem;
          min-width: 500px;
        }
        h1{
          font-size: 3.5rem;
        }
        h3{
          font-size: 1.3rem;
        }
        p{
          font-size: 0.8rem;
        }
      }
    `}</style>
  </section>
}
export default FrontLayout
