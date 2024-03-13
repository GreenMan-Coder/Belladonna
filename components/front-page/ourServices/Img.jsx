const Img = ({ image }) => {
    return <div className="container">
        <img src={image} alt="Depilación"/>
        <style jsx>{`
        .container {
            grid-column: 1/2;
            justify-self: end;
            box-sizing: border-box;
            margin-right: 3%;
            align-self: center;
            box-sizing: border-box;
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            transition: all 300ms;
            height: 28em;
            width: 28em;
        }
        .container:hover{
            transform: translateY(-2px);
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media screen and (max-width: 920px){
          .container{
            height: 30em;
          }
        }

        @media screen and (max-width: 870px){
          .container{
            height: 35em;
            width: 30em;
          }
        }

        @media screen and (max-width: 620px) {
          .container{
            height: 29em;
          }
        }

    `}</style>
    </div>
}
export default Img
