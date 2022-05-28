import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const stripePromise = loadStripe('pk_test_51L3Q06JNtmQ83Vl7xVBAS5xkRLx4zwBmlaSi8lgTImpsV891Ztdnqt8d4PnsKMyq3Ou6Fn57KJu1cKMaxWuCSm7r00ccGMEGkg');


const Payment = () => {



    const { id } = useParams();
    const [tool, setTool] = useState({});
    const url = `http://localhost:5000/payment/${id}`;



    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, []);

    return (
        <div className=''>
            <h1 className='text-3xl mb-10 mt-10'>Pay</h1>
            <div class="card  bg-base-100 flex-shrink-0 w-50 max-w-md shadow-2xl mb-10 mt-10 ">

                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm tool={tool} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;