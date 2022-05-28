import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';


const ManageProducts = () => {
    const [allTools, setAllTools] = useState([]);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/tool`, {
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

                    setAllTools(data);
                });
        }
    }, [user]);

    const handleCancel = (id) => {
        fetch(`http://localhost:5000/tool/${id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Tool is deleted.`);
                }
            });
    };

    return (
        <div>
            <h2>All Tools: {allTools.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tool</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTools.map((tool, index) => <tr key={tool._id}>
                                <th>{index + 1}</th>
                                <td>{tool.name}</td>
                                <td>


                                    <label for="cancel-confirm-modal" class="btn btn-xs btn-error ml-2">Delete</label>

                                    <input type="checkbox" id="cancel-confirm-modal" class="modal-toggle" />
                                    <div class="modal modal-bottom sm:modal-middle">
                                        <div class="modal-box">
                                            <label for="cancel-confirm-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                            <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete the tool?</h3>

                                            <div class="modal-action">
                                                <label for="cancel-confirm-modal">
                                                    <button onClick={() => handleCancel(tool._id)} class="btn btn-xs 
                    btn-error">Confirm</button>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;