const NavDepilation = ({ text, id, setcardSelected }) => {
    return <article>
        <h3 onClick={() => setcardSelected(id)}>{text} </h3>
        <style jsx>{`
            article{
                display: grid;
                justify-items: center;
                align-items: center;
            }
            h3{
                text-transform: uppercase;
                font-size: .8em;
                color: var(--normal-purple);
                cursor: pointer;
            }

            h3:hover{
                font-weight: 900;
            }
        `}</style>
    </article>
}

export default NavDepilation
