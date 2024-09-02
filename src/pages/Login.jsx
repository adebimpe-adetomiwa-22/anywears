import {
    Box,
    Button,
    Divider,
    FormControl,
    FormGroup,
    FormLabel,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { updateInput } from '../features/form/loginSlice';

// images
import bgImage from '../assets/images/jon-ly-Xn7GvimQrk8-unsplash.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const { email, password } = useSelector((store) => store.login);
    return (
        <div className='w-full h-screen bg-primary'>
            <div className='container w-full h-full flex justify-center items-center p-5'>
                <div className='wrapper form-wrapper'>
                    <div className='text-center'>
                        <h2 className='font-semibold text-main'>
                            {/* VIEW MORE PRODUCTS */}
                            Log In and Start Shopping
                        </h2>
                    </div>
                    <Divider />
                    <Stack
                        spacing={3}
                        flexGrow={1}
                        // sx={{
                        //     color: first.main,
                        // }}
                    >
                        <TextField
                            label='Email'
                            size='small'
                            color='first'
                            InputProps={{}}
                            value={email}
                            onChange={(event) =>
                                dispatch(
                                    updateInput({
                                        name: 'email',
                                        value: event.target.value,
                                    })
                                )
                            }
                        />
                        <TextField
                            label='Password'
                            size='small'
                            color='first'
                            value={password}
                            onChange={(event) =>
                                dispatch(
                                    updateInput({
                                        name: 'password',
                                        value: event.target.value,
                                    })
                                )
                            }
                        />
                        <Button variant='contained' color='first'>
                            Log In
                        </Button>
                    </Stack>
                    <Stack>
                        <Typography variant='body2'>
                            New customer?{' '}
                            <Link to='/anywears/signup'>
                                <Typography
                                    component='span'
                                    sx={{
                                        color: '#9E682A',
                                    }}
                                >
                                    Register
                                </Typography>
                            </Link>
                        </Typography>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default Login;
