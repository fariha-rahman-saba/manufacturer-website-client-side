import React from 'react';
import { toast } from 'react-toastify';

const NewsLetter = () => {
    const handleUpload = (event) => {
        event.preventDefault();
        toast('Yohoo!..Subscribed');
    };

    return (
        <div>
            <div className='w-50 mt-5 mx-auto'>
                <h1 className='mt-10 mb-3 text-3xl'>Subscribe to our Newsletter?</h1>
                <form onSubmit={handleUpload}>
                    <input type="text" placeholder="Name" className="input input-bordered mt-6 w-full max-w-xs" name='rating' /><br />
                    <input type="text" placeholder="Email" className="input input-bordered w-full mt-2 max-w-xs" name='desc' />
                    <br />
                    <button className="btn btn-active mt-6 mb-10 w-full max-w-xs">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;