/* eslint-disable no-console */
const fs = require("fs");
const Path = require("path");
const mockData = require("./mockData");

const { Tickers } = mockData;
const data = JSON.stringify({ Tickers });
const filepath = Path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
