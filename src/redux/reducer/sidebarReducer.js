import {
  FETCH_CRYPTO_DATA_SUCCESS,
  FETCH_CRYPTO_DATA_FAILURE,
} from "../action/sidebarAction";

// Define the initial state for sidebar-related data
const initialState = {
  cryptoList: [], // Array to store cryptocurrency data
  loading: false, // Indicates whether data is being loaded
  error: null, // Stores any errors that may occur during data fetching
};

// Reducer for handling sidebar-related actions
const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    // When crypto data is successfully fetched
    case FETCH_CRYPTO_DATA_SUCCESS:
      return {
        ...state,
        cryptoList: action.payload, // Update the cryptoList with fetched data
        loading: false, // Loading is complete
        error: null, // Reset any previous error
      };

    // When there is an error in fetching crypto data
    case FETCH_CRYPTO_DATA_FAILURE:
      return {
        ...state,
        cryptoList: [], // Clear cryptoList in case of an error
        loading: false, // Loading is complete
        error: action.payload, // Store the error message
      };

    // Default case: return the current state for any other action
    default:
      return state;
  }
};

export default sidebarReducer;
