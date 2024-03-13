import Link from 'next/link'

const CustomLink = ({ href, to }) => {
    return <li>
        <Link href={href} legacyBehavior>
            <a>{to}</a>
        </Link>
        <style jsx>{`
            li{
                height: 100%;
            }
            a {
                padding: 2rem;
                color: var(--normal-purple);
                font-size: 1rem;
            }

            @media screen and (max-width: 1490px){
                a{
                    padding: 0.5rem 2em 0.5em 2em;
                }
            }

            @media screen and (max-width: 650px){
                a{
                    font-size: .6rem;
                }
            }

            @media screen and (max-width: 580px){
                a{
                    font-size: .6rem;
                }
            }

            @media screen and (max-width: 530px){
                a{
                    font-size: .6rem;
                    padding: .5rem 1rem;
                }
            }

            @media screen and (max-width: 430px){
                a{
                    font-size: .5rem;
                    padding: .5rem .8rem;
                }
            }
        ` }</style>
    </li>
}
export default CustomLink
