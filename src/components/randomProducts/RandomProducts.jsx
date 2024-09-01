import { getProducts } from '../../features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Product from '../products/Product';
import { CircularProgress } from '@mui/material';

const RandomProducts = () => {
    const dispatch = useDispatch();
    const { loading, products } = useSelector((store) => store.products);
    const { searchValue, searching } = useSelector((store) => store.search);

    const searchPattern = new RegExp(searchValue, 'i');

    const matchedProducts = products.filter((product) =>
        searchPattern.test(product.title)
    );

    // console.log(matchedProducts);

    // const productDisplay = searching ? matchedProducts : products;

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    // useEffect(() => {
    //     console.log(loading, products);
    // }, [products]);
    if (loading) {
        return (
            <div className='mt-10 flex justify-center items-center'>
                <CircularProgress color='first' />
            </div>
        );
    }
    return (
        <section className='mt-10'>
            <div className='w-full h-10 bg-tertiary'>
                <div className='container w-full h-full  flex items-center'>
                    <p className='text-nursery'>
                        {searching
                            ? `Result: ${matchedProducts.length}`
                            : 'Products'}
                    </p>
                </div>
            </div>

            <div className='products mt-5 flex justify-center'>
                <div className='m-2 flex gap-y-5 gap-x-2 sm:gap-x-3 flex-wrap justify-center'>
                    {/* <Product
                        price={109.95}
                        title='
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                    /> */}
                    {(searching ? matchedProducts : products).map((product) => (
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

export default RandomProducts;
