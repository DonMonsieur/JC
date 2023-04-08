import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function TestInventory() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    function newProduct() {
        navigate("/inventory/new");
    }

    function TestAdd() {
        navigate("/inventory/add");
    }

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        await axios.get("/api/get_all_product").then(({ data }) => {
            setProducts(data.products);
        });
    };

    const columns = [
        { id: "image", label: "Image", minWidth: 170, align: "left" },
        { id: "product", label: "Product", minWidth: 100, align: "left" },
        { id: "type", label: "Type", minWidth: 170, align: "left" },
        { id: "inventory", label: "Inventory", minWidth: 170, align: "left" },
        { id: "price", label: "Price", minWidth: 170, align: "left" },
    ];

    function createData(image, product, type, inventory, price) {
        return { image, product, type, inventory, price };
    }

    const rows = [];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper
            sx={{
                width: "80%",
                overflow: "hidden",
                margin: "100px auto auto auto",
            }}
        >
            <Button
                variant="contained"
                color="primary"
                onClick={() => TestAdd()}
            >
                Add Item
            </Button>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.length > 0 &&
                            products.map((item, key) => (
                                <TableRow key={key}>
                                    <TableCell>
                                        <img
                                            src={`/uploads/${item.photo}`}
                                            height="40px"
                                        />
                                    </TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>{item.price}</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            ))}

                        {/* {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.code}
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                >
                                                    {column.format &&
                                                    typeof value === "number"
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })} */}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
