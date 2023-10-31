import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCryptoDataSuccess,
  fetchCryptoDataFailure,
} from "../redux/action/sidebarAction";

const Sidebar = ({ selectedCurrency }) => {
  // State variables to manage cryptocurrency list and Redux related variables
  const [cryptoList, setCryptoList] = useState([]);
  const dispatch = useDispatch();
  const cryptoData = useSelector((state) => state.cryptoList);

  useEffect(() => {
    // Function to fetch cryptocurrency data based on the selected currency
    const fetchCryptoData = (currency) => {
      axios
        .get("https://api.coingecko.com/api/v3/coins/markets", {
          params: {
            vs_currency: currency,
            order: "market_cap_desc",
            per_page: 1000,
            page: 1,
          },
        })
        .then((response) => {
          // Process the response data to include additional information
          const updatedCryptoList = response.data.map((crypto) => {
            const dailyPriceChange =
              ((crypto.current_price - crypto.low_24h) / crypto.low_24h) * 100;
            const priceChangeDirection = dailyPriceChange >= 0 ? "up" : "down";

            return {
              ...crypto,
              dailyPriceChange,
              priceChangeDirection,
            };
          });
          // Update the local state and dispatch success action to Redux
          setCryptoList(updatedCryptoList);
          dispatch(fetchCryptoDataSuccess(updatedCryptoList));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Dispatch failure action in case of an error
          dispatch(fetchCryptoDataFailure(error));
        });
    };

    // Fetch cryptocurrency data when selected currency or dispatch change
    fetchCryptoData(selectedCurrency);
  }, [selectedCurrency, dispatch]);

  // Function to format currency values
  const formatCurrency = (value, currency) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    });
    return formatter.format(value);
  };

  return (
    <div className="w-full p-4 shadow-md bg-white rounded-md">
      <h1 className=" font-bold text-center text-2xl shadow-sm mb-2 ">
        Top Cryptocurrencies by Market Cap
      </h1>

      <div className="crypto-list space-y-4 overflow-scroll ">
        {/* Map over the "cryptoList" to render each cryptocurrency */}
        {cryptoList.map((crypto) => (
          <div key={crypto.id} className="flex items-center  space-x-4">
            <div className="w-12 h-12 mr-3">
              <img src={crypto.image} alt={crypto.name} />
            </div>

            <div>
              <p>{crypto.name} </p>
              <p>
                Mkt Cap: {formatCurrency(crypto.market_cap, selectedCurrency)}
              </p>
            </div>
            <p>
              {crypto.priceChangeDirection === "up" ? (
                <span>
                  <img
                    className="h-5 w-5"
                    src={process.env.PUBLIC_URL + "/images/Up.png"}
                    alt=""
                  />
                </span>
              ) : (
                <span>
                  <img
                    className="h-5 w-5"
                    src={process.env.PUBLIC_URL + "/images/Down.png"}
                    alt=""
                  />
                </span>
              )}{" "}
              {Math.abs(crypto.dailyPriceChange).toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
