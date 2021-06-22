import React, { useEffect, useState } from 'react';
import CategoryProducts from '../Categories/CategoryProducts';
import Loading from '../../assets/loading.gif';
import ViewProduct from '../Categories/ViewProduct';

const SmartPhone = () => {
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        const url = 'https://rajshopnilserver.herokuapp.com/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // View single product with modal func:
    const viewProduct = (prod) => {
        const modal = document.getElementById("myModal");
        modal.style.display = "block";

        const span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
        setSingleProduct(prod);
    }

    // Update single product handler func:
    const updateProduct = (prodId) => {
        const name = document.querySelector('.name').value;
        const price = document.querySelector('.price').value;
        const group = document.querySelector('.group').value;
        const key = document.querySelector('.key').value;
        const seller = document.querySelector('.seller').value;
        const author = document.querySelector('.author').value;
        const category = document.querySelector('.category').value;
        const collection = document.querySelector('.collection').value;
        const date = document.querySelector('.date').value;
        const product = { prodId, name, price, group, key, seller, author, category, collection, date };
        fetch(`https://rajshopnilserver.herokuapp.com/update/${prodId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                // console.log('Updated successfully', result);
                if (result) {
                    const modal = document.getElementById("myModal");
                    modal.style.display = "none";
                    setTimeout(() => {
                        alert('Your product is successfully updated.');
                    }, 500);
                }
            })
    }

    // Delete single product handler func:
    const handleDelete = (addedId) => {
        fetch(`https://rajshopnilserver.herokuapp.com/deleteDataOne/${addedId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                // console.log('Deleted is', result);
                alert('Your are deleted this product from database storage!!');
                for (let i = 0; i < products.length; i++) {
                    const prod = products[i];
                    if (prod._id === addedId) {
                        products.splice(i, 1);
                        let newProducts = [...products];
                        setProducts(newProducts);
                    }
                }
            })
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
                {/* For the update product modal */}
                <div>
                    <span className="close">&times;</span>
                    <ViewProduct
                        updateProduct={updateProduct}
                        singleProduct={singleProduct}
                    />
                </div>
            </div>
            <h1 style={{ padding: '0 15px' }}>Customize your <span style={{ color: 'tomato' }}>"smart phone"</span> products</h1>
            {
                products.length <= 0 ? <img style={{ margin: 'auto' }} src={Loading} alt="" /> :
                    <div>
                        <div className="products-mainn">
                            <div>
                                <input type="text" placeholder="Search your brand . . ." style={{ padding: '10px 5px' }} />
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
                                        products.map(pd => pd.category === 'smart-phone' ?
                                            <CategoryProducts
                                                checked={single}
                                                singleCheckedBox={singleCheckedBox}
                                                product={pd} key={pd.key}
                                                viewProduct={viewProduct}
                                                handleDelete={handleDelete}
                                            /> : '')
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="footer">
                            <p>Previous 20</p>
                            <p>1 - 20 of {products.length}</p>
                            <p>Next 10</p>
                        </div>
                    </div>
            }
        </>
    );
};

export default SmartPhone;