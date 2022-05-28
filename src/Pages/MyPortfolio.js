import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='mb-6 mt-6 text-center'>
            <h1 className='text-3xl'>Name: Fariha Rahman Saba</h1>
            <h3 className='text-2xl mb-5'>Email: sabarahman.official@gmail.com</h3>
            <h5>Education: BSc third year at Jahangirnagar University, Savar, Dhaka, Bangladesh </h5>
            <p>List of tech skills: C, C++, Java, HTML, CSS, JavaScript, React, Node, Express js</p>
            <br />
            <p className='font-semibold'>List of my projects:</p>
            <ol>
                <li className='btn btn-active btn-link'><a href="https://book-inventory-568ec.web.app/">Book Mania</a></li>
                <li className='btn btn-active btn-link'><a href="https://independent-service-prov-8d2df.web.app/">Code With Saba</a></li>
                <li className='btn btn-active btn-link'><a href="https://product-reviewer.netlify.app/">Product Reviewer</a></li>

            </ol>
        </div>
    );
};

export default MyPortfolio;