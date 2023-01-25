import DescriptionCard from './DescriptionCard'


const Cards = ({row, text, back, id, cardSelected, setcardSelected}) => {
    console.log('id')

    return <article onClick={() => setcardSelected(id)} className="container">

        <h1>{text}</h1>

        <style jsx>{`

            .container {
                grid-row: ${row};
                font-family: 'Karla', sans-serif;
                background-image: ${back};
                background-position: center;
                background-size: 100%;
                background-attachment: local;
                cursor: pointer;
                width: 80%;
                height: 100px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                justify-items: center; 
                align-items: center;
                border: 0;
                outline: 0;
                padding: 3px;
                box-sizing: border-box;
                box-shadow: -5px -5px 10px #c4b78c,  5px 5px 10px #968c6c;
                border-radius: 7rem;
                line-height: 0;
                transition: all 0.2s ease-in-out;
            }
            .container:hover{
                box-shadow: -2px -2px 5px #c4b78c, 2px 2px 5px #968c6c;
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
                transition: letter-spacing 0.4s ease-in-out;
                
            }

            .container:hover h1{
                letter-spacing: 0px;
                color: #fefae0;
            }

        `}</style>
    </article>
}

export default Cards