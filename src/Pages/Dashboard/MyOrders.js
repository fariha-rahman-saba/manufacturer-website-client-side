import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customerEmail=${user.email}`, {
                method: 'GET',
                // headers: {
                //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                // }
            })
                .then(res => {
                    console.log('res', res);
                    // if (res.status === 401 || res.status === 403) {
                    //     signOut(auth);
                    //     localStorage.removeItem('accessToken');
                    //     navigate('/');
                    // }
                    return res.json();
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user]);

    const handleCancel = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE',
            // headers: {
            //     // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Order is canceled.`);
                    // setDeletingDoctor(null);
                    // refetch();
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
                            {/* <th>Name</th> */}
                            <th>Tool</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                {/* <td>{order.customerName}</td> */}
                                <td>{order.tool}</td>
                                <td>
                                    {!order.paid &&
                                        <>
                                            <Link to={`/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>
                                            <button className='btn btn-xs btn-error ml-2' onClick={() => handleCancel(order._id)}>cancel</button>
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