import { combineReducers } from "redux";
import exchangeReducer from "./exchangeReducer";
import chartDataReducer from "./chartDataReducer";
import sidebarReducer from "./sidebarReducer";

// Combine individual reducers into a single rootReducer
const rootReducer = combineReducers({
  exchange: exchangeReducer, // Reducer for cryptocurrency exchange data
  chartData: chartDataReducer, // Reducer for chart-related data
  sidebar: sidebarReducer, // Reducer for sidebar data

  // You can add more reducers here if needed for other parts of your application
});

export default rootReducer;
