import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageAllOrders = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/allOrder`, {
                method: 'GET',
                // headers: {
                //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                // }
            })
                .then(res => {
                    // if (res.status === 401 || res.status === 403) {
                    //     signOut(auth);
                    //     localStorage.removeItem('accessToken');
                    //     navigate('/');
                    // }
                    return res.json();
                })
                .then(data => {

                    setAllOrder(data);
                });
        }
    }, [user]);

    const handleCancel = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Order is deleted.`);
                }
            });
    };

    return (
        <div>
            <h2>All Orders: {allOrder.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Order</th>
                            <th>Customer Email</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.tool}</td>
                                <td>{order.customerEmail}</td>
                                <td>
                                    {!order.paid &&
                                        <>
                                            {/* <Link to={`/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link> */}

                                            <button className='btn btn-xs btn-success'>Unpaid</button>

                                            {/* <input type="checkbox" id="order-delete-confirm-modal" class="modal-toggle" />
                                            <div class="modal modal-bottom sm:modal-middle">
                                                <div class="modal-box">
                                                    <label for="order-delete-confirm-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to cancel the order?</h3>

                                                    <div class="modal-action">
                                                        <label for="order-delete-confirm-modal">
                                                            <button onClick={() => handleCancel(order._id)} class="btn btn-xs 
                    btn-error">Confirm</button>
                                                        </label> */}
                                            {/* </div> */}
                                            {/* </div> */}
                                            {/* </div> */}
                                        </>
                                    }
                                    {order.paid && <div>
                                        <p><span className='text-success'>Update Status</span></p>
                                        {/* <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p> */}
                                    </div>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};


export default ManageAllOrders;