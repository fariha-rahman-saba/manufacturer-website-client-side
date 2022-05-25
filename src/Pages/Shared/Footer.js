import React from 'react';
import './styles/footer.css';

const Footer = () => {
    return (
        <p className='footer'>Copyright © {(new Date().getFullYear())}</p>
    );
};

export default Footer;