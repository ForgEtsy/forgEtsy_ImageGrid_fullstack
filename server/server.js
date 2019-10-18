const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/../build/")));

const PORT = 3001;

const db = require("../database/db");

app.get("/api/allproducts", (req, res) => {
  db.findAllProducts()
    .then(product => res.send(product))
    .catch(err => {
      res.status(400).send("couldnt return those records");
    });
});

app.get("/api/moreshopproducts", (req, res) => {
  db.findShopProducts()
    .then(product => res.send(product))
    .catch(err => {
      res.status(400).send("couldnt return those records");
    });
});

app.get("/api/product/:listing_id", (req, res) => {
  const listingID = req.params;
  db.findCombinedProductsforID(listingID)
    .then(product => res.send(product))
    .catch(err => {
      res.status(400).send("couldnt find that record");
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../build/index.html"));
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
