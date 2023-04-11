import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import Header from "../Header";

export default function AddUser() {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [password, setPassword] = useState("");

    function handleEmailChange(event) {
        const newEmail = event.target.value;
        setEmail(newEmail);

        // email validation regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(regex.test(newEmail));
    }

    return (
        <div>
            <Header />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "70px auto 75px auto",
                    maxWidth: "500px",
                    minWidth: "300px",
                    boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.25)",
                }}
            >
                <Stack spacing={2} sx={{ width: "80%", marginBottom: "20px" }}>
                    <AccountCircleIcon
                        sx={{
                            color: "primary.main",
                            fontSize: "100px",
                            marginX: "auto",
                            marginTop: "50px",
                        }}
                    />
                    <Typography variant="h4" align="center" gutterBottom>
                        Add a user
                    </Typography>
                    <TextField
                        id="username-input"
                        type="text"
                        label="Username"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        id="name-input"
                        type="text"
                        label="name"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        id="email-input"
                        type="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        value={email}
                        error={!isValidEmail}
                        helperText={
                            !isValidEmail &&
                            "Please enter a valid email address."
                        }
                        onChange={handleEmailChange}
                    />
                    <TextField
                        id="password-input"
                        type="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        required
                        inputProps={{ minLength: 6, maxLength: 15 }}
                        error={
                            password.length > 0 &&
                            (password.length < 6 || password.length > 15)
                        }
                        helperText={
                            password.length > 0 &&
                            (password.length < 6 || password.length > 15)
                                ? "Password must have between 6 and 15 characters"
                                : ""
                        }
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        style={{
                            width: "30%",
                            margin: "0 auto",
                            marginTop: "15px",
                        }}
                        variant="contained"
                    >
                        Add User
                    </Button>
                </Stack>
            </Box>
        </div>
    );
}
