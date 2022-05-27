import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
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

    return (
        <tr>
            <th>1</th>
            {/* <td>{displayName}</td> */}
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>

            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;