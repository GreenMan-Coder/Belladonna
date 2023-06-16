const Test = () => {
    return <div className="container">
        <div className="step">
            <div className="decoration"></div>
            <h3>Paso 1</h3>
            <p>Descripción del paso 1</p>
        </div>
        <div className="step">
            <div className="decoration"></div>
            <h3>Paso 2</h3>
            <p>Descripción del paso 2</p>
        </div>
        <div className="step">
            <div className="decoration"></div>
            <h3>Paso 3</h3>
            <p>Descripción del paso 3</p>
        </div>

        <style jsx>{`
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .step {
            position: relative;
            text-align: center;
            padding: 20px;
            background-color: #f2f2f2;
            border-radius: 5px;
            margin: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .step .decoration {
            position: absolute;
            top: -20px;
            left: -20px;
            width: 40px;
            height: 40px;
            background-color: #f2f2f2;
            border-top-left-radius: 50%;
            transform: rotate(45deg);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .step h3 {
            margin-top: 0;
        }

        .step p {
            margin-bottom: 0;
        }
        `}</style>
    </div>
}
export default Test