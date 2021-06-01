import React, { useEffect, useState } from 'react';
import CategoryProducts from '../Categories/CategoryProducts';
import Loading from '../../assets/loading.gif';
import ViewProduct from '../Categories/ViewProduct';

const SecurityCamera = () => {
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        const url = 'http://localhost:5200/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // View single product handler func:
    const handleView = (product) => {
        const modal = document.getElementById("myModal");
        modal.style.display = "block";

        const span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        setSingleProduct(product);
    }

    // Delete single product handler func:
    const handleDelete = (key) => {
        console.log('Delete product ID', key);
        const modal = document.getElementById("deleteModal");
        modal.style.display = "block";

        const cancel = document.getElementsByClassName("cancel")[0];
        cancel.onclick = function () {
            modal.style.display = "none";
        }

    }

    // Checkbox function:
    const [multiple, setMultiple] = useState(false);
    const [single, setSingle] = useState(false);

    const multipleCheckedBox = (event) => {
        setMultiple(event.target.checked);
        setSingle(event.target.checked);
    };

    const singleCheckedBox = (event) => {
        const oneByOne = (event.target.checked.length);
        setSingle(oneByOne);
    };

    return (
        <>
            <div id="myModal" className="modal">
                <div>
                    <span class="close">&times;</span>
                    <ViewProduct singleProduct={singleProduct} />
                </div>
            </div>
            <div id="deleteModal" className="delete-modal">
                <div className="delete-content">
                    <h2>Are you sure delete this product?</h2>
                    <button className="delete">Agree</button>
                    <button className="cancel">Disagree</button>
                </div>
            </div>
            <h1 style={{ padding: '0 15px' }}>Customize your <span style={{ color: 'tomato' }}>"smart phone"</span> products</h1>
            {
                products.length <= 0 ? <img style={{ margin: 'auto' }} src={Loading} /> :
                    <div>
                        <div style={{ padding: '0 15px' }}>
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
                                        <th><input type="checkbox"
                                            checked={multiple}
                                            onChange={multipleCheckedBox}
                                        /></th>
                                        <th>Sellect all</th>
                                        <th>Products name</th>
                                        <th>Collect</th>
                                        <th>Products group</th>
                                        <th>Category</th>
                                        <th>Products key</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(pd => pd.category === 'security-camera' ?
                                            <CategoryProducts
                                                checked={single}
                                                singleCheckedBox={singleCheckedBox}
                                                product={pd} key={pd.key}
                                                handleView={handleView}
                                                handleDelete={handleDelete}
                                            /> : '')
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div style={{ color: 'azure', backgroundColor: 'grey', textAlign: 'center', padding: '14px 0' }}>
                            <p>&copy; Copy right by 2021 || All right reserved by Devtools.</p>
                        </div>
                    </div>
            }
        </>
    );
};

export default SecurityCamera;