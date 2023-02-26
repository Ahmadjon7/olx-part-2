import React from 'react';
import './Loader.scss';

const Loader = () => {
    return (
    <div className='search-loader'>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    );
};

export default Loader;