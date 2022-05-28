import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Successfully made an admin`);
                console.log(data);
            });
    };


    const handleDelete = () => {
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
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
                <label for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="delete-confirm-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete?</h3>

                    <div class="modal-action">
                        <label for="delete-confirm-modal">
                            <button onClick={() => handleDelete()} class="btn btn-xs 
                    btn-error"> Delete</button>
                        </label>
                    </div>
                </div>
            </div>
        </tr>
    );
};

export default UserRow;