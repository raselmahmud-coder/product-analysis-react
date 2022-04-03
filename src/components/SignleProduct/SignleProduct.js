import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignleProduct = ({ pd }) => {
    const { title, image, price, id } = pd;
    const navigate = useNavigate();
    console.log(navigate);
    return (
        <div className='w-full overflow-hidden xl:my-3 xl:px-3 xl:w-1/3' onClick={()=>navigate(`/${id}`)}>
            <img src={image} alt="" width={'120'} height="120"/>
            <p>Name: {title}</p>
            <small>Price {price}</small>
        </div>
    );
};

export default SignleProduct;