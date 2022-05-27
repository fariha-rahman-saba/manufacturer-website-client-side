import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTool = ({ tool }) => {
    const { _id, name, image, short_desc, minimum_order_quantity, available_quantity, price_per_unit } = tool;

    const navigate = useNavigate();

    const goToPurchcase = _id => {
        navigate(`/purchase/${_id}`);
    };
    return (
        <div className=''>

            <img className='lg:max-w-lg' src={image} alt="" width="200px" height="130px" />

            <h4 className='mt-3'>{name}</h4>
            <p>{short_desc}</p>
            <h5>{minimum_order_quantity}</h5>
            <h5>{available_quantity}</h5>
            <h5>{price_per_unit}</h5>
            <button onClick={() => goToPurchcase(_id)} className='btn btn-primary w-50 mx-auto d-block mb-2'>Buy Now</button>
        </div>
    );
};

export default SingleTool;