import React from 'react';

const SmartPhn = (props) => {
    // console.log(props.product);
    const { name, collection, category, seller, key, price } = props.product;

    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{name}</td>
            <td>{collection}</td>
            <td>{category}</td>
            <td>{seller}</td>
            <td>{key}</td>
            <td>{price}</td>
            <td><a href="">edit</a></td>
            <td><a href="">remove</a></td>
        </tr>
    );
};

export default SmartPhn;