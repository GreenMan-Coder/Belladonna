const Img = ({image}) => {
  return <div className="container">
    <img src={image} alt="Depilación"/>
    <style jsx>{`
        .container {
          grid-column: 1/2;
          justify-self: end;
          align-self: center;
          box-sizing: border-box;
          width: 70%;
          height: 90%;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
          transition: all 300ms;
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
        @media screen and (max-width: 280px) {
          .container{
            justify-self: center;
            width: 95%;
            height: 100%;
            box-sizing: content-box;
          }
        }
    `}</style>
  </div>
}
export default Img
