import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../Header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function TestInventory() {
    const navigate = useNavigate();

    function Add() {
        navigate("/inventory/add");
    }

    function EditItem(id) {
        navigate("/inventory/edit/" + id);
    }

    // function TestEdit(id) {
    //     navigate("/testinventory/edit/" + id);
    // }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        await axios.get("/api/get_all_product").then(({ data }) => {
            setProducts(data.products);
        });
    };

    const columns = [
        {
            field: "image",
            headerName: "Image",
            width: 100,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => (
                <img src={`/uploads/${params.value}`} height="40px" />
            ),
        },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "type",
            headerName: "Type",
            width: 150,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "quantity",
            headerName: "Quantity",
            width: 150,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "price",
            headerName: "Price",
            width: 150,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "action",
            id: "action",
            headerName: "Action",
            width: 150,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => params.row.action,
        },
    ];

    const [rows, setRows] = useState([]);

    // function to update rows with products data
    const updateRows = (products) => {
        const newRows = products.map((item) => ({
            id: item.id,
            image: <img src={`/uploads/${item.photo}`} height="40px" />,
            product: item.name,
            type: item.type,
            quantity: item.quantity,
            price: item.price,
            action: <Button onClick={() => EditItem(item.id)}>Edit</Button>,
        }));
        setRows(newRows);
    };

    // call updateRows function with products data
    useEffect(() => {
        updateRows(products);
    }, [products]);

    // render the DataGrid with updated rows
    return (
        <Box sx={{ height: 580, width: "95%", margin: "80px auto" }}>
            <Header />
            <Button variant="contained" color="primary" onClick={() => Add()}>
                Add Item
            </Button>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[5]}
            />
        </Box>
    );
}
