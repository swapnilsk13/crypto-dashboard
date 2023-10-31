import React, { useState } from "react";
import Searchbar from "./Searchbar";
import CryptoChart from "./Chart";
import CryptoExchangeComparison from "./Exchange";
import CryptoPieChart from "./PieChart";
import CryptoSidebar from "./Sidebar";

function Main() {
  // State to manage the selected currency
  const [selectedCurrency, setSelectedCurrency] = useState("usd");

  return (
    <>
      {/* Container for the main content */}
      <div className="bg-slate-100 flex flex-col m-4 pt-2 md:m-6 px-2 h-full rounded md:flex-row overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-2">
            <div className="md:col-span-3">
              <div className="md:3/4 mx-auto">
                <div className="flex mb-2">
                  {/* Dropdown for selecting the currency */}
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="h-11 w-20 relative left-1 rounded-md outline-none border focus:border-black shadow-md px-2 py-2"
                  >
                    <option value="usd">USD</option>
                    <option value="inr">INR</option>
                    <option value="eur">EUR</option>
                  </select>
                  <Searchbar />
                </div>
                <CryptoChart />
              </div>
              <div className="md:flex mt-2 gap-1">
                {/* Components for displaying pie chart and exchange comparison */}
                <CryptoPieChart />
                <CryptoExchangeComparison />
              </div>
            </div>
            <div>
              {/* Sidebar component with the selected currency as a prop */}
              <CryptoSidebar
                selectedCurrency={selectedCurrency}
                className="md:mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
