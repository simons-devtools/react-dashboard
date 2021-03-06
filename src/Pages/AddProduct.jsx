import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [photoUrl, setPhotoUrl] = useState(null);

    // Handle form Submition:
    const onSubmit = (data) => {
        const productsData = {
            name: data.name,
            author: data.author,
            category: data.category,
            price: data.price,
            date: data.date,
            features: data.features,
            collection: data.collection,
            group: data.group,
            seller: data.seller,
            key: data.key,
            stock: data.stock,
            discount: data.discount,
            photoUrl: photoUrl
        };
        const url = `https://rajshopnilserver.herokuapp.com/addProduct`;
        // console.log(url); // No 02
        // console.log(productsData); // No 03
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productsData)
        })
            .then(res => {
                // console.log('From server response', res) // No 04
                const message = document.getElementById("myMessage");
                message.style.display = "block";
                // alert('Your product is added to the server storage!');
            });
    };

    // Handle Images Upload:
    const handleImageUpload = (e) => {
        // console.log(e.target.files[0]);
        const photoData = new FormData();
        photoData.set('key', '7d2598c0cf9adb7c67d11745142e540b'); // For the img hosting provider site api key here!!
        photoData.append('image', e.target.files[0])

        // GET imgbb photo-url and POST to MDB server:
        axios.post('https://api.imgbb.com/1/upload', photoData)
            .then(function (response) {
                setPhotoUrl(response.data.data.display_url);
                // console.log(response.data.data.display_url); // No 01
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="main">
            <div className="sub-main">
                <p id="myMessage"><strong>Your product is added to the server storage!</strong></p>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="main-form">
                        <div className="left-input">
                            <h3>First products box</h3>
                            <input type="name" placeholder="Name" {...register("name")} />
                            <input type="number" placeholder="Price" {...register("price")} />
                            <input type="category" placeholder="Category" {...register("category")} />
                            <input type="collection" placeholder="collection" {...register("collection")} />
                            <input type="group" placeholder="group" {...register("group")} />
                            <input type="key" placeholder="key" {...register("key")} />
                        </div>
                        <div className="right-input">
                            <h3>Middle products box</h3>
                            <input type="seller" placeholder="seller" {...register("seller")} />
                            <input type="author" placeholder="Author" {...register("author")} />
                            <input type="file" onChange={handleImageUpload} className="file" />
                            <input type="stock" placeholder="Stock" {...register("stock", { required: true })} />
                            <input type="discount" placeholder="Discount" {...register("discount", { required: true })} />
                            <input type="date" {...register("date", { required: true })} />
                        </div>
                        <div className="last-input">
                            <h3>Last products box</h3>
                            <textarea type="text" placeholder="Enter your product features. . ." {...register("features")} /> <br />
                            <input type="submit" value="Add your product" className="add-btn" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;