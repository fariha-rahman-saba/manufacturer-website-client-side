import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAReview = () => {

    const [user, loading, error] = useAuthState(auth);

    const handleSubmit = (event) => {
        event.preventDefault();

        const rating = event.target.rating.value;
        const desc = event.target.desc.value;

        const email = user.email;


        // console.log(image, name, short_desc, price, quantity, supplierName, sold);

        const url = 'http://localhost:5000/review';
        const review = { email, rating, desc };



        fetch(url, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                // 'authorization': `${user.email}`,
                'Content-type': 'application/json; charset=UTF-8',

            },
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset();
                toast('Review Added');
            });
    };
    return (
        <div>
            <h1 className='text-3xl mt-6'>Add Review</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Rating (1-5)" className="input input-bordered mt-6 w-full max-w-xs" name='rating' />
                <br />
                <input type="text" placeholder="Description" className="input input-bordered w-full mt-6 max-w-xs" name='desc' />
                <br />
                <button className="btn btn-active mt-6 btn-accent w-full max-w-xs">Submit</button>
                <ToastContainer />
            </form>
        </div>
    );
};

export default AddAReview;