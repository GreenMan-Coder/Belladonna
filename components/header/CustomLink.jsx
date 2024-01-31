import Link from 'next/link'

const CustomLink = ({ href, to }) => {
    return <li>
        <Link href={href} legacyBehavior>
            <a>{to}</a>
        </Link>

        <style jsx>{`
            a {
                padding: 2rem;
                color: var(--normal-purple);
                font-size: 1rem;
            }
      ` }</style>
    </li>
}
export default CustomLink
