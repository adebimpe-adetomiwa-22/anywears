import {
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../../features/drawer/drawerSlice';

// icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CableRoundedIcon from '@mui/icons-material/CableRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import ManRoundedIcon from '@mui/icons-material/ManRounded';
import WomanRoundedIcon from '@mui/icons-material/WomanRounded';
import { Link } from 'react-router-dom';

const Sidebar = ({ handleClose }) => {
    const dispatch = useDispatch();
    const { open } = useSelector((store) => store.drawer);

    const { products } = useSelector((store) => store.products);

    // const handleClick = (event) => {
    //     const electronics = products.filter(
    //         (product) => product.category === 'electronics'
    //     );
    //     console.log(electronics);
    // };

    return (
        <Drawer
            anchor='left'
            open={open}
            onClose={() => dispatch(toggleDrawer())}
        >
            <Box
                role='presentation'
                sx={{
                    width: {
                        xs: '70vw',
                        sm: '50vw',
                        md: '30vw',
                        lg: '20vw',
                    },
                    textAlign: 'center',
                }}
            >
                <Stack
                    direction='row'
                    alignItems='center'
                    gap={2}
                    flexGrow={1}
                    color='#333333'
                    sx={{
                        bgcolor: '#EEE6DD',
                        minHeight: {
                            xs: '7vh',
                            sm: '10vh',
                            md: '15vh',
                        },
                        pr: 2,
                        boxShadow: '0 1px 15px rgba(158, 104, 42, 0.5)',
                    }}
                >
                    <Typography
                        variant='h6'
                        fontFamily='Viner Hand ITC'
                        fontWeight='600'
                        // fontSize='14px'
                        color='#9E682A'
                        flexGrow={1}
                    >
                        ANYwears
                    </Typography>
                    <IconButton
                        color='inherit'
                        size='small'
                        onClick={handleClose}
                    >
                        <CloseRoundedIcon />
                    </IconButton>
                </Stack>
                <Box>
                    <div className='p-3'>
                        <List className='flex flex-col gap-5'>
                            <Link to={`/anywears/category/electronics`}>
                                <div className='list'>
                                    <div className='list-icon'>
                                        <CableRoundedIcon fontSize='small' />
                                    </div>
                                    <p className='list-text'>Electronics</p>
                                </div>
                            </Link>
                            <Link to={`/anywears/category/jewelery`}>
                                <div className='list'>
                                    <div className='list-icon'>
                                        <DiamondRoundedIcon fontSize='small' />
                                    </div>
                                    <p className='list-text'>Jewelery</p>
                                </div>
                            </Link>
                            <Link to={`/anywears/category/men's clothing`}>
                                <div className='list'>
                                    <div className='list-icon'>
                                        <ManRoundedIcon fontSize='small' />
                                    </div>
                                    <p className='list-text'>Men's clothing</p>
                                </div>
                            </Link>
                            <Link to={`/anywears/category/women's clothing`}>
                                <div className='list'>
                                    <div className='list-icon'>
                                        <WomanRoundedIcon fontSize='small' />
                                    </div>
                                    <p className='list-text'>
                                        Women's clothing
                                    </p>
                                </div>
                            </Link>
                        </List>
                    </div>
                </Box>
                {/* <Typography>Sidebar</Typography> */}
                <div className='flex gap-5 justify-center mt-10'>
                    <Link to='/signup'>
                        <button className='bg-main text-primary btn border border-main'>
                            Signup
                        </button>
                    </Link>
                    <Link to='/login'>
                        <button className='text-main border border-main btn hover:bg-primary'>
                            Login
                        </button>
                    </Link>
                </div>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
