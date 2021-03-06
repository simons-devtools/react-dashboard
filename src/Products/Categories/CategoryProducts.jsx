import React from 'react';
import EditImg from '../../assets/edit.png';
import DeleteImg from '../../assets/trush.png';

const CategoryProducts = (props) => {
    // console.log(props.product);
    const { product, viewProduct, handleDelete, checked, singleCheckedBox } = props;
    const { photoUrl, name, collection, group, category, _id, key, price } = product;

    return (
        <tr>
            <th><input type="checkbox"
                checked={checked}
                onChange={singleCheckedBox}
            /></th>
            <td><img src={photoUrl} style={{ width: '70px', height: '50px' }} alt="" /></td>
            <td>{name}</td>
            <td>{collection}</td>
            <td>{group}</td>
            <td>{category}</td>
            <td>{key}</td>
            <td>{price}</td>
            <td>
                <img onClick={() => viewProduct(product)} src={EditImg} alt="" className="action" />
                <img onClick={() => handleDelete(_id)} src={DeleteImg} alt="" className="action" />
            </td>
        </tr>
    );
};

export default CategoryProducts;