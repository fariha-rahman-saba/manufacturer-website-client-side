import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTool = ({ tool }) => {
    const { name, image, short_desc, minimum_order_quantity, available_quantity, price_per_unit } = tool;

    const navigate = useNavigate();
    const handlePurchcase = event => {
        // navigate('/purchase');
    };
    return (
        <div className='course'>
            <img src={image} alt="" width="200px" height="130px" />
            <h4 className='mt-3'>{name}</h4>
            <p>{short_desc}</p>
            <h5>{minimum_order_quantity}</h5>
            <h5>{available_quantity}</h5>
            <h5>{price_per_unit}</h5>
            <button onClick={handlePurchcase} className='btn btn-primary w-50 mx-auto d-block mb-2'>Check out →</button>
        </div>
    );
};

export default SingleTool;