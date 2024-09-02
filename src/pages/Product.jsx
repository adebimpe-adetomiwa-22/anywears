import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import productImage from '../assets/images/image2.jpg';
import { Alert, CircularProgress, IconButton, Rating } from '@mui/material';
import Loader from '../components/loader/Loader';
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';

const Product = () => {
    const { url } = useSelector((store) => store.productsUrl);
    let { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [messageAlert, setMessageAlert] = useState(false);

    const closeMessageAlert = () => {
        setMessageAlert(false);
    };
    useEffect(() => {
        if (messageAlert) {
            setTimeout(() => {
                setMessageAlert(false);
            }, 3000);
        }
    }, [messageAlert]);
    const addNewProduct = () => {
        const dt = new Date().toLocaleDateString();
        fetch('https://fakestoreapi.com/carts', {
            method: 'POST',
            body: JSON.stringify({
                userId: 5,
                date: dt,
                products: [
                    { productId, quantity: 1 },
                    // { productId: 1, quantity: 5 },
                ],
            }),
        })
            .then((res) => res.json())
            .then((json) => {
                // console.log(json);
                setMessageAlert(true);
            });
    };

    useEffect(() => {
        fetch(`${url}/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }

    const {
        rating: { rate },
    } = product;
    return (
        <div className='bg-primary'>
            {messageAlert && (
                <div className='bg-secondary text-primary'>
                    <Alert
                        severity='success'
                        // variant='filled'
                        color='inherit'
                        // icon={<CheckIcon fontSize='inherit' />}
                        onClose={closeMessageAlert}
                    >
                        <div className='grid grid-cols-3 text-sm md:text-base'>
                            <p className='truncate'>{product.title}</p>
                            <p className='col-span-2'>
                                &nbsp; added successfully.
                            </p>
                        </div>
                    </Alert>
                </div>
            )}
            <div className='container'>
                <Link to='../'>
                    <div className='mb-3'>
                        <IconButton>
                            <ArrowBackIcon />
                        </IconButton>
                    </div>
                </Link>
                {/* <div className='w-full sm:grid sm:grid-cols-2 sm:gap-5 sm:items-start'> */}
                <div className='w-full flex flex-col sm:flex-row gap-3 md:w-3/4 lg:w-3/5'>
                    <img
                        src={product.image}
                        // src={productImage}
                        className='h-72 w-full object-contain sm:w-2/5'
                    />
                    <div className='description mt-5'>
                        <h2 className='mb-3 text-base sm:text-lg font-medium'>
                            {product.title}
                        </h2>

                        <div className='mt-0 mb-5'>
                            <Rating
                                value={rate}
                                precision={0.1}
                                className='pointer-events-none'
                            />
                        </div>

                        <div className='flex gap-5 items-center mb-5'>
                            <p className='text-lg font-semibold'>
                                ${product.price}
                            </p>
                            <button
                                className='bg-main text-primary px-3 py-1 rounded-smooth transition hover:opacity-90'
                                onClick={addNewProduct}
                            >
                                Add to cart
                            </button>
                        </div>

                        {/* <button className='bg-main text-primary px-3 py-1 rounded-smooth transition hover:opacity-90'>
                            Add to cart
                        </button> */}

                        <p className='text-sm'>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
