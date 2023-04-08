import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate();

    function TestInventory() {
        navigate("/inventory");
    }
    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => TestInventory()}
            >
                View Inventory
            </Button>
        </div>
    );
}
