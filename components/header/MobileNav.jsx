
const MobileNav = () => {
    return (
        <div>
            <h1>menu hamburguesa</h1>
            <style jsx>{`
                div {
                    display: none;
                }

                @media screen and (max-width: 870px) {
                    div {
                        display: block;
                    }
                }
            `}</style>
        </div>
    )
}

export default MobileNav
