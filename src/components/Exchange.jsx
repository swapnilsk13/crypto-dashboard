import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCrypto1, setCrypto2, setAmount, setComparisonResult } from '../redux/action/exchangeActions';

const CryptoExchangeComparison = () => {
  const dispatch = useDispatch();

  // State for controlling visibility of exchange rates
  const [showExchangeRates, setShowExchangeRates] = useState(false);

  // State for storing the input amount
  const [amountInput, setAmountInput] = useState('1');

  // Selectors to retrieve data from the Redux store
  const crypto1 = useSelector((state) => state.exchange.crypto1);
  const crypto2 = useSelector((state) => state.exchange.crypto2);
  const comparisonResult = useSelector((state) => state.exchange.comparisonResult);
  const exchangeRates = useSelector((state) => state.exchange.exchangeRates);

  // Handler for amount input change
  const handleAmountChange = (event) => {
    setAmountInput(event.target.value);
  };

  // Handler for comparing cryptocurrencies
  const handleCompare = () => {
    // Retrieve sell and buy rates for selected cryptocurrencies
    const rate1Sell = exchangeRates[crypto1]?.sell || 0;
    const rate2Buy = exchangeRates[crypto2]?.buy || 1;

    if (!isNaN(amountInput)) {
      // Calculate the comparison result
      const result1 = (amountInput * rate1Sell) / rate2Buy;

      // Dispatch the result to the Redux store, rounded to 2 decimal places
      dispatch(setComparisonResult(result1.toFixed(2)));
    } else {
      // Dispatch an error message if the input is not a valid number
      dispatch(setComparisonResult('Invalid input'));
    }
  };

  // Handler for showing/hiding exchange rates
  const handleShowExchangeRates = () => {
    setShowExchangeRates(!showExchangeRates);
  };

  // Styling for the component
  const style = {
    letterSpacing: "0.8px",
  };

  return (
    <div className="container shadow-md border rounded-md bg-white h-64 top-2 relative mb-5 ">
      <h2 style={style} className="text-500 font-bold ml-4 text-xl my-5">
        Exchange Coins
      </h2>

      {/* Dropdown for selecting the cryptocurrency to sell */}
      <label
        htmlFor="crypto1"
        className="relative left-2 top-6 font-bold text-red-500 "
      >
        Sell
      </label>
      <select
        id="crypto1"
        value={crypto1}
        className="relative top-6 left-8 shadow-md rounded-md border-solid bg-white border-radius h-9 w-36 mr-60 "
        onChange={(e) => dispatch(setCrypto1(e.target.value))}
      >
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="pi">Pi</option>
        <option value="tether">Tether</option>
      </select>

      {/* Dropdown for selecting the cryptocurrency to buy */}
      <br />
      <label
        htmlFor="crypto2"
        className="relative top-8 font-bold text-teal-600 left-2 "
      >
        Buy
      </label>
      <select
        id="crypto2"
        value={crypto2}
        className="relative top-8 left-8 shadow-md rounded-md border-solid bg-white border-radius h-9 w-36 mr-60"
        onChange={(e) => dispatch(setCrypto2(e.target.value))}
      >
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="pi">Pi</option>
        <option value="tether">Tether</option>
      </select>

      {/* Input for entering the amount to exchange */}
      <br />
      <label
        htmlFor="amount"
        className="relative left-56 bottom-20 italic hover:not-italic> "
      >
        Enter value:
      </label>
      <br />
      <input
        type="number"
        id="amount"
        placeholder="Enter amount"
        className="relative left-56 bottom-20 shadow-md rounded-md border-solid bg-white border-radius h-10 w-28 "
        value={amountInput}
        onChange={handleAmountChange}
      />

      {/* Button for initiating the exchange comparison */}
      <button
        id="compare"
        className=" relative top-5 right-9 left-9 shadow-md rounded-md border-solid bg-blue-400 border-radius h-9 w-28 "
        onClick={handleCompare}
      >
        Exchange
      </button>

      {/* Display area for the comparison result */}
      <div
        id="comparison-result"
        className="relative left-56 bottom-14 font-bold"
      >
        {comparisonResult}
      </div>
    </div>
  );
};

export default CryptoExchangeComparison;
