import React from "react";
import Header from '../Header'
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate();

    function TestInventory() {
        navigate("/inventory");
    }

    function AddUser() {
        navigate("/user/add");
    }

    return (
        <div>
            <Header />

            <Box sx={{ margin: "100px auto", width: "300px" }}>
                <Stack spacing={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => TestInventory()}
                    >
                        View Inventory
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => AddUser()}
                    >
                        Add User
                    </Button>
                </Stack>
            </Box>
        </div>
    );
}
