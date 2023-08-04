const HowWork = ({left, id}) => {
  return <div className="container">

    {id === "1" ? <svg viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
    :
    id === "2" ? <svg viewBox="0 0 512 512"><path d="M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368H480c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256 216zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z"/></svg>
    :
    <svg viewBox="0 0 384 512"><path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>}
    <style jsx>{`
      .container {
        grid-row: 3/4;
        grid-column: 1/2;
        box-sizing: border-box;
        position: relative;
        top: 20%;
        left: ${left};
        width: 8%;
        height: 30%;
        background-color: var(--light-pink);
        clip-path: polygon(50% 0%, 100% 38.2%, 80.9% 100%, 19.1% 100%, 0% 38.2%);
        transform: rotate(180deg);
        display: grid;
        justify-items: center;
        align-items: center;
      }
      .container::before{
        content: "";
        position: absolute;
        z-index: 0;
        width: 93%;
        height: 92%;
        background-color: var(--purple-blanco);
        clip-path: polygon(50% 0%, 100% 38.2%, 80.9% 100%, 19.1% 100%, 0% 38.2%);
      }
      svg{
        z-index: 1;
        height: 50%;
        position: relative;
        top: 5%;
        transform: rotate(180deg);
        fill: var(--light-purple);
      }
    `}</style>
  </div>
}
export default HowWork
