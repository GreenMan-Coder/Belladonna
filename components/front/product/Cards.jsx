
const Cards = ({pos, text, back, id, cardSelected, setcardSelected}) => {

    return <article onClick={() => setcardSelected(id)} className="container">

        <h1>{text}</h1>

        <style jsx>{`

            .container {
                grid-row: 4/5;
                grid-column: 1/5;
                justify-self: ${pos};
                font-family: 'Karla', sans-serif;
                background-image: url(./img/trunk/bikini.jpg);
                background-position: center;
                background-size: 100%;
                background-attachment: local;
                cursor: pointer;
                width: 20%;
                height: 70px;
                display: grid;
                justify-items: center;
                align-items: center;
                border: 0;
                outline: 0;
                box-sizing: border-box;
                margin: 0 3rem;
                box-shadow: -5px -5px 10px #c4b78c,  5px 5px 10px #968c6c;
                border-radius: 10px;
                line-height: 0;
                transition: all 0.2s ease-in-out;
            }
            .container:hover{
                box-shadow: -2px -2px 5px #c4b78c, 2px 2px 5px #968c6c;
                opacity: 0.9;
            }
            .container:active {
                box-shadow: inset 1px 1px 2px #968c6c, inset -1px -1px 2px #c4b78c;
            }

            h1{
                text-transform: uppercase;
                font-size: 24px;
                font-weight: 800;
                letter-spacing: -1px;
                color: #e7822f;
                transition: color 0.1s ease-in-out;
                transition: font-size 0.1s ease-in-out;
            }
            .container:hover h1{
                letter-spacing: 0px;
                color: #f36e01;
                font-size: 26px;
            }

            @media (max-width: 1086px){
                .container {
                    grid-row: 5/6;
                    grid-column: 1/2;
                    justify-self: flex-end;
                    align-self:  ${text === "bikini" ? 'flex-start' : ''} ${text === "superior" ? 'center' : ''} ${text === "inferior" ? 'flex-end' : ''};
                    width: 10rem;
                    height: auto;
                    margin: 0;
                    padding: 7px;
                    margin-bottom: 20px;
                }
                h1{
                    font-size: 15px;
                }
                .container:hover h1{
                    letter-spacing: 0px;
                    color: #f36e01;
                    font-size: 17px;
                }
            }
        `}</style>
    </article>
}

export default Cards