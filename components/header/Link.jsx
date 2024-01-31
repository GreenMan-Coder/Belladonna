const Link = () => {
  return <li className="container">
    <Link href="/" legacyBehavior>
      <a >Inicio</a>
    </Link>
    <style jsx>{`

        li {
          list-style: none;
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
          color: var(--normal-purple);
          font-size: 20rem;
        }
    `}</style>
  </li>
}
export default Link
