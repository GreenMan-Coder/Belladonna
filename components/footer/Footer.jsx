
const Footer = () => {
    return <footer className="container">
        <h1>Gracias por tu visita, ¡compartenos con tus familiares y amigas!</h1>
        <p>Teléfono: +57 322-304-3604</p>
        <style jsx>{`
            .container {
                background: var(--dark-purple);
                display: grid;
                justify-items: center;
                align-items: center;
            }
            h1{
                color: var(--light-purple);
                text-align: center;
                font-size: 1.2em;
            }
            p{
                color: var(--normal-purple);
                text-align: center;
                font-size: 1em;
            }
        `}</style>
    </footer>
}
export default Footer
