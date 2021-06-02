import React from 'react';
import Logo from '../assets/logo.svg';

const Dashboard = (props) => {
    return (
        <div>

            <header style={{ display: 'flex', flexWrap: 'wrap', margin: '20px' }}>
                <img src={Logo} style={{ height: '100px' }} />
                <h1>Welcome to admin dashboard</h1>
            </header>

            <main style={{ margin: '20px' }}>
                <div className="content-box">
                    <h2>Component one content</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat unde reiciendis ea id! Voluptates aliquam saepe ea minima libero. Praesentium voluptatem possimus ad numquam impedit similique non officiis consequatur excepturi quae minima repellat quibusdam, eius debitis reprehenderit, nesciunt autem fugiat, assumenda quasi est omnis exercitationem quod! Dolor corrupti nobis rem!</p>
                    <div>
                        <button>Go to console</button>
                        <button>Read more</button>
                    </div>
                </div>
                <div className="content-box">
                    <h2>Component two content</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat unde reiciendis ea id! Voluptates aliquam saepe ea minima libero. Praesentium voluptatem possimus ad numquam impedit similique non officiis consequatur excepturi quae minima repellat quibusdam, eius debitis reprehenderit, nesciunt autem fugiat, assumenda quasi est omnis exercitationem quod! Dolor corrupti nobis rem!</p>
                    <div>
                        <button>Go to console</button>
                        <button>Read more</button>
                    </div>
                </div>
                <div className="content-box">
                    <h2>Component three content</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat unde reiciendis ea id! Voluptates aliquam saepe ea minima libero. Praesentium voluptatem possimus ad numquam impedit similique non officiis consequatur excepturi quae minima repellat quibusdam, eius debitis reprehenderit, nesciunt autem fugiat, assumenda quasi est omnis exercitationem quod! Dolor corrupti nobis rem!</p>
                    <div>
                        <button>Go to console</button>
                        <button>Read more</button>
                    </div>
                </div>
                <div className="content-box">
                    <h2>Component four content</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat unde reiciendis ea id! Voluptates aliquam saepe ea minima libero. Praesentium voluptatem possimus ad numquam impedit similique non officiis consequatur excepturi quae minima repellat quibusdam, eius debitis reprehenderit, nesciunt autem fugiat, assumenda quasi est omnis exercitationem quod! Dolor corrupti nobis rem!</p>
                    <div>
                        <button>Go to console</button>
                        <button>Read more</button>
                    </div>
                </div>
                <div className="content-box">
                    <h2>Component four content</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat unde reiciendis ea id! Voluptates aliquam saepe ea minima libero. Praesentium voluptatem possimus ad numquam impedit similique non officiis consequatur excepturi quae minima repellat quibusdam, eius debitis reprehenderit, nesciunt autem fugiat, assumenda quasi est omnis exercitationem quod! Dolor corrupti nobis rem!</p>
                    <div>
                        <button>Go to console</button>
                        <button>Read more</button>
                    </div>
                </div>
                <div className="content-box">
                    <h2>Component four content</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat unde reiciendis ea id! Voluptates aliquam saepe ea minima libero. Praesentium voluptatem possimus ad numquam impedit similique non officiis consequatur excepturi quae minima repellat quibusdam, eius debitis reprehenderit, nesciunt autem fugiat, assumenda quasi est omnis exercitationem quod! Dolor corrupti nobis rem!</p>
                    <div>
                        <button>Go to console</button>
                        <button>Read more</button>
                    </div>
                </div>
            </main>

            <footer style={{ color: 'azure', backgroundColor: 'grey', padding: '14px', textAlign: 'center' }}>
                <p>&copy; Copy right by 2021 || All right reserved by Devtools.</p>
            </footer>

        </div>
    );
}

export default Dashboard;