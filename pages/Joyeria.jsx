import Header from '../components/header/Header'
import Jewelry from "../components/store/Jewelry"
import FrontJewelry from '../components/store/FrontJewelry'
import LinkPageSections from '../components/front-page/LinkPageSections'
import About from '../components/front-page/About'
import ButtonStore from '../components/store/ButtonStore'

import { useState } from 'react'

const Bisuteria = () => {

  const [href, setHref] = useState('')

  return <section className="container">
  <Header row="1/2" color="--purple-blanco"/>
  <FrontJewelry row="2/3"/>
  <div className="trunk">
    <LinkPageSections setHref={setHref} clase="background-one" text="joyería" numberLink="link-two" col="1/2"/>
    <LinkPageSections setHref={setHref} clase="background-two" text="bisutería" numberLink="link-one" col="2/3"/>
    <ButtonStore side="right" type="shop"/>
    <ButtonStore side="left" type="whatsapp"/>
  </div>
  {href === 'link-two' ? <Jewelry name ="joyeria"/> : href === 'link-one' ? <Jewelry name ="bisutería"/> : ''}
  <div className="post">
    <About/>
  </div>
  <style jsx>{`
    .container {
      font-family: var(--font);
      background: inherit;
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      display: grid;
      grid-template-rows: auto auto auto auto 25%;
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
    .post{
      grid-row: 5/6;
    }
  `}</style>
  </section>
}

export default Bisuteria
