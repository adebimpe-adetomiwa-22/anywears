// import { useState } from 'react';
// import Navbar from './components/navbar/Navbar';
// import Hero from './components/hero/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Product from './pages/Product';
import Category from './pages/Category';
import Error from './pages/Error';
import Cart from './pages/Cart';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/anywears'>
                    <Route index element={<Home />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='login' element={<Login />} />
                    <Route path='product/:productId' element={<Product />} />
                    <Route
                        path='category/:productCategory'
                        element={<Category />}
                    />
                    <Route path='cart' element={<Cart />} />
                    <Route path='error' element={<Error />} />
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );

    return (
        <>
            <div className='bg-primary'>
                <Navbar />
                <Hero />
            </div>
        </>
    );
}

export default App;
