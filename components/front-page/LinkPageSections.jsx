import Link from 'next/link';

const LinkPageSections = ({href, clase, text, numberLink, col}) => {

    return <div className={clase}>
        <div className="link-container">
            <Link href={href} legacyBehavior>
                    <a className={numberLink}>&bull; {text} &bull;</a>
            </Link>
        </div>

        <style jsx>{`

            .${clase}{
                background: transparent;
                height: 100%;
                grid-column: ${col};
            }

            .link-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
                position: relative;
                z-index: 0;
            }

            .${numberLink}{
                font-family: 'Karla', sans-serif;
                font-size: 3rem;
                text-align: center;
                text-decoration: none;
                font-weight: 700;
            }

            .link-one {
                color: var(--normal-purple);
                transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
                line-height: 1em;
            }
            .link-one:hover {
                color: var(--purple-blanco);
                transition: color 1s cubic-bezier(0.33, 1, 0.68, 1);
            }
            .link-one::before {
                content: "";
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
                top: 0;
                right: 0;
                background-color: var(--dark-purple);
                clip-path: circle(0% at 50% calc(50%));
                transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
            }
            .link-one:hover::before {
                clip-path: circle(100% at 50% 50%);
            }
            .link-one::after {
                content: "";
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
                top: 0;
                right: 0;
                background-color: var(--purple-blanco);
                clip-path: polygon(
                    40% 0%,
                    60% 0%,
                    60% 0%,
                    40% 0%,
                    40% 100%,
                    60% 100%,
                    60% 100%,
                    40% 100%
                );
                transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
            }
            .link-one:hover::after {
                clip-path: polygon(
                    40% 10%,
                    60% 10%,
                    60% 35%,
                    40% 35%,
                    40% 90%,
                    60% 90%,
                    60% 65%,
                    40% 65%
                );
            }

            .link-two {
                color: var(--normal-purple);
                transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
            }
            .link-two:hover {
                color: var(--light-purple);
                transition: color 1s cubic-bezier(0.33, 1, 0.68, 1);
            }
            .link-two::before {
                content: "";
                position: absolute;
                z-index: -2;
                width: 100%;
                height: 100%;
                top: 0;
                right: 0;
                clip-path: polygon(
                    0% -20%,
                    100% -30%,
                    100% -10%,
                    0% 0%,
                    0% 130%,
                    100% 120%,
                    100% 100%,
                    0% 110%
                );
                background-color: var(--dark-purple);
                transition: clip-path 1s cubic-bezier(0.25, 1, 0.5, 1);
            }
            .link-two:hover::before {
                clip-path: polygon(
                    0% 10%,
                    100% 0%,
                    100% 20%,
                    0% 30%,
                    0% 100%,
                    100% 90%,
                    100% 70%,
                    0% 80%
                );
            }
            .link-two::after {
                content: "";
                position: absolute;
                z-index: -1;
                width: 5ch;
                height: 5ch;
                top: 50%;
                right: 50%;
                transform: translate(50%, -50%) rotate(0deg) scale(0);
                transition: transform 1s ease;
                background-color: var(--dark-purple);
            }
            .link-two:hover::after {
                transform: translate(50%, -50%) rotate(135deg) scale(1);
            }

        `}</style>
    </div>
}

export default LinkPageSections