import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { AppBar, Toolbar } from "@mui/material";
import { Box, Button, Container, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Header(props: any) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5" noWrap component="div">
            <Link to="/">ReactApp </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              <Link to="/">Tasks App </Link>
            </Typography>
            <Typography variant="h6" noWrap component="div">
              <Link to="/blogapp">Blog App </Link>
            </Typography>
          </Box>

          <Button>
            <AccountCircleOutlinedIcon />
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
