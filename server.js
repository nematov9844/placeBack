const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// CORS uchun
app.use(cors());

// JSON data (db.json ma'lumotlari)
const data = {
  getBy: [
    {
      sale: "1999",
      info: "Футболка с дизайнерским принтом Super Shape 02 фиолетовая",
      price: "2499",
      title: "MARPLE",
      id: 1,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_1.png"
    },
    // Boshqa elementlar
  ],
  newProduct: [
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_1.png",
      price: 2399,
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 1
    },
    // Boshqa elementlar
  ],
  recomendedProducts: [
    {
      img: "",
      price: "",
      info: "",
      id: 1
    },
    {
      img: "",
      price: "",
      info: "",
      id: 2
    }
  ]
};

// `getBy` endpoint
app.get('/getBy', (req, res) => {
  res.json(data.getBy);
});

// `newProduct` endpoint
app.get('/newProduct', (req, res) => {
  res.json(data.newProduct);
});

// `recomendedProducts` endpoint
app.get('/recomendedProducts', (req, res) => {
  res.json(data.recomendedProducts);
});

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server http://localhost:${port} portida ishlayapti`);
});
