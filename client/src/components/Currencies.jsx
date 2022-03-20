import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Currencies.scss';

function Currencies() {
  const [prices, setPrices] = useState({})
  const apiKey = process.env.REACT_APP_CURR_API_KEY;
useEffect(() => {
axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=afedfbbed0fc125697882790d5324c61&symbols=USD,AUD,CAD,GBP,EUR,MXN,JPY,CHF`)
.then((response) => {
  setPrices(response.data.rates);
  console.log(prices);
})
}, [])


  return (
    <div className="ticker">
      
       <p>EUR/USD: <b className="dollar-price">${prices.USD}</b></p>
       <p>EUR/AUD: <b className="dollar-price">${prices.AUD}</b></p>
       <p>EUR/GBP: <b className="dollar-price">${prices.GBP}</b></p>
       <p>EUR/CAD: <b className="dollar-price">${prices.CAD}</b></p>
      <p>EUR/JPY: <b className="dollar-price">${prices.JPY}</b></p>
      <p>EUR/CHF: <b className="dollar-price">${prices.CHF}</b></p>
      <p>EUR/MXN: <b className="dollar-price">${prices.MXN}</b></p>
       
    </div>
  )
}

export default Currencies;