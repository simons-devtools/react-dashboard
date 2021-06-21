import React from 'react';
import Users from './Single/Users';

const UserControl = () => {
    // View single product handler func:
    const handleProfile = () => {
        const modal = document.getElementById("userModal");
        modal.style.display = "block";

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    // Delete single product handler func:
    const userDelete = () => {
        const modal = document.getElementById("modalDelete");
        modal.style.display = "block";

        const cancel = document.getElementsByClassName("cancel")[0];
        cancel.onclick = function () {
            modal.style.display = "none";
        }
    }

    return (
        <div style={{ margin: '50px' }}>
            <div className="">
                <div id="userModal" className="user-modal">
                    <div className="user-modal-content">
                        <Users />
                    </div>
                </div>
                <div id="modalDelete" className="delete-modal">
                    <div className="delete-content">
                        <h2>Are you sure delete this user?</h2>
                        <button className="delete">Agree</button>
                        <button className="cancel">Disagree</button>
                    </div>
                </div>
                <h2>I am user control dashboard</h2>
                <div className="user-data">
                    <table>
                        <thead>
                            <tr>
                                <th>User photo</th>
                                <th>User name</th>
                                <th>Email address</th>
                                <th>Phone number</th>
                                <th>User ID</th>
                                <th>Active date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" style={{ height: '50px' }} alt="" />
                                </td>
                                <td onClick={handleProfile} className="user-name">Mr. simon hembrom</td>
                                <td>cmoxsh@gmail.com</td>
                                <td>+880 1799867752</td>
                                <td>utskf52673</td>
                                <td>02/06/2021</td>
                                <td><button onClick={userDelete}>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserControl;