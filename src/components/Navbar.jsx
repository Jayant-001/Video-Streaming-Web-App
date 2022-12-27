import { Avatar, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { logo } from "../utils/Constants";
import { SearchBar } from "./index";

const Navbar = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{
                position: "sticky",
                background: "#000",
                top: 0,
                justifyContent: "space-between",
            }}
        >
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt="Logo" height={45} />
            </Link>
            <SearchBar />
            <Avatar
                sx={{ display: { xs: "none", sm: "inline" } }}
                alt="Avatar"
                src="https://i.pravatar.cc/50"
            />
        </Stack>
    );
};

export default Navbar;
