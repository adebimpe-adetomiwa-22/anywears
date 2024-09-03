import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import RandomProducts from '../components/randomProducts/RandomProducts';
import Category from '../components/category/Category';
import { useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';

const Home = () => {
    const { searching } = useSelector((store) => store.search);
    return (
        <>
            <div className='bg-primary'>
                <Navbar removeSearchBar={false} />
                {!searching && <Hero />}
                <RandomProducts />
                <Category />
                <Footer nav={true} />
            </div>
        </>
    );
};

export default Home;
