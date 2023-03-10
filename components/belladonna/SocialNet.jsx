const SocialNet = ({text, color, children, href}) => {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="container">

        <div className="child">
            {children}
        </div>
        <style jsx>{`
            .container {
                justify-self: center;
                align-self: center;
                width: auto;
                height: auto;
                border: none;
                cursor: pointer;
                margin:3px;
                padding: 3px 10px;
                display: grid;
                justify-content: center;
                align-content: center;
                --c:  transparent;
                box-shadow: 0 0 0 .1em inset var(--c); 
                --_g: linear-gradient(${color} 0 0) no-repeat;
                border-radius: 10px;
                background: 
                    var(--_g) calc(var(--_p,0%) - 100%) 0%,
                    var(--_g) calc(200% - var(--_p,0%)) 0%,
                    var(--_g) calc(var(--_p,0%) - 100%) 100%,
                    var(--_g) calc(200% - var(--_p,0%)) 100%;
                background-size: 50.5% calc(var(--_p,0%)/2 + .5%);
                outline-offset: .1em;
                transition: background-size .4s, background-position 0s .4s;
            }
            .container:hover {
                --_p: 100%;
                transition: background-position .4s, background-size 0s;
                --c:  ${color};
            }
            .container:active {
                box-shadow: 0 0 9e9q inset #0009; 
                background-color: var(--c);
                color: #fff;
            }

            .child{
                width: 50px;
                padding-top: 3px;
            }

            @media (max-width: 1280px){
                .child{
                    width: 60px;
                }
            }
            @media (max-width: 1024px){
                .child{
                    width: 50px;
                }
            }
            @media (max-width: 768px){
                .child{
                    width: 50px;
                }
            }
            @media (max-width: 414px){
                .child{
                    width: 35px;
                }
            }

            @media (max-width: 390px){
                .child{
                    width: 30px;
                }
            }
        `}</style>
    </a>
}
export default SocialNet