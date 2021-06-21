import React from 'react';
import { Link } from 'react-router-dom';
import NoMacth from '../assets/404.png';

const NotFound = (props) => {
    const myStyle = {
        textAlign: 'center',
        backgroundColor: '#fff',
        height: '100%'
    };

    const myImageStyle = {
        maxWidth: '100%',
        height: '300px',
        marginTop: '50px'
    };

    return (
        <div style={myStyle}>
            <img src={NoMacth} style={myImageStyle} alt="" />
            <h1 style={{ color: 'tomato' }}>The page is not found! Please try again letter . . .</h1>
            <Link to="/dashboard">
                <button className="backButton">Back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;
