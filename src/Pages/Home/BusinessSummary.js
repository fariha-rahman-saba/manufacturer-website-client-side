import React from 'react';
import './styles/businessSummary.css';

const BusinessSummary = () => {
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-3xl font-bold uppercase'>Business at a Glance</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4   business-summary'>
                <div className="card lg:max-w-lg bg-base-100 summary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">48</h2>
                        <p>Countries</p>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 summary">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-hammer" viewBox="0 0 16 16">
                        <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z" />
                    </svg>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">10K+</h2>
                        <p>Products Delivered</p>
                    </div>
                </div>

                <div className="card lg:max-w-lg bg-base-100 summary">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">298+</h2>
                        <p>Happy Clients</p>
                    </div>
                </div>

                <div className="card lg:max-w-lg bg-base-100 summary">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">379+</h2>
                        <p>Feedbacks</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BusinessSummary;