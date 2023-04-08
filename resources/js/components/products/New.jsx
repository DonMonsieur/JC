import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function New() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    const changeHandler = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        let limit = 1024 * 1024 * 2;
        if (file["size"] > limit) {
            Swal.fire({
                type: "error",
                title: "Oops...",
                text: "Something went wrong",
                footer: "Why do i have this issue",
            });
        }
        reader.onloadend = (file) => {
            setPhoto(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const createProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("description", description);
        formData.append("photo", photo);
        formData.append("type", type);
        formData.append("quantity", quantity);
        formData.append("price", price);

        try {
            const { data } = await axios.post("/api/add_product",formData);
            toast.fire({
              icon:"success",
              title: "Item added successfully",   
            });
            navigate("/");
          } catch (error) {
            
          }

    //     await axios
    //         .post("/api/add_product", formData)
    //         .then(({ data }) => {
    //             toast.fire({
    //                 icon: "success",
    //                 title: "Product add successfull",
    //             });
    //             navigate("/");
    //         })
    //         .catch(({ response }) => {});
    };

    return (
        <div>
            <h1>Add Product</h1>
            <button onClick={(event) => createProduct(event)}>save</button>
            <p>Name</p>
            <input
                type="text"
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />

            <p>Description (Optional)</p>
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
            ></textarea>
            <ul>
                <li>
                    <div>
                        <img src={photo} alt="" width="117px" height="100px" />
                    </div>
                </li>
                <li>
                    <form action="">
                        <label htmlFor="">Add Image</label>
                        <input type="file" onChange={changeHandler} />
                    </form>
                </li>
            </ul>
            <p>Product Type</p>
            <input
                type="text"
                value={type}
                onChange={(event) => {
                    setType(event.target.value);
                }}
            />
            <p>Inventory</p>
            <input
                type="number"
                value={quantity}
                onChange={(event) => {
                    setQuantity(event.target.value);
                }}
            />
            <p>Price</p>
            <input
                type="number"
                value={price}
                onChange={(event) => {
                    setPrice(event.target.value);
                }}
            />
            <button onClick={(event) => createProduct(event)}>save</button>
        </div>
    );
}
