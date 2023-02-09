const Menu = () => {
    return <div className="container">

        <div className="nav">
            <input type="checkbox"/>
                <span></span>
                <span></span>
                <div className="menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Depilación</a></li>
                    <li><a href="#">Belladonna</a></li>
                </div>
        </div>

        <style jsx>{`
        .container {
                position: fixed;
                left: 10px;
                top: 0;
                z-index: 2;
                height: 5rem;
                width: auto;
                margin: 0;
                padding: 0;
                background-color: transparent;
            }

            .container, .nav, .menu {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .nav {
                position: relative;
                background-color: #fff;
                padding: 10px;
                transition: 0.5s;
                border-radius: 50px;
                overflow: hidden;
                box-shadow: 0 8px 15px rgba(0,0,0,.2);
            }

            .menu {
                margin: 0;
                padding: 0;
                width: 0;
                overflow: hidden;
                transition: 0.5s;
            }

            .nav input:checked ~ .menu {
                width: 300px;
            }

            .menu li {
                list-style: none;
                margin: 0 10px;
            }

            .menu li a {
                text-decoration: none;
                color: #666;
                text-transform: uppercase;
                font-weight: 600;
                transition: 0.5s;
                font-size: 15px;
            }

            .menu li a:hover {
                color: #161919;
            }

            .nav input {
                width: 30px;
                height: 30px;
                cursor: pointer;
                opacity: 0;
            }

            .nav span {
                position: absolute;
                left: 17px;
                width: 25px;
                height: 4px;
                border-radius: 50px;
                background-color: #666;
                pointer-events: none;
                transition: 0.5s;
            }

            .nav input:checked ~ span {
                background-color: #f974a1;
            }

            .nav span:nth-child(2) {
                transform: translateY(-8px);
            }

            .nav input:checked ~ span:nth-child(2) {
                transform: translateY(0) rotate(-45deg);
            }
            .nav span:nth-child(3) {
                transform: translateY(8px);
            }

            .nav input:checked ~ span:nth-child(3) {
                transform: translateY(0) rotate(45deg);
            }
        `}</style>
    </div>
}
export default Menu