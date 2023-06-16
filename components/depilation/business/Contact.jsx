const Contact = ({pos, text}) => {
    return <div className="container">

        <a href="#"><span>{text}</span></a>

        <style jsx>{`
            .container {
                grid-row: 3/4;
                grid-column: 1/3;
                align-self: flex-start;
                justify-self: ${pos};
                width: 40%;
                height: 40%;
                text-decoration: none;
                text-align: center;
                background: none;
                border: solid 2px var(--normal-purple);
                color: var(--normal-purple);
                cursor: pointer;
                font-weight: 700;
                text-transform: uppercase;
                -webkit-transition: all 0.3s;
                    -moz-transition: all 0.3s;
                    -ms-transition: all 0.3s;
                    -o-transition: all 0.3s;
                    transition: all 0.3s;
                    font-family: var(--font);
            }
            .container:hover{
                background: var(--normal-purple);
            }
            .container:hover a{
                color: var(--purple-blanco); 
            }
            a{
                text-decoration: none;
                box-sizing: border-box;
                position: relative;
                top: 16px;
                -webkit-transition: all 0.3s;
                    -moz-transition: all 0.3s;
                    -ms-transition: all 0.3s;
                    -o-transition: all 0.3s;
                    transition: all 0.3s;
            }
        `}</style>
    </div>
}
export default Contact