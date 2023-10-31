// Import the axios library to make API requests

import axios from "axios";

// Define action constants for chart-related actions
export const SET_TIME_INTERVAL = "SET_TIME_INTERVAL";
export const SET_CURRENCY = "SET_CURRENCY";
export const SET_CHART_TYPE = "SET_CHART_TYPE";
export const FETCH_CHART_DATA_REQUEST = "FETCH_CHART_DATA_REQUEST";
export const FETCH_CHART_DATA_SUCCESS = "FETCH_CHART_DATA_SUCCESS";
export const FETCH_CHART_DATA_FAILURE = "FETCH_CHART_DATA_FAILURE";

// Action creators for setting time interval, currency, and chart type
export const setTimeInterval = (timeInterval) => ({
  type: SET_TIME_INTERVAL,
  payload: timeInterval,
});

export const setCurrency = (currency) => ({
  type: SET_CURRENCY,
  payload: currency,
});

export const setChartType = (chartType) => ({
  type: SET_CHART_TYPE,
  payload: chartType,
});

// Action creators for chart data fetching, including request, success, and failure actions
export const fetchChartDataRequest = () => ({
  type: FETCH_CHART_DATA_REQUEST,
});

export const fetchChartDataSuccess = (chartData) => ({
  type: FETCH_CHART_DATA_SUCCESS,
  payload: chartData,
});

export const fetchChartDataFailure = (error) => ({
  type: FETCH_CHART_DATA_FAILURE,
  payload: error,
});

// Asynchronous action for fetching chart data from an API
export const fetchChartData = (currency, timeInterval) => {
  return (dispatch) => {
    // Dispatch a request action to indicate the start of data fetching
    dispatch(fetchChartDataRequest());

    // Make an API call to fetch chart data based on the selected currency and time interval.
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${currency}/market_chart`, {
        params: {
          vs_currency: "usd", // Change to the appropriate currency if needed
          days: timeInterval, // Adjust the API parameter according to your time interval selection
        },
      })
      .then((response) => {
        // Extract the relevant chart data from the API response and format it as needed.
        const chartData = response.data.prices.map((entry) => ({
          date: new Date(entry[0]).toLocaleDateString(),
          price: entry[1],
        }));

        // Dispatch a success action with the retrieved chart data
        dispatch(fetchChartDataSuccess(chartData));
      })
      .catch((error) => {
        // Dispatch a failure action with the error in case of a failed API call
        dispatch(fetchChartDataFailure(error));
      });
  };
};
