import Header from '../components/header/Header'
import BuySteps from "../components/store/BuySteps"
import Jewelry from "../components/store/Jewelry"
import Tittle from "../components/store/Tittle"
import FrontJewelry from '../components/store/FrontJewelry'
import LinkPageSections from '../components/front-page/LinkPageSections'

import { useState } from 'react'

const Bisuteria = () => {

  const [href, setHref] = useState('')

  return <section className="container">
  <Header row="1/2" color="--purple-blanco"/>
  <FrontJewelry row="2/3"/>
  <div className="trunk">
    <LinkPageSections setHref={setHref} clase="background-one" text="oro plata" numberLink="link-two" col="1/2"/>
    <LinkPageSections setHref={setHref} clase="background-two" text="bisutería" numberLink="link-one" col="2/3"/>
  </div>
  {href === 'link-two' ? <Jewelry row="4/5"/> : href === 'link-one' ? <Jewelry row="4/5"/> : ''}
  <style jsx>{`
    .container {
      font-family: var(--font);
      background: inherit;
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      display: grid;
      grid-template-rows: auto auto auto auto;
      grid-template-columns: 1fr;
    }
    .trunk{
      margin: 0;
      grid-row: 3/4;
      height: 20vh;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      text-transform: uppercase;
    }
  `}</style>
  </section>
}

export default Bisuteria
