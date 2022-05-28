import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://fathomless-basin-14338.herokuapp.com/order?customerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user]);

    const handleCancel = (id) => {
        fetch(`https://fathomless-basin-14338.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Order is canceled.`);
                }
            });
    };
    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tool</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.tool}</td>
                                <td>
                                    {!order.paid &&
                                        <>
                                            <Link to={`/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>

                                            <label for="cancel-confirm-modal" className="btn btn-xs btn-error ml-2">Cancel</label>

                                            <input type="checkbox" id="cancel-confirm-modal" className="modal-toggle" />
                                            <div className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box">
                                                    <label for="cancel-confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to cancel the order?</h3>

                                                    <div className="modal-action">
                                                        <label for="cancel-confirm-modal">
                                                            <button onClick={() => handleCancel(order._id)} className="btn btn-xs 
                    btn-error">Confirm</button>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                    {order.paid && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;