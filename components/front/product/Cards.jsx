import { useEffect, useState } from "react"

const Cards = ({pos, text, id, setcardSelected}) => {


    return <article onClick={() => setcardSelected(id)} className="container">

        <h1>{text}</h1>

        <style jsx>{`

            
            .container {
                background: linear-gradient(to bottom, #f0acaa 0%,#db99e2 100%);
                user-select: none;
                grid-row: 4/5;
                grid-column: 1/5;
                justify-self: ${pos};
                font-family: 'Karla', sans-serif;
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
                color: #FFF;
                transition: color 0.1s ease-in-out;
                transition: font-size 0.1s ease-in-out;
            }
            .container:hover h1{
                letter-spacing: 0px;
                color: ##FFF;
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
            @media (max-width: 672px){
                .container {
                    width: 7rem;
                    height: auto;
                }
            }
            @media (max-width: 508px){
                .container {
                    grid-row: 5/6;
                    grid-column: 1/5;
                    justify-self:  ${text === "bikini" ? 'center' : ''} ${text === "superior" ? 'flex-start' : ''} ${text === "inferior" ? 'flex-end' : ''};
                    align-self: center;
                    margin: 10px 8px;
                }
                h1{
                    font-size: 12px;
                    text-align: center;
                }
                .container:hover h1{
                    font-size: 14px;
                }
            }
        `}</style>
    </article>
}

export default Cards