import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

// images
import HeroBackground from '../../assets/images/jacek-dylag-jo8C9bt3uo8-unsplash.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: {
                    xs: '30vh',
                    sm: '50vh',
                    md: '60vh',
                },
                backgroundImage: `url(${HeroBackground})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'multiply',
                color: '#ffffff',
            }}
        >
            <Stack
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant='h6' color='#dddddd' textAlign='center'>
                    ELEVATE YOUR{' '}
                    <Typography
                        component='span'
                        color='#ffffff'
                        fontWeight='bold'
                        fontSize='inherit'
                    >
                        SHOPPING
                    </Typography>{' '}
                    EXPERIENCE
                </Typography>
                <Typography
                    variant='body2'
                    color='#dddddd'
                    textAlign='center'
                    m={2}
                    mt={3}
                >
                    Welcome to our home page we sell different kinds of outfits
                    and wears,.
                </Typography>
                {/* <Button variant='contained' size='small' fontSize='12px'>
                    Shop Now
                </Button> */}
                <Link to='/login'>
                    <button className='text-xs bg-main px-5 py-1.5 rounded-sm sm:px-7 sm:py-2 text-primary transtion hover:opacity-90'>
                        Shop Now
                    </button>
                </Link>
            </Stack>
        </Box>
    );
};

export default Hero;
