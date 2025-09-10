"use client";

import * as React from "react";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import UserHome from "./components/UserHome";

const theme = createTheme({
  palette: { mode: "light" }, 
});

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <UserHome />
      </Container>
    </ThemeProvider>
  );
}
