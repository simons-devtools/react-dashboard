import React from 'react';

const SmartPhn = (props) => {
    // console.log(props.product);
    const { product, handleView, handleEdit, handleDelete } = props;
    const { photoUrl, name, collection, group, category, key, price } = product;

    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td><img src={photoUrl} style={{ width: '70px', height: '50px' }} /></td>
            <td>{name}</td>
            <td>{collection}</td>
            <td>{group}</td>
            <td>{category}</td>
            <td>{key}</td>
            <td>{price}</td>
            <td>
                <button onClick={() => handleView(key)} className="btn-view">View</button>
                <button onClick={() => handleEdit(key)} className="btn-edit">edit</button>
                <button onClick={() => handleDelete(key)} className="btn-delete">delete</button>
            </td>
        </tr>
    );
};

export default SmartPhn;