This application utilizes the Express, React, Node stack with TypeScript and Redux.

# BluCoin Cryto Dashboard

## Get Started

To get started with this example, clone the repository and install the
dependencies.

```bash
$ git clone https://github.com/eclairebenn/BluCoin.git
$ cd BluCoin
$ npm install
$ npm start
```

Navigate to [`http://localhost:3000`](http://localhost:3000).

This example utilized components from from Material UI. To install:

```bash
$ npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

## Overview

This project is in development phase to implement passport-coinbase to authenticate users to login to their coinbase accounts and reach a customized crypto dashboard. The app utilizes Redux to manage application state and make asynchronous calls to coinbase.com and polygon.io APIs.

- [`api/tickerApi.jsx`]()

  - `GET /tickers/`

    ```ts
    const baseUrl = process.env.API_URL + "/tickers/";

    export function getTickers() {
      return fetch(baseUrl).then(handleResponse).catch(handleError);
    }
    ```

    Sample Response

    ```json
    {
      "ticker": "X:ETCUSD",
      "name": "Ethereum Classic - United States Dollar",
      "market": "crypto",
      "locale": "global",
      "active": true,
      "currency_symbol": "USD",
      "currency_name": "United States Dollar",
      "base_currency_symbol": "ETC",
      "base_currency_name": "Ethereum Classic",
      "last_updated_utc": "2017-01-01T00:00:00Z"
    }
    ```
