import React from 'react';
import EditImg from '../../../assets/edit.png';
import DeleteImg from '../../../assets/trush.png';

const SmartPhn = (props) => {
    // console.log(props.product);
    const { product, handleView, handleEdit, handleDelete } = props;
    const { photoUrl, name, collection, group, category, key, price } = product;

    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td><img src={photoUrl} style={{ width: '70px', height: '50px' }} /></td>
            <td onClick={() => handleView(key)} className="prod-view">{name}</td>
            <td>{collection}</td>
            <td>{group}</td>
            <td>{category}</td>
            <td>{key}</td>
            <td>{price}</td>
            <td>
                {/* <button onClick={() => handleView(key)} className="btn-view">edit</button> */}
                <img onClick={() => handleEdit(key)} src={EditImg} className="action" />
                <img onClick={() => handleDelete(key)} src={DeleteImg} className="action" />
            </td>
        </tr>
    );
};

export default SmartPhn;