import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';


const ManageProducts = () => {
    const [allTools, setAllTools] = useState([]);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://fathomless-basin-14338.herokuapp.com/tool`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {

                    setAllTools(data);
                });
        }
    }, [user]);

    const handleCancel = (id) => {
        fetch(`https://fathomless-basin-14338.herokuapp.com/tool/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
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


                                    <label for="cancel-confirm-modal" className="btn btn-xs btn-error ml-2">Delete</label>

                                    <input type="checkbox" id="cancel-confirm-modal" className="modal-toggle" />
                                    <div className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <label for="cancel-confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                            <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete the tool?</h3>

                                            <div className="modal-action">
                                                <label for="cancel-confirm-modal">
                                                    <button onClick={() => handleCancel(tool._id)} className="btn btn-xs 
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