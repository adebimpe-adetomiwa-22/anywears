import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CableRoundedIcon from '@mui/icons-material/CableRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import ManRoundedIcon from '@mui/icons-material/ManRounded';
import WomanRoundedIcon from '@mui/icons-material/WomanRounded';
import { Link } from 'react-router-dom';

// Electronics
// Jewelry
// Men's clothing
// Women's clothing
const Category = () => {
    return (
        <div className='mt-10'>
            <div className='w-full h-10 bg-tertiary'>
                <div className='container w-full h-full  flex items-center'>
                    <p className='text-nursery'>Category</p>
                </div>
            </div>
            <div className='container flex justify-center'>
                <div className='p-1 grid grid-cols-2 gap-3 w-3/5 md:w-2/5 lg:w-2/6 xl:w-1/4 mt-3'>
                    <Link to={`/category/electronics`}>
                        <div className='category-item'>
                            <CableRoundedIcon />
                            <p className='text-sm'>Electronics</p>
                        </div>
                    </Link>

                    <Link to={`/category/jewelery`}>
                        <div className='category-item'>
                            <DiamondRoundedIcon />
                            <p>Jewelry</p>
                        </div>
                    </Link>

                    <Link to={`/category/men's clothing`}>
                        <div className='category-item'>
                            <ManRoundedIcon />
                            <p>Men's clothing</p>
                        </div>
                    </Link>

                    <Link to={`/category/women's clothing`}>
                        <div className='category-item'>
                            <WomanRoundedIcon />
                            <p>Women's clothing</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;
