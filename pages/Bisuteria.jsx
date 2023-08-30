import Header from '../components/header/Header'
import BuySteps from "../components/store/BuySteps"
import Jewelry from "../components/store/Jewelry"
import Tittle from "../components/store/Tittle"
import FrontJewelry from '../components/store/FrontJewelry'
import { useState } from 'react'

const Bisuteria = () => {

  return <section className="container">
    <Header row="1/2" color="--purple-blanco"/>
    <Tittle row="2/3"/>
    <FrontJewelry row="3/4"/>
    <Jewelry row="2/3"/>
    {/*
      <BuySteps row="4/5"/>
      */}
    <style jsx>{`
      .container {
        font-family: var(--font);
        background: inherit;
        height: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: grid;
        grid-template-rows: auto 1fr auto auto;
        grid-template-columns: 1fr;
      }
    `}</style>
  </section>
}

export default Bisuteria
