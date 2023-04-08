import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Inventory() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    function newProduct() {
        navigate("/inventory/new");
    }

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        await axios.get("/api/get_all_product").then(({ data }) => {
            setProducts(data.products);
        });
    };

    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1>Inventory</h1>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => newProduct()}
                        >
                            Add Item
                        </Button>
                    </div>
                </div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Type</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 &&
                                products.map((item, key) => (
                                    <tr key={key}>
                                        <td>
                                            <img src={`/uploads/${item.photo}`} height="40px" />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.type}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button>Add</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
