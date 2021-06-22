import React from 'react';

const ViewProduct = (props) => {
    // console.log(props.singleProduct);
    const { singleProduct, updateProduct } = props;
    const { photoUrl, name, price, group, _id, key, seller, author, category, collection, date, features } = singleProduct;

    return (
        <>
            <div className="modal-content">
                <h2>Update your specific product</h2>
                <div className="product-detail">
                    <form action="#" className="form-div">
                        <div className="box">
                            <label>Product name</label> <br />
                            <input type="text" defaultValue={name} className="name" /> <br />
                            <label>Product price</label> <br />
                            <input type="text" defaultValue={price} className="price" /> <br />
                            <label>Product group</label> <br />
                            <input type="text" defaultValue={group} className="group" /> <br />
                            <label>Product key</label> <br />
                            <input type="text" defaultValue={key} className="key" /> <br />
                            <label>Product seller</label> <br />
                            <input type="text" defaultValue={seller} className="seller" /> <br />
                        </div>
                        <div className="box">
                            <label>Product author</label> <br />
                            <input type="text" defaultValue={author} className="author" /> <br />
                            <label>Product category</label> <br />
                            <input type="text" defaultValue={category} className="category" /> <br />
                            <label>Product collection</label> <br />
                            <input type="text" defaultValue={collection} className="collection" /> <br />
                            <label>Relassed date</label> <br />
                            <input type="text" defaultValue={date} className="date" /> <br />
                            <label>New photo</label> <br />
                            <input type="file" name="" id="" />
                        </div>
                        <div>
                            <img src={photoUrl} alt="" />
                        </div>
                    </form>
                </div>
                <div className="product-features">
                    <button onClick={() => updateProduct(_id)} type="button">Update product</button>
                </div>
            </div>
        </>
    );
};

export default ViewProduct;