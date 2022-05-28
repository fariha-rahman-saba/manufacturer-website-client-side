import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTool = ({ tool }) => {
    const { _id, name, image, short_desc, minimum_order_quantity, available_quantity, price_per_unit } = tool;

    const navigate = useNavigate();

    const goToPurchcase = _id => {
        navigate(`/purchase/${_id}`);
    };
    return (

        <div class="card w-90 bg-base-100 shadow-xl ">
            <figure><img src={image} alt="tool image" /></figure>
            <div class="card-body">
                <h4 className='mt-3 text-xl font-semibold'>{name}</h4>
                <p>{short_desc}</p>
                <h5 className=''>Minimum Order Quantity: {minimum_order_quantity}</h5>
                <h5 className=''>Available Quantity: {available_quantity}</h5>
                <h5 className=''>Price Per Unit: {price_per_unit}</h5>
                <div class="card-actions justify-center">
                    <button onClick={() => goToPurchcase(_id)} class="btn btn-secondary text-white w-60">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTool;