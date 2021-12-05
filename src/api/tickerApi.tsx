/* eslint-disable import/no-unresolved */
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/tickers/";
export function getTickers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
