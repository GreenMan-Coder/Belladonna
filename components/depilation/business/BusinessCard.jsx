const BusinessCard = ({text, title, description, top}) => {
    return <section className="container" style={{ '--description': `'${description}'` }}>
        
        <div className="decoration"></div>
        <h3>{title}</h3>
        <p>{text}</p>

        <style jsx>{`
            .container {
                position: relative;
                text-align: center;
                padding: 20px;
                border-radius: 5px;
                margin: 10px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                width: 300px;
                height: 100px;
                background-color: var(--light-purple);
            }
            .container .decoration {
                position: absolute;
                top: -20px;
                left: -20px;
                width: 40px;
                height: 40px;
                background-color: var(--normal-purple);
                border-top-left-radius: 50%;
                transform: rotate(45deg);
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                
            }
            .container::after{
                visibility: hidden;
                content: var(--description);
                position: absolute;
                top: 6px;
                right: -37em;
                width: 200%;
                height: 90%;
                border-radius: 5px;
                opacity: 0;
                transition: opacity 0.2s ease-in-out;
                color: var(--tone-purple);
                text-align: center;
                font-size: 18px;
                font-weight: 400;
                text-align: center;
                box-sizing: border-box;
                padding: 20px;
                padding-top: ${top};
                background-color: var(--light-purple);
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }
            .container:hover::after{
                opacity: 1;
                transition: opacity 0.5s ease-in-out;
                visibility: visible;
            }


            .container h3 {
                margin: 0;
                color: var(--normal-purple);
                align-self: center;
                font-size: 35px;
                font-weight: 700;
            }

            .container p {
                margin: 0;
                margin-top: 10px;
                color: var(--tone-purple);
                font-size: 18px;
                font-weight: 400;
                text-align: center;
            }
        `}</style>
    </section>
}
export default BusinessCard