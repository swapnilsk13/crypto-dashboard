import {
  SET_TIME_INTERVAL,
  SET_CURRENCY,
  SET_CHART_TYPE,
  FETCH_CHART_DATA_REQUEST,
  FETCH_CHART_DATA_SUCCESS,
  FETCH_CHART_DATA_FAILURE,
} from "../action/chartActions";

// Define the initial state for the chart-related data
const initialState = {
  timeInterval: "1d",
  currency: "bitcoin",
  chartType: "line",
  chartData: [],
  loading: false,
  error: null,
};

// Reducer for handling chart-related actions
const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Update the selected time interval
    case SET_TIME_INTERVAL:
      return { ...state, timeInterval: action.payload };

    // Update the selected currency
    case SET_CURRENCY:
      return { ...state, currency: action.payload };

    // Update the selected chart type
    case SET_CHART_TYPE:
      return { ...state, chartType: action.payload };

    // Handle chart data fetching request
    case FETCH_CHART_DATA_REQUEST:
      return { ...state, loading: true, error: null };

    // Handle chart data fetching success
    case FETCH_CHART_DATA_SUCCESS:
      return { ...state, loading: false, chartData: action.payload };

    // Handle chart data fetching failure
    case FETCH_CHART_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Default case: return the current state for any other action
    default:
      return state;
  }
};

export default chartReducer;
