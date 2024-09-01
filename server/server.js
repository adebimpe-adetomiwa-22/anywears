// import express and initialize it
const express = require('express');
const app = express();

// port and cors
const port = process.env.PORT || 5000;
const cors = require('cors');

// file system
const { readFile } = require('fs').promises;

// -------
app.use(express.json());
app.use(cors());

//
const productRoute = require('./routes/products');
app.use('/products', productRoute);

// routes
app.get('/', (req, res) => {
    res.status(200).send('This is the home page');
});

// app.get('/products', async (req, res) => {
//     try {
//         const getProducts = await readFile('./data/products.json', 'utf8');
//         if (getProducts) {
//             const products = JSON.parse(getProducts);
//             res.status(200).json(products);
//         } else {
//             res.status(500).json({
//                 success: false,
//                 message: 'internal server error',
//                 data: [],
//             });
//         }
//     } catch (error) {
//         const message = error instanceof Error ? error.message : error;
//         console.log(message);
//     }
// });

// error route
app.get('*', (req, res) => {
    res.status(404).send('Error 404: page not found');
});

// serve to port
app.listen(port, () =>
    console.log(`Server running on: http://127.0.0.1:${port}`)
);
