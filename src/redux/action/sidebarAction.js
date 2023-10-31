// Define action constants for successful and failed cryptocurrency data fetching
export const FETCH_CRYPTO_DATA_SUCCESS = "FETCH_CRYPTO_DATA_SUCCESS";
export const FETCH_CRYPTO_DATA_FAILURE = "FETCH_CRYPTO_DATA_FAILURE";

// Action creator for success: When cryptocurrency data is fetched successfully
export const fetchCryptoDataSuccess = (cryptoList) => ({
  type: FETCH_CRYPTO_DATA_SUCCESS,
  payload: cryptoList,
});

// Action creator for failure: When there's an error during cryptocurrency data fetching
export const fetchCryptoDataFailure = (error) => ({
  type: FETCH_CRYPTO_DATA_FAILURE,
  payload: error,
});
