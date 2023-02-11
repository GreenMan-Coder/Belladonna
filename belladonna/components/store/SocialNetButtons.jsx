const SocialNetButtons = ({col, children, color, href}) => {
    return <a href={href}  target="_blank" className="container">
            <div className="child">
                {children}
            </div>

        <style jsx>{`

            .container {
                grid-column: ${col};
                grid-row: 1/2;
                justify-self: center;
                align-self: flex-end;
                width: 5rem;
                height: 4rem;
                border: none;
                cursor: pointer;
                margin:3px;
                padding: 3px;
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
                width: 3rem;
            }
        `}</style>
    </a>
}
export default SocialNetButtons