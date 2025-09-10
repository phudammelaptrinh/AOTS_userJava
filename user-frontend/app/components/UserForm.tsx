import * as React from "react";
import { Box, TextField, Button } from "@mui/material";

interface UserFormProps {
    onAdd: (name: string, email: string) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onAdd }) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() && email.trim()) {
            onAdd(name.trim(), email.trim());
            setName("");
            setEmail("");
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên người dùng"
                    variant="outlined"
                    size="small"
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    variant="outlined"
                    size="small"
                    sx={{ mb: 2 }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ bgcolor: "primary.main" }}
                >
                    THÊM NGƯỜI DÙNG
                </Button>
            </form>
        </Box>
    );
};

export default UserForm;
