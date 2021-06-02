import React from 'react';
import Users from './Single/Users';

const AdminStatus = (props) => {
    return (
        <div style={{ margin: '50px' }}>
            {/* <h1>I am admin status.</h1> */}
            <div>
                <Users />
            </div>
        </div>
    );
};

export default AdminStatus;
