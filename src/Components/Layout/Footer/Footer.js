import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <span> Coded By </span>{' '}
            <a
                href="https://bgopikrishna.me"
                target="_blank"
                rel="noopener noreferrer"
            >
                Gopi Krishna
            </a>
        </footer>
    );
};

export default Footer;
