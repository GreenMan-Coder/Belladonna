const NetsButtons = ({col, w, h, text, children }) => {
  return <a href="#" className="container">
    {children}
    <span>{text}</span>
    <style jsx>{`
      .container {
        grid-column: ${col};
        width: ${w};
        height: ${h};
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        align-items: center;
        border-radius:5px;
        background: -moz-linear-gradient(-45deg, #cb9acb 0%, #cb9acb 50%, #fcf2fb 50%, #fcf2fb 50%, #fcf2fb 100%);
        background: -webkit-linear-gradient(-45deg, #cb9acb 0%,#cb9acb 50%,#fcf2fb 50%,#fcf2fb 50%,#fcf2fb 100%);
        background: -o-linear-gradient(-45deg, #cb9acb 0%,#cb9acb 50%,#fcf2fb 50%,#fcf2fb 50%,#fcf2fb 100%);
        background: -ms-linear-gradient(-45deg, #cb9acb 0%,#cb9acb 50%,#fcf2fb 50%,#fcf2fb 50%,#fcf2fb 100%);
        background: linear-gradient(135deg, #cb9acb 0%,#cb9acb 50%,#fcf2fb 50%,#fcf2fb 50%,#fcf2fb 100%);
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.35);
        -webkit-transition:all .3s;
        -moz-transition:all .3s;
        transition:all .3s;
        cursor: pointer;
        text-decoration: none;
      }
      .container:hover {
          box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.45);
      }
      .container:focus {
          background: -moz-linear-gradient(-45deg, #fcf2fb 0%, #fcf2fb 50%, #cb9acb 50%, #cb9acb 50%, #cb9acb 100%);
          background: -webkit-linear-gradient(-45deg, #fcf2fb 0%, #fcf2fb 50%, #cb9acb 50%, #cb9acb 50%, #cb9acb 100%);
          background: -o-linear-gradient(-45deg, #fcf2fb 0%, #fcf2fb 50%, #cb9acb 50%, #cb9acb 50%, #cb9acb 100%);
          background: -ms-linear-gradient(-45deg, #fcf2fb 0%, #fcf2fb 50%, #cb9acb 50%, #cb9acb 50%, #cb9acb 100%);
          background: linear-gradient(135deg, #fcf2fb 0%, #fcf2fb 50%, #cb9acb 50%, #cb9acb 50%, #cb9acb 100%);
      }
      span{
        margin: 0;
        padding: 0;
        align-self: end;
        position: relative;
        bottom: 7%;
        font-size: 1.2em;
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        transition: all .3s;
        color: #474544;
      }
    `}</style>
  </a>
}
export default NetsButtons
