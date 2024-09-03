import { Divider, IconButton } from '@mui/material';
import React, { useState } from 'react';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
// import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

const CartProducts = (props) => {
    // console.log(props);
    const { image, price, title, last } = props;
    const [amount, setAmount] = useState(1);
    const [price2, setPrice2] = useState(price);
    // console.log(price);

    return (
        <>
            <div className='product grid gap-3'>
                <div className='text-sm'>
                    <div className='flex gap-7 items-center justify-between px-2'>
                        <img src={image} className='h-10 w-10 object-contain' />
                        <h2 className=''>{title}</h2>

                        <div className='text-base font-semibold'>
                            <h2>${price2}</h2>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='mt-3 text-xs flex items-center justify-center transition opacity-75 hover:opacity-90 text-main'>
                        <DeleteOutlineRoundedIcon />
                        <button>Remove</button>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='flex items-center'>
                            <IconButton
                                onClick={() => {
                                    if (amount > 1) {
                                        setAmount(
                                            (prevAmount) => prevAmount - 1
                                        );
                                        setPrice2((prevPrice2) =>
                                            parseFloat(
                                                (prevPrice2 - price).toFixed(2)
                                            )
                                        );
                                    }
                                }}
                            >
                                <RemoveCircleOutlineRoundedIcon />
                            </IconButton>
                            <p className='font-mediumtext-lg'>{amount}</p>
                            <IconButton
                                onClick={() => {
                                    setAmount((prevAmount) => prevAmount + 1);
                                    setPrice2((prevPrice2) =>
                                        parseFloat(
                                            (prevPrice2 + price).toFixed(2)
                                        )
                                    );
                                }}
                            >
                                <AddCircleOutlineRoundedIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
            {!last && <Divider />}
        </>
    );
};

export default CartProducts;
