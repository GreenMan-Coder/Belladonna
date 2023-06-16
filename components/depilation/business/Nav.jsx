const Nav = ({children, text, setSection, id}) => {

    return <article className="container" onClick={() => setSection(id)}>
        <h1>{text}</h1>
        {children}
        

        <style jsx>{`
            .container {
                background: var(--light-pink);
                height: 100%;
                width: 30%;
                display: grid;
                justify-items: center;
                align-items: center;
            }
            .container:hover{
                cursor: pointer;
            }
            h1{
                margin: 0;
            }
        `}</style>
    </article>
}
export default Nav