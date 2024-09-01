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
                        sm: '60vw',
                        md: '50vw',
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
                    <List>
                        <Link to={`/category/electronics`}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <CableRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Electronics' />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to={`/category/jewelery`}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DiamondRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Jewelery' />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to={`/category/men-clothing`}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ManRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Men's clothing" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to={`/category/women-clothing`}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <WomanRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Women's clothing" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
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
