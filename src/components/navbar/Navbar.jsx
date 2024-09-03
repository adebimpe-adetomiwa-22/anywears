import {
    AppBar,
    Badge,
    Box,
    Drawer,
    IconButton,
    Stack,
    TextField,
    Toolbar,
    Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../../features/drawer/drawerSlice';

// icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Sidebar from './Sidebar';
import Searchbar from '../searchbar/Searchbar';
import { Link } from 'react-router-dom';

// vars
const iconSize = {
    fontSize: {
        xs: 17.5,
        sm: 20,
        md: 21,
    },
};

const Navbar = ({ removeSearchBar }) => {
    // console.log(removeSearchBar);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleDrawer());
    };
    return (
        <>
            <Sidebar handleClose={handleClick} />
            <Box>
                <AppBar
                    position='relative'
                    sx={{
                        bgcolor: 'inherit',
                        boxShadow: 'none',
                        color: '#9E682A',
                    }}
                >
                    <Toolbar>
                        <Stack
                            direction='row'
                            alignItems='center'
                            gap={2}
                            flexGrow={1}
                            color='#333333'
                        >
                            <IconButton
                                color='inherit'
                                // size='small'
                                onClick={handleClick}
                            >
                                <MenuRoundedIcon fontSize='small' />
                            </IconButton>
                            <Link to='/anywears'>
                                <Typography
                                    variant='subtitle2'
                                    fontFamily='Viner Hand ITC'
                                    fontWeight='600'
                                    // fontSize='14px'
                                    color='#9E682A'
                                >
                                    ANYwears
                                </Typography>
                            </Link>
                        </Stack>
                        {!removeSearchBar && (
                            <div className='hidden sm:block mr-3'>
                                <Searchbar padding={0} right='0px' />
                            </div>
                        )}
                        <Stack
                            direction='row'
                            alignItems='center'
                            className='text-[#666666]'
                        >
                            <IconButton color='inherit' size='small'>
                                <AccountCircleIcon sx={iconSize} />
                            </IconButton>
                            <Link to='/anywears/cart'>
                                <IconButton color='inherit' size='small'>
                                    <Badge
                                        badgeContent={2}
                                        sx={{
                                            '& .MuiBadge-badge': {
                                                backgroundColor: '#9E682A',
                                                color: '#EEE6DD',
                                                fontSize: {
                                                    xs: '0.6rem',
                                                    sm: '0.7rem',
                                                },
                                                minHeight: {
                                                    xs: '13px',
                                                    sm: '15px',
                                                },
                                                minWidth: {
                                                    xs: '13px',
                                                    sm: '15px',
                                                },
                                                borderRadius: '50%',
                                                border: '1.5px solid #EEE6DD',
                                            },
                                        }}
                                    >
                                        <ShoppingCartIcon sx={iconSize} />
                                    </Badge>
                                </IconButton>
                            </Link>
                            {/* <IconButton color='inherit' size='small'>
                                <ShoppingCartIcon sx={iconSize} />
                            </IconButton> */}
                        </Stack>
                    </Toolbar>
                </AppBar>
                {/* <Stack direction='row' justifyContent='flex-start' ml={2}>
                <IconButton color='inherit'>
                    <MenuIcon />
                </IconButton>
            </Stack> */}
                {!removeSearchBar && (
                    <div className='sm:hidden'>
                        <Searchbar padding={0.5} right='5px' bg='red' />
                    </div>
                )}
            </Box>
        </>
    );
};

export default Navbar;
