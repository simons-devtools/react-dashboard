import React from 'react';

const SmartPhn = (props) => {
    // console.log(props.product);
    const { photoUrl, name, collection, category, key, price } = props.product;

    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td><img src={photoUrl} style={{width: '70px', height: '50px'}} /></td>
            <td>{name}</td>
            <td>{collection}</td>
            <td>{category}</td>
            <td>{key}</td>
            <td>{price}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    );
};

export default SmartPhn;