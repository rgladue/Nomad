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
      
       <p>EUR/USD: {prices.USD}</p>
       <p>EUR/AUD: {prices.AUD}</p>
       <p>EUR/GBP: {prices.GBP}</p>
       <p>EUR/CAD: {prices.CAD}</p>
      <p>EUR/JPY: {prices.JPY}</p>
      <p>EUR/CHF: {prices.CHF}</p>
      <p>EUR/MXN: {prices.MXN}</p>
       
    </div>
  )
}

export default Currencies;