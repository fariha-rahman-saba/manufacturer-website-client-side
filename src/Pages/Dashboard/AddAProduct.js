import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddAProduct = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = (event) => {
        event.preventDefault();
        const image = event.target.image.value;
        const name = event.target.name.value;
        const desc = event.target.desc.value;
        const minimum_order_quantity = event.target.minimum_order_quantity.value;
        const available_quantity = event.target.available_quantity.value;
        const price_per_unit = event.target.price_per_unit.value;

        const email = user.email;

        const url = 'http://localhost:5000/tool';
        const product = { email, image, name, desc, minimum_order_quantity, available_quantity, price_per_unit };



        fetch(url, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'authorization': `${user.email}`,
                'Content-type': 'application/json; charset=UTF-8',

            },
        }).then(res => res.json())
            .then(result => {
                event.target.reset();
                toast('Tool Added');
            });
    };
    return (
        <div className='addProduct'>
            <h1 className='text-3xl mt-6'>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Image URL" className="input input-bordered mt-6 w-full max-w-xs" name='image' /><br />
                <input type="text" placeholder="Name" className="input input-bordered mt-6 w-full max-w-xs" name='name' /><br />
                <input type="text" placeholder="Description" className="input input-bordered mt-6 w-full max-w-xs" name='desc' /><br />
                <input type="text" placeholder="Minimum Order Quantity" className="input input-bordered w-full mt-6 max-w-xs" name='minimum_order_quantity' /><br />
                <input type="text" placeholder="Available Quantity" className="input input-bordered w-full mt-6 max-w-xs" name='available_quantity' /><br />
                <input type="text" placeholder="Price per unit" className="input input-bordered w-full mt-6 max-w-xs" name='price_per_unit' /><br />
                <button className="btn btn-active mt-6 mb-6 btn-secondary w-full max-w-xs text-white">Add</button>
            </form>
        </div>
    );
};

export default AddAProduct;