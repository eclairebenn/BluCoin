import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/v3/reference/tickers";
export function getTickers() {
  return fetch(
    baseUrl +
      "?market=crypto&active=true&sort=ticker&order=asc&limit=50&apiKey=GXfq_vTxL63FanUx5CUTC0QmdBdRbm3N"
  )
    .then(handleResponse)
    .catch(handleError);
}
