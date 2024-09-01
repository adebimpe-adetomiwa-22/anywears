import { IconButton, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { search } from '../../features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { clear } from '../../features/search/searchSlice';

const Searchbar = ({ padding, right }) => {
    const dispatch = useDispatch();
    const { searching, searchValue } = useSelector((store) => store.search);
    const clearSearch = () => {
        dispatch(clear());
    };
    return (
        <Stack
            px={padding}
            my={1}
            direction='row'
            alignItems='center'
            position='relative'
            // bgcolor='green'
            overflow={'hidden'}
            className='rounded-sm mr-5'
            width='100%'
        >
            <input
                type='text'
                className='outline-none border-none flex-grow h-8 px-2 text-sm'
                // placeholder='Shirt, Trousers'
                placeholder='Hard Drive, Samsung'
                value={searchValue}
                onChange={(event) => dispatch(search(event.target.value))}
            />
            <IconButton
                // color='first'
                // color='inherit'
                // size={searching ? 'small' : 'medium'}
                onClick={searching ? clearSearch : null}
                sx={{
                    position: 'absolute',
                    right: { right },
                    bgcolor: '#ffffff',
                    borderRadius: '0',
                }}
            >
                {!searching && <SearchIcon />}
                {searching && <CloseRoundedIcon />}
            </IconButton>
        </Stack>
    );
};

export default Searchbar;
