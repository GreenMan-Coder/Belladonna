const NetsButtons = ({text, children }) => {
    return <a href="#" className="container">
        {children}
        <span>{text}</span>
        <style jsx>{`
            .container {
                float: left;
                white-space: nowrap;
                margin: 5px;
                border-radius:5px;
                background: -moz-linear-gradient(-45deg, #ffffff 0%, #ffffff 50%, #F2F2F2 50%, #F2F2F2 50%, #F2F2F2 100%);
                background: -webkit-linear-gradient(-45deg, #ffffff 0%,#ffffff 50%,#F2F2F2 50%,#F2F2F2 50%,#F2F2F2 100%);
                background: -o-linear-gradient(-45deg, #ffffff 0%,#ffffff 50%,#F2F2F2 50%,#F2F2F2 50%,#F2F2F2 100%);
                background: -ms-linear-gradient(-45deg, #ffffff 0%,#ffffff 50%,#F2F2F2 50%,#F2F2F2 50%,#F2F2F2 100%);
                background: linear-gradient(135deg, #ffffff 0%,#ffffff 50%,#F2F2F2 50%,#F2F2F2 50%,#F2F2F2 100%);
                box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.35);
                -webkit-transition:all .3s;
                -moz-transition:all .3s;
                transition:all .3s;
                display: inline-block;
                cursor: pointer;
                text-decoration: none;
            }
            .container:hover {
                box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.45);
            }
            .container:focus {
                background: -moz-linear-gradient(-45deg, #ffffff 0%, #ffffff 50%, #cb9acb 50%, #cb9acb 50%, #cb9acb 100%);
                background: -webkit-linear-gradient(-45deg, #ffffff 0%, #ffffff 50%, #cb9acb 50%, #cb9acb 50%, #cb9acb 100%);
                background: -o-linear-gradient(-45deg, #ffffff 0%, #ffffff 50%, #cb9acb 50%, #cb9acb 50%, #cb9acb 100%);
                background: -ms-linear-gradient(-45deg, #ffffff 0%, #ffffff 50%, #cb9acb 50%, #cb9acb 50%, #cb9acb 100%);
                background: linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #cb9acb 50%, #cb9acb 50%, #cb9acb 100%);
            }
            span{
                position: relative;
                top: 30px;
                float: right;
                padding: 13px;
                -webkit-transition: all .3s;
                -moz-transition: all .3s;
                transition: all .3s;
                font-size: 18px;
                color: #474544;
            }
        `}</style>
    </a>
}
export default NetsButtons