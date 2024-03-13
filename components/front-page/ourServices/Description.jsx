import Link from 'next/link'
import SocialNetworks from './SocialNetworks'

const Description = ({ sub, title, paragraph, href }) => {
    return <div className="container">
        <h3>{sub}</h3>
        <h1>{title}</h1>
        { title === 'Depilación con cera'
            ? <div className="nets">
                <SocialNetworks href="https://www.facebook.com/profile.php?id=100074125141678&mibextid=ZbWKwL">
                    <svg viewBox="0 0 512 512"> <path color="#893c8a" fill="currentcolor"d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                </SocialNetworks>
                <SocialNetworks href="https://instagram.com/belladonna_depilacion?igshid=ZDdkNTZiNTM=">
                    <svg viewBox="0 0 448 512"> <path color="#893c8a" fill="currentcolor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </SocialNetworks>
            </div>
            : <div className="jewelInsta">
                <SocialNetworks href="https://instagram.com/bella_donnajoyas?igshid=ZDdkNTZiNTM=">
                    <svg viewBox="0 0 448 512"> <path color="#893c8a" fill="currentcolor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </SocialNetworks>
            </div>
        }
        <p>{paragraph}</p>
        <Link href={href} legacyBehavior>
            <a className="know">¡Conoce más aquí!</a>
        </Link>
        <style jsx>{`
            .container {
                grid-column: 2/3;
                justify-self: center;
                align-self: center;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                position: relative;
                display: grid;
                grid-template-rows: 0.5fr 1fr 1fr;
            }
            h3{
                box-sizing: border-box;
                grid-row: 1/2;
                grid-column: 1/2;
                color: var(--light-purple);
                font-size: 1.4em;
                align-self: end;
            }
            h1{
                grid-row: 2/3;
                grid-column: 1/2;
                font-weight: 700;
                font-size: 3em;
                box-sizing: border-box;
                color: var(--normal-purple);
                align-self: start;
            }
            .nets{
                grid-row: 2/3;
                grid-column: 1/2;
                box-sizing: border-box;
                align-self: center;
                position: relative;
                bottom: 10%;
                display: flex;
            }
            p{
                align-self: end;
                grid-row: 2/3;
                grid-column: 1/2;
                font-size: 1.2em;
                color: var(--light-purple);
                box-sizing: border-box;
                padding-right: 20%;
            }
            .know{
                align-self: center;
                grid-row: 3/4;
                grid-column: 1/2;
                font-weight: 700;
                font-size: 1.5em;
                color: var(--normal-purple);
                text-decoration: none;
                position: relative;
                bottom: 15%;
            }

            @media screen and (max-width: 870px){
                .container{
                    height: 45em;
                    grid-template-rows: 1fr 2fr 1fr;
                }

                h3{
                    align-self: end;
                    font-size: 1.45em;
                }
                h1{
                    font-size: 3.3em;
                    align-self: start;
                }
                .nets{
                    align-self: center;
                    position: relative;
                    bottom: 25%;
                    display: flex;
                }
                p{
                    align-self: center;
                    position: relative;
                    top: 2em;
                    font-size: 1.5em;
                }
                .know{
                    align-self: start;
                    font-size: 1.8em;
                    bottom: 0;
                }
            }
        `}</style>
    </div>
}
export default Description
