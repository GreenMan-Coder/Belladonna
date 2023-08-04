const Nav = ({text, id, setcardSelected}) => {


    return <article onClick={() => setcardSelected(id)}>

        <h3>{text}</h3>
        <style jsx>{`

            article{
                width: auto;
                height: auto;
                position: relative;
            }
            h3{
                position: absolute;
                margin: 0;
                left: 2em;
                text-transform: uppercase;
                font-size: 13px;
                cursor: pointer;
            }
        `}</style>
    </article>
}

export default Nav
