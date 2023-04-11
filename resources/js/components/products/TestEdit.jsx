import React, { useState, useEffect } from "react";
import { Button, Container } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";


export default function TestEdit() {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { id } = useParams();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [avatar, setAvatar] = useState(true);

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
        } else {
            let reader = new FileReader();
            reader.onload = (e) => {
                setAvatar(false);
                setPhoto(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        await axios
            .get(`/api/get_edit_product/${id}`)
            .then(({ data }) => {
                const { name, description, photo, type, quantity, price } =
                    data.product;
                setName(name);
                setDescription(description);
                setPhoto(photo);
                setType(type);
                setQuantity(quantity);
                setPrice(price);
            })
            .catch(({ response: { data } }) => {});
    };

    function ourImage(img) {
        return "/upload/" + img;
    }

    const updateItem = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("description", description);
        formData.append("photo", photo);
        formData.append("type", type);
        formData.append("quantity", quantity);
        formData.append("price", price);

        await axios
            .post(`/api/update_product/${id}`, formData)
            .then((data) => {
                alert("Product updated successfully");

                navigate("/inventory");
            })
            .catch((error) => {});
    };

    return (
        <Box>
            <Tooltip title="Edit item">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        handleClickOpen();
                    }}
                >
                    <EditIcon />
                </Button>
            </Tooltip>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Item</DialogTitle>
                <DialogContent>
                    <Stack
                        spacing={2}
                        sx={{ width: "500px", margin: "10px auto" }}
                    >
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
                                setDescription(event.target.value);
                            }}
                        />

                        <Container maxWidth="lg">
                            {avatar === true ? (
                                <img
                                    src={ourImage(photo)}
                                    alt=""
                                    width="117px"
                                    height="100px"
                                />
                            ) : (
                                <img
                                    src={photo}
                                    alt=""
                                    width="117px"
                                    height="100px"
                                />
                            )}
                        </Container>
                        <Typography variant="body1" color="initial">
                            Add Image
                        </Typography>
                        <TextField
                            type="file"
                            onChange={changeHandler}
                        ></TextField>
                        <TextField
                            id="type"
                            label="Type"
                            variant="outlined"
                            sx={{ width: "400px" }}
                            type="text"
                            value={type}
                            onChange={(event) => {
                                setType(event.target.value);
                            }}
                        />
                        <TextField
                            id="quantity"
                            label="Quantity"
                            variant="outlined"
                            sx={{ width: "400px" }}
                            type="number"
                            value={quantity}
                            onChange={(event) => {
                                setQuantity(event.target.value);
                            }}
                        />
                        <TextField
                            id="price"
                            label="Price"
                            variant="outlined"
                            sx={{ width: "400px" }}
                            type="number"
                            value={price}
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary"
                        variant="contained"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={(event) => {
                            handleClose();
                            updateItem(event);
                        }}
                        color="primary"
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
