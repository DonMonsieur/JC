import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function TestAdd() {
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
            const { data } = await axios.post("/api/add_product", formData);
            toast.fire({
                icon: "success",
                title: "Item added successfully",
            });
            navigate("/");
        } catch (error) {}
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Stack spacing={2} sx={{ width: "500px" }}>
                <Typography variant="body1" color="initial">
                    Add Item
                </Typography>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    sx={{ width: "400px" }}
                    type="text"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <TextField
                    id="description"
                    label="Description"
                    variant="outlined"
                    sx={{ width: "400px" }}
                    type="text"
                    value={description}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />

                <Container maxWidth="lg">
                    <img src={photo} alt="" width="117px" height="100px" />
                </Container>
                <Typography variant="body1" color="initial">
                    Add Image
                </Typography>
                <TextField type="file" onChange={changeHandler}></TextField>
                <TextField
                    id="type"
                    label="Type"
                    variant="outlined"
                    sx={{ width: "400px" }}
                />
                <TextField
                    id="quantity"
                    label="Quantity"
                    variant="outlined"
                    sx={{ width: "400px" }}
                />
                <TextField
                    id="price"
                    label="Price"
                    variant="outlined"
                    sx={{ width: "400px" }}
                />
                <Button onClick={(event) => createProduct(event)}>Save</Button>
                <Typography variant="body1" color="initial">
                    Add Image
                </Typography>
                <Typography variant="body1" color="initial">
                    Add Image
                </Typography>
                <Typography variant="body1" color="initial">
                    Add Image
                </Typography>
                <Typography variant="body1" color="initial">
                    Add Image
                </Typography>
                <Typography variant="body1" color="initial">
                    Add Image
                </Typography>
                <Typography variant="body1" color="initial">
                    Add Image
                </Typography>
                <Typography variant="body1" color="initial">
                    Add Image
                </Typography>
            </Stack>
        </Box>
    );
}
