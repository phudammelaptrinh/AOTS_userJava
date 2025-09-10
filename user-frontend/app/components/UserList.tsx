import * as React from "react";
import {
    Box,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Checkbox, IconButton, Paper
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export interface User {
    id: number;
    name: string;
    email: string;
    active: boolean;
}

interface UserListProps {
    users: User[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onDelete, onToggle }) => {
    return (
        <Box sx={{ maxWidth: 680, mx: "auto", mt: 4 }}>
            <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 1 }}>
                <Table size="small">
                    <TableHead>
                        <TableRow sx={{ "& th": { fontWeight: 600, bgcolor: "grey.100" } }}>
                            <TableCell width={240}>Tên</TableCell>
                            <TableCell width={240}>Email</TableCell>
                            <TableCell width={120} align="center">Hoạt động</TableCell>
                            <TableCell width={120} align="right">Hành động</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((u) => (
                            <TableRow key={u.id}>
                                <TableCell>{u.name}</TableCell>
                                <TableCell>{u.email}</TableCell>
                                <TableCell align="center">
                                    <Checkbox
                                        checked={u.active}
                                        onChange={() => onToggle(u.id)}
                                        inputProps={{ "aria-label": `toggle ${u.name}` }}
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        aria-label="delete"
                                        color="error"
                                        onClick={() => onDelete(u.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}

                        {users.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={4} align="center" sx={{ py: 3, color: "text.secondary" }}>
                                    Chưa có người dùng
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default UserList;
