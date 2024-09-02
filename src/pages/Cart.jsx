import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Divider } from '@mui/material';
import Loader from '../components/loader/Loader';

const Cart = () => {
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    const fetchCart = () => {
        fetch('https://fakestoreapi.com/carts')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setCart(json);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchCart();
    }, []);

    // if (loading) {
    //     return <Loader />;
    // }
    return (
        <section className='cart' id='cart'>
            <div className='navbar bg-primary'>
                <Navbar />
            </div>
            <Divider />
            {loading && <Loader />}
        </section>
    );
};

export default Cart;
