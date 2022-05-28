import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTool = ({ tool }) => {
    const { _id, name, image, short_desc, minimum_order_quantity, available_quantity, price_per_unit } = tool;

    const navigate = useNavigate();

    const goToPurchcase = _id => {
        navigate(`/purchase/${_id}`);
    };
    return (
        // <div className=''>

        //     <img className='lg:max-w-lg' src={image} alt="" width="200px" height="130px" />

        //     <h4 className='mt-3 text-2xl'>{name}</h4>
        //     <p>{short_desc}</p>
        //     <h5 className='text-xl'>{minimum_order_quantity}</h5>
        //     <h5 className='text-xl'>{available_quantity}</h5>
        //     <h5 className='text-xl'>{price_per_unit}</h5>
        //     <button onClick={() => goToPurchcase(_id)} className='btn btn-secondary text-white w-60 mx-auto d-block mt-3 mb-5'>Buy Now</button>
        // </div>

        <div class="card w-90 bg-base-100 shadow-xl ">
            <figure><img src={image} alt="tool image" /></figure>
            <div class="card-body">
                <h4 className='mt-3 text-2xl'>{name}</h4>
                <p>{short_desc}</p>
                <h5 className='text-xl'>{minimum_order_quantity}</h5>
                <h5 className='text-xl'>{available_quantity}</h5>
                <h5 className='text-xl'>{price_per_unit}</h5>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTool;