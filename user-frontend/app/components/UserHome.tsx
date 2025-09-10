'use client';

import * as React from "react";
import UserForm from "@/components/UserForm";
import UserList, { User } from "@/components/UserList";
import { userApi } from "@/components/api/UserApi";
import { Box, Pagination, Stack } from "@mui/material";

export default function UserHome() {
    const [users, setUsers] = React.useState<User[]>([]);
    const [page, setPage] = React.useState(1);
    const size = 5;
    const [totalPages, setTotalPages] = React.useState(1);
    const [loading, setLoading] = React.useState(false);

    const fetchPage = React.useCallback(async (p: number) => {
        setLoading(true);
        try {
            const res = await userApi.getPage(p, size);
            setUsers(res.items as User[]);
            setTotalPages(res.totalPages || 1);
        } finally {
            setLoading(false);
        }
    }, []);

    React.useEffect(() => { fetchPage(page); }, [fetchPage, page]);

    const addUser = React.useCallback(async (name: string, email: string) => {
        await userApi.create({ name, email, active: true });
        setPage(1);
    }, []);

    const toggleUser = React.useCallback(async (id: number) => {
        const u = users.find(x => x.id === id);
        if (!u) return;
        await userApi.update({ ...u, active: !u.active });
        await fetchPage(page);
    }, [users, page, fetchPage]);

    const deleteUser = React.useCallback(async (id: number) => {
        await userApi.delete(id);

        if (users.length === 1 && page > 1) setPage(page - 1);
        else await fetchPage(page);
    }, [users, page, fetchPage]);

    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Quản lý người dùng</h1>

            <UserForm onAdd={addUser} />

            {loading
                ? <div style={{ textAlign: "center", marginTop: 16 }}>Đang tải…</div>
                : <UserList users={users} onDelete={deleteUser} onToggle={toggleUser} />
            }

            <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 4 }}>
                <Stack spacing={2}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={(_, p) => setPage(p)}
                        color="primary"
                        size="small"
                        showFirstButton
                        showLastButton
                    />
                </Stack>
            </Box>
        </>
    );
}
