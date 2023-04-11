import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import logo from "../components/images/nms.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export default function Header() {
    const navigate = useNavigate();

    function Index() {
        navigate("/");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: grey[900] }}>
                <Toolbar>
                    <Tooltip title="Go to home page">
                        <Button onClick={Index}>
                            <img
                                src={logo}
                                alt="Logo"
                                width={"100px"}
                                sx={{ mr: 3 }}
                            />
                        </Button>
                    </Tooltip>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, ml: 3 }}
                    >
                        Inventory System
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
