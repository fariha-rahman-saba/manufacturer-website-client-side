import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/purchase/${id}`;
    const [tool, setTool] = useState({});

    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, []);

    const navigate = useNavigate();

    const { _id, name, price_per_unit, minimum_order_quantity, short_desc, image, available_quantity } = tool;

    const handleOrder = event => {
        event.preventDefault();

        const order = {
            toolId: _id,
            tool: name,
            price_per_unit,
            customerEmail: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value
        };

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate(`/payment/${_id}`);
            });


    };


    return (


        <div>

            <div className="card w-90 bg-base-100 mt-10">
                <figure><img src={image} alt="tool image" /></figure>
                <div className="card-body">
                    <h4 className='mt-3 text-xl font-semibold'>{name}</h4>
                    <p>{short_desc}</p>
                    <h5 className=''>Minimum Order Quantity: {minimum_order_quantity}</h5>
                    <h5 className=''>Available Quantity: {available_quantity}</h5>
                    <h5 className=''>Price Per Unit: {price_per_unit}</h5>


                </div>

            </div>

            <label for="order-modal" className="btn btn-secondary modal-button text-white mt-5 mb-10 w-60">Place Order</label>

            <input type="checkbox" id="order-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Order for: {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>


                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="text" required name="order_quantity" value={minimum_order_quantity} className="input input-bordered w-full max-w-xs" />

                        <input type="text" required name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />

                        <input type="text" required name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Order" className="btn btn-secondary w-full max-w-xs text-white" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Purchase;;