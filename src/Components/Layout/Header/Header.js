import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h1 className="text-align-center">
                <Link to="/">Hera Images</Link>
            </h1>
        </div>
    );
};

export default Header;
