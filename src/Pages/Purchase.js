import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/${id}`;
    const [tool, setTool] = useState({});

    const [user, loading, error] = useAuthState(auth);


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, []);
    console.log("Tool: ", tool);
    return (
        <div>
            <img src={tool.image} alt="" width="200px" height="200px" />
            <h4 className='mt-3'>Name: {tool.name}</h4>
            <p>Description: {tool.short_desc}</p>
            <h5>Price per unit: ${tool.price_per_unit}</h5>
            <h5>Available Quantity: <span id='quantityValue'>{tool.available_quantity}</span></h5>
            <h5>Minimum Order Quantity: {tool.minimum_order_quantity}</h5>
            {/* <button id='delivered-btn' type="submit" onClick={handleDelivered} className="btn btn-secondary mt-3 w-25">Delivered</button> */}
            {/* <ToastContainer/></ToastContainer> */}
        </div>
    );
};

export default Purchase;