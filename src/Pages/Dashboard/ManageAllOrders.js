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
            fetch(`https://fathomless-basin-14338.herokuapp.com/allOrder`, {
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
        fetch(`https://fathomless-basin-14338.herokuapp.com/order/${id}`, {
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
                                            <button className='btn btn-xs btn-success'>Unpaid</button>
                                        </>
                                    }
                                    {order.paid && <div>
                                        <p><span className='text-success'>Update Status</span></p>
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