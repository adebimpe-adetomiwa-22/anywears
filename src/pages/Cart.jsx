import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Button, CircularProgress, Divider } from '@mui/material';
import Loader from '../components/loader/Loader';
import axios from 'axios';
import CartProducts2 from '../components/cartProducts/CartProducts';
import Footer from '../components/footer/Footer';

import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

// from slice
// import {
//     updateCart,
//     addProduct,
//     removeProduct,
// } from '../features/cart/cartSlice';
// import { useDispatch } from 'react-redux';

const Cart = () => {
    // const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState(false);
    const [total, setTotal] = useState(0);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            setProducts(res.data);
            return Promise.resolve('success');
        } catch (error) {
            const message = error instanceof Error ? error.message : error;
            console.log(message);
        }
    };

    const fetchCart = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/carts/5');
            setCart(res.data);
            setLoading(false);
            return Promise.resolve('success');
        } catch (error) {
            const message = error instanceof Error ? error.message : error;
            console.log(message);
        }
    };

    useEffect(() => {
        (async () => {
            await fetchCart();
            await fetchProducts();
            setFilterProducts(true);
        })();
    }, []);

    useEffect(() => {
        if (filterProducts) {
            getProductsData();
        }
    }, [filterProducts]);

    useEffect(() => {
        if (cartProducts.length > 0) {
            // dispatch(updateCart(cartProducts));
            const prices = cartProducts.map((product) => product.price);
            const amount = prices.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            );
            setTotal(amount);
        }
    }, [cartProducts]);

    const getProductsData = () => {
        const productIds = new Set(
            cart.products.map((product) => product.productId)
        );
        setCartProducts(
            products.filter((product) => productIds.has(product.id))
        );
    };

    return (
        <section className='cart' id='cart'>
            <div className='navbar bg-primary'>
                <Navbar removeSearchBar={true} />
            </div>
            <Divider />
            {loading ? (
                <div className='w-full py-10 flex justify-center items-center'>
                    <CircularProgress color='first' />
                </div>
            ) : (
                <div className='container md:w-4/5 lg:w-3/5 xl:w-3/6'>
                    <div>
                        <h2 className='text-lg font-semibold mb-3'>
                            Cart ({cart.products.length})
                        </h2>
                        <Divider />
                        <div className='cart-products flex flex-col gap-7 mt-9'>
                            {cartProducts.map((product, index) => (
                                <CartProducts2
                                    key={product.id}
                                    setTotal={setTotal}
                                    {...product}
                                    last={index === cartProducts.length - 1}
                                />
                            ))}
                        </div>
                        <div className='mt-12 flex flex-col gap-5 items-center'>
                            <h2>
                                Total:{' '}
                                <span className='text-lg font-semibold'>
                                    ${parseFloat(total.toFixed(2))}
                                </span>
                            </h2>
                            <div className=''>
                                <Button
                                    variant='contained'
                                    color='first'
                                    size='small'
                                    // sx={{
                                    //     paddingX: 2,
                                    //     borderRadius: 1,
                                    // }}
                                    startIcon={<ShoppingBasketRoundedIcon />}
                                >
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer nav={false} />
        </section>
    );
};

export default Cart;
