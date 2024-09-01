import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CircularProgress, IconButton } from '@mui/material';
import Loader from '../components/loader/Loader';
import Product from '../components/products/product';
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Category = () => {
    const { url } = useSelector((store) => store.productsUrl);
    const { productCategory: category } = useParams();
    const categories = {
        electronics: 'electronics',
        jewelery: 'jewelery',
        'men-clothing': "men's clothing",
        'women-clothing': "women's clothing",
        "men's clothing": "men's clothing",
        "women's clothing": "women's clothing",
    };
    if (!(category in categories)) {
        return <Navigate to='/error' />;
    }

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${url}/products/category/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <section className=''>
            <div className='w-full h-10 bg-tertiary'>
                <div className='container w-full h-full  flex items-center'>
                    <Link to='../'>
                        <IconButton>
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                    <p>{category}</p>
                </div>
            </div>

            <div className='products mt-5 flex justify-center'>
                <div className='m-2 flex gap-y-5 gap-x-2 sm:gap-x-3 flex-wrap justify-center'>
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            price={product.price}
                            title={product.title}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;
