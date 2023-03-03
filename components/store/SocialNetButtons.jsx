const SocialNetButtons = ({col, row, children, color, href}) => {
    return <a href={href}  target="_blank" rel="noopener noreferrer"className="container">
            
            <div className="child">
                {children}
            </div>

        <style jsx>{`

            .container {
                grid-column: ${col};
                grid-row: ${row};
                justify-self: center;
                align-self: center;
                box-sizing: border-box;
                padding: 3px;
                margin-top: 4.5em;
                width: 5.5rem;
                height: 6rem;
                border: none;
                cursor: pointer;
                display: grid;
                justify-content: center;
                align-content: center;
                --c:  ${color};
                box-shadow: 0 0 0 .1em inset var(--c); 
                --_g: linear-gradient(var(--c) 0 0) no-repeat;
                border-radius: 10px;
                background: 
                    var(--_g) calc(var(--_p,0%) - 100%) 0%,
                    var(--_g) calc(200% - var(--_p,0%)) 0%,
                    var(--_g) calc(var(--_p,0%) - 100%) 100%,
                    var(--_g) calc(200% - var(--_p,0%)) 100%;
                background-size: 50.5% calc(var(--_p,0%)/2 + .5%);
                outline-offset: .1em;
                transition: background-size .4s, background-position 0s .4s;
                border-bottom: 5px solid ${color}; 
            }
            .container:hover {
                --_p: 100%;
                transition: background-position .4s, background-size 0s;
            }
            .container:active {
                box-shadow: 0 0 9e9q inset #0009; 
                background-color: var(--c);
                color: #fff;
            }

            .child{
                width: 5rem;
                box-sizing: border-box;
                padding-top: 5px;
            }

            @media (max-width: 1280px){
                .container{
                    margin-top: 5.5em;
                }
            }
            @media (max-width: 586px){
                .container{
                    margin-top: 5em;
                }
                .child{
                    width: 3.5rem;
                }
            }
            @media (max-width: 440px){
                .container{
                    width: auto;
                    height: 3.5em;
                    margin-top: 3.5em;
                }
                .child{
                    width: 3rem;
                }
            }
            @media (max-width: 414px){
                .container{
                    width: auto;
                    height: 4em;
                    margin-top: 4.2em;
                }
                .child{
                    width: 3rem;
                    box-sizing: border-box;
                    padding-top: 5px;
                }
            }
        `}</style>
    </a>
}
export default SocialNetButtons