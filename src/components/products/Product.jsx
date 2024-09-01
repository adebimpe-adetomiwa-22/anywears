import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from '@mui/material';
import React from 'react';

// images
import productImage from '../../assets/images/image2.jpg';
import { Link } from 'react-router-dom';

const Product = ({ id, price, title, image }) => {
    return (
        <Link to={`/product/${id}`}>
            <Box
                // width='150px'
                sx={{
                    width: {
                        xs: '150px',
                        sm: '200px',
                        // md: '250px',
                    },
                    '&:hover': {
                        scale: '1.05',
                        transition: 'scale 500ms ease',
                    },
                }}
            >
                <Card>
                    <CardMedia
                        component='img'
                        sx={{
                            height: {
                                xs: 135,
                                sm: 159,
                                // md: 250,
                            },
                        }}
                        // image={productImage}
                        image={image}
                        alt='product image'
                    />
                    <CardContent>
                        <Stack>
                            <Typography variant='subtitle2' fontWeight={600}>
                                ${price}
                            </Typography>
                            <Typography
                                variant='body2'
                                component='p'
                                className='text-slate-500 truncate'
                            >
                                {title}
                                {/* <p className='text-slate-500 text-sm truncate'>
                                {title}
                            </p> */}
                            </Typography>
                        </Stack>
                    </CardContent>

                    {/* <CardActions>
                    <Button size='small' color='first'>
                        Add to cart
                    </Button>
                </CardActions> */}
                </Card>
            </Box>
        </Link>
    );
};

export default Product;
