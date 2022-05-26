import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/purchase/${id}`;
    const [tool, setTool] = useState({});



    const [user, loading, error] = useAuthState(auth);


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, []);
    console.log("Tool: ", tool);

    const navigate = useNavigate();

    const goToPayment = _id => {
        navigate(`/payment/${_id}`);
    };

    const { _id, name, price_per_unit, minimum_order_quantity } = tool;

    const handleOrder = event => {
        event.preventDefault();
        // const slot = event.target.slot.value;

        const order = {
            toolId: _id,
            tool: name,
            // date: formattedDate,
            // slot,
            price_per_unit,
            customerEmail: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value
        };

        fetch('https://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    // toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    // toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                // setTreatment(null);
                // refetch();
            });
    };

    // const { id } = useParams();
    // const url = `http://localhost:5000/purchase/${id}`;

    // // const url = `https://secret-dusk-46242.herokuapp.com/booking/${id}`;

    // const { data: tool, isLoading } = useQuery(['purchase', id], () => fetch(url, {
    //     method: 'GET',
    //     // headers: {
    //     //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     // }
    // }).then(res => res.json()));


    return (
        // <div>
        // {/* <img src={tool.image} alt="" width="200px" height="200px" />
        // <h4 className='mt-3'>Name: {tool.name}</h4>
        // <p>Description: {tool.short_desc}</p>
        // <h5>Price per unit: ${tool.price_per_unit}</h5>
        // <h5>Available Quantity: <span id='quantityValue'>{tool.available_quantity}</span></h5>
        // <h5>Minimum Order Quantity: {tool.minimum_order_quantity}</h5>
        // <button id='delivered-btn' type="submit" onClick={() => goToPayment(tool._id)} className="btn btn-secondary mt-3 w-25">Place Order</button> */}
        // {/* <ToastContainer/></ToastContainer> */}


        <div>
            <img src={tool.image} alt="" width="200px" height="200px" />
            <h4 className='mt-3'>Name: {tool.name}</h4>
            <p>Description: {tool.short_desc}</p>

            <label for="order-modal" class="btn modal-button">Place Order</label>

            <input type="checkbox" id="order-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Order for: {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>


                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="order_quantity" value={minimum_order_quantity} className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Order" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>



    );
};

export default Purchase;