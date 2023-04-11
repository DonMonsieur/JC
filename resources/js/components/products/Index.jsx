import React from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";

export default function () {
    const navigate = useNavigate();

    function Inventory() {
        navigate("/inventory");
    }

    function AddUser() {
        navigate("/user/add");
    }

    function TestInventory() {
        navigate("/testinventory");
    }

    return (
        <div>
            <Header />

            <Box sx={{ margin: "100px auto", width: "300px" }}>
                <Stack spacing={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => Inventory()}
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
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => TestInventory()}
                    >
                        Test Inventory
                    </Button>
                </Stack>
            </Box>
        </div>
    );
}
