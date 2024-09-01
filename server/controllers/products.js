const { readFile } = require('fs').promises;

const getProducts = async (req, res) => {
    try {
        const getProducts = await readFile('./data/products.json', 'utf8');
        if (getProducts) {
            const products = JSON.parse(getProducts);
            res.status(200).json(products);
        } else {
            res.status(500).json({
                success: false,
                message: 'internal server error',
                data: [],
            });
        }
    } catch (error) {
        const message = error instanceof Error ? error.message : error;
        console.log(message);
    }
};

const getCategory = async (req, res) => {
    try {
        const getProducts = await readFile('./data/products.json', 'utf8');
        if (!getProducts) {
            res.status(500).send('internal server error');
            return;
        }

        let category = [];
        const products = JSON.parse(getProducts);

        products.map((product) =>
            category.includes(product.category)
                ? ''
                : category.push(product.category)
        );
        category.sort();

        res.status(200).json(category);
    } catch (error) {
        const message = error instanceof Error ? error.message : error;
        console.log(message);
    }
};

const getCategoryProducts = async (req, res) => {
    try {
        const getProducts = await readFile('./data/products.json', 'utf8');
        if (!getProducts) {
            res.status(500).send('internal server error');
            return;
        }

        const categories = {
            electronics: 'electronics',
            jewelery: 'jewelery',
            'men-clothing': "men's clothing",
            'women-clothing': "women's clothing",
        };

        const { categoryName } = req.params;

        if (!(categoryName in categories)) {
            res.status(404).send('Page not found');
            console.log(categoryName);
            return;
        }

        const products = JSON.parse(getProducts);
        const categoryProduct = products.filter(
            (product) => product.category === categories[categoryName]
        );

        res.status(200).json(categoryProduct);
    } catch (error) {
        const message = error instanceof Error ? error.message : error;
        console.log(message);
    }
};

const getSingleProduct = async (req, res) => {
    try {
        const getProducts = await readFile('./data/products.json', 'utf8');
        if (!getProducts) {
            res.status(500).send('internal server error');
            return;
        }

        let { productId } = req.params;
        productId = Number(productId);
        const products = JSON.parse(getProducts);

        const product = products.find((product) => product.id === productId);

        if (!product) {
            res.status(400).send('Product not found!');
            return;
        }

        res.status(200).json(product);
    } catch (error) {
        const message = error instanceof Error ? error.message : error;
        console.log(message);
    }
};

module.exports = {
    getProducts,
    getCategory,
    getCategoryProducts,
    getSingleProduct,
};
