import React, { useEffect, useState } from 'react';
import SmartPhn from './Categories/SmartPhn';
import Loading from '../../assets/loading.gif';

const SmartPhone = () => {
    const [products, setProducts] = useState([]);
    // const newData = products.slice(0, 21);

    useEffect(() => {
        const url = 'http://localhost:5200/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <h1>Customize your <span style={{color: 'tomato'}}>"smart phone"</span> products</h1>
            {
                products.length <= 0 ? <img style={{ margin: 'auto' }} src={Loading} /> :
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p><input type="text" placeholder="Search your brand . . ." style={{ padding: '10px 5px' }} /></p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', letterSpacing: '2px' }}>
                                <p style={{ color: 'grey', fontWeight: '700', marginRight: '20px' }}>
                                    <span>Rows per page </span>
                                    <input type="number" defaultValue="10" style={{ width: '40px' }} />
                                </p>
                                <p style={{ marginRight: '35px' }}>1<span> - </span>10 of <span>123</span></p>
                                <p><span></span></p>
                            </div>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Sellect all</th>
                                    <th>Products name</th>
                                    <th>Collection</th>
                                    <th>Category</th>
                                    <th>Products key</th>
                                    <th>Price</th>
                                    <th>Update</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(pd => pd.category === 'tablet' ? <SmartPhn product={pd} key={pd.key} /> : '')
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </>
    );
};

export default SmartPhone;