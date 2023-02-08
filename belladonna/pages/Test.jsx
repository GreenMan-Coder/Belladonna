const Test = () => {
    return <div className="container">
        
        <div className="milky">
            Milky
        </div>

        <style jsx>{`
            .container {
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: "Monoton", Helvetica, sans-serif;
            }

            .milky {
                font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;;
                text-transform: uppercase;
                display: block;
                font-size: 92px;
                color: #f1ebe5;
                text-shadow: 0 8px 9px #c4b59d, 0px -2px 1px #fff;
                font-weight: bold;
                letter-spacing: -4px;
                text-align: center;
                background: linear-gradient(to bottom, #ece4d9 0%,#e9dfd1 100%);
                position: absolute;
                padding: 100px 200px;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                border-radius: 20px;
            }

        `}</style>
    </div>
}
export default Test