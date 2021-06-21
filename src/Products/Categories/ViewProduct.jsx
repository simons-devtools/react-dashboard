import React from 'react';

const ViewProduct = (props) => {
    // console.log(props.singleProduct);
    const { photoUrl, name, price, group, key, seller, author, category, collection, date, features } = props.singleProduct;

    return (
        <>
            <div className="modal-content">
                <h2>Update your specific product</h2>
                <div className="product-detail">
                    <form action="#">
                        <label>Product name</label> <br />
                        <input type="text" defaultValue={name} /> <br />
                        <label>Product price</label> <br />
                        <input type="text" defaultValue={price} /> <br />
                        <label>Product group</label> <br />
                        <input type="text" defaultValue={group} /> <br />
                        <label>Product key</label> <br />
                        <input type="text" defaultValue={key} /> <br />
                        <label>Product seller</label> <br />
                        <input type="text" defaultValue={seller} /> <br />
                        <label>Product author</label> <br />
                        <input type="text" defaultValue={author} /> <br />
                        <label>Product category</label> <br />
                        <input type="text" defaultValue={category} /> <br />
                        <label>Product collection</label> <br />
                        <input type="text" defaultValue={collection} /> <br />
                        <label>Relassed date</label> <br />
                        <input type="text" defaultValue={date} />
                    </form>
                    <img src={photoUrl} alt="" /> <br />
                </div>
                <div className="product-features">
                    <textarea defaultValue={features}></textarea> <br />
                    <button type="submit">Update product</button>
                </div>
            </div>
        </>
    );
};

export default ViewProduct;