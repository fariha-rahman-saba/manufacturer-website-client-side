import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://fathomless-basin-14338.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Successfully made an admin`);
                console.log(data);
            });
    };


    const handleDelete = () => {
        fetch(`https://fathomless-basin-14338.herokuapp.com/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`User is deleted.`);
                }
            });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>

            <td>
                <label for="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="delete-confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete?</h3>

                    <div className="modal-action">
                        <label for="delete-confirm-modal">
                            <button onClick={() => handleDelete()} className="btn btn-xs 
                    btn-error"> Delete</button>
                        </label>
                    </div>
                </div>
            </div>
        </tr>
    );
};

export default UserRow;