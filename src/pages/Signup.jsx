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
import { updateInput } from '../features/form/signupSlice';

// images
import bgImage from '../assets/images/jon-ly-Xn7GvimQrk8-unsplash.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {
    const dispatch = useDispatch();
    const { firstName, lastName, email, password, confirmPassword } =
        useSelector((store) => store.signup);
    return (
        <div className='w-full h-screen bg-primary'>
            <div className='container w-full flex justify-center items-center p-5'>
                <div className='wrapper form-wrapper'>
                    <div className='text-center'>
                        <h2 className='font-semibold text-main'>
                            {/* SHOP WITH DISCOUNT(%) */}
                            Create Your Account
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
                        <div className='grid sm:grid-cols-2 gap-5'>
                            <TextField
                                label='First Name'
                                size='small'
                                color='first'
                                value={firstName}
                                onChange={(event) =>
                                    dispatch(
                                        updateInput({
                                            name: 'firstName',
                                            value: event.target.value,
                                        })
                                    )
                                }
                            />
                            <TextField
                                label='Last Name'
                                size='small'
                                color='first'
                                value={lastName}
                                onChange={(event) =>
                                    dispatch(
                                        updateInput({
                                            name: 'lastName',
                                            value: event.target.value,
                                        })
                                    )
                                }
                            />
                        </div>
                        <TextField
                            label='Username'
                            size='small'
                            color='first'
                            InputProps={{}}
                            // value={username}
                            onChange={(event) =>
                                dispatch(
                                    updateInput({
                                        name: 'username',
                                        value: event.target.value,
                                    })
                                )
                            }
                        />
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
                            label='City'
                            size='small'
                            color='first'
                            InputProps={{}}
                            // value={city}
                            onChange={(event) =>
                                dispatch(
                                    updateInput({
                                        name: 'city',
                                        value: event.target.value,
                                    })
                                )
                            }
                        />
                        <TextField
                            label='Street'
                            size='small'
                            color='first'
                            InputProps={{}}
                            // value={street}
                            onChange={(event) =>
                                dispatch(
                                    updateInput({
                                        name: 'street',
                                        value: event.target.value,
                                    })
                                )
                            }
                        />
                        <TextField
                            label='Zipcode'
                            size='small'
                            color='first'
                            InputProps={{}}
                            // value={zipcode}
                            onChange={(event) =>
                                dispatch(
                                    updateInput({
                                        name: 'zipcode',
                                        value: event.target.value,
                                    })
                                )
                            }
                        />
                        <TextField
                            label='Phone'
                            size='small'
                            color='first'
                            InputProps={{}}
                            // value={phone}
                            onChange={(event) =>
                                dispatch(
                                    updateInput({
                                        name: 'phone',
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
                        <TextField
                            label='Confirm Password'
                            size='small'
                            color='first'
                            value={confirmPassword}
                            onChange={(event) =>
                                dispatch(
                                    updateInput({
                                        name: 'confirmPassword',
                                        value: event.target.value,
                                    })
                                )
                            }
                        />
                        <Button variant='contained' color='first'>
                            Sign Up
                        </Button>
                    </Stack>
                    <Stack>
                        <Typography variant='body2'>
                            Already a customer?{' '}
                            <Link to='/anywears/login'>
                                <Typography
                                    component='span'
                                    sx={{
                                        color: '#9E682A',
                                    }}
                                >
                                    Sign In
                                </Typography>
                            </Link>
                        </Typography>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default Signup;
