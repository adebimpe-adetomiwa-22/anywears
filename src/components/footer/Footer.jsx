import { Divider } from '@mui/material';
import React from 'react';

import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const Footer = () => {
    return (
        <footer className='section footer' id='footer'>
            <a
                href='#'
                className='flex flex-col items-center text-sm my-7 bg-[#E8DBCC]'
            >
                <KeyboardArrowUpRoundedIcon />
                <p>Back to top</p>
            </a>
            <div className='container'>
                <div className='text-[10px] flex flex-wrap gap-5 justify-center'>
                    <a href='#?'>CONTACT US</a>
                    <a href='#?'>REPORT A PRODUCT</a>
                    <a href='#?'>CUSTOMER CARE</a>
                </div>
                <Divider className='bg-slate-500' />
                <small className='text-slate-500'>All Rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
