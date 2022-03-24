import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo from "../../images/logo.svg";
import "./Header.css";

// navbar
function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ mt: 3, px: 2 }}>
      {/* mobile menu  */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <NavHashLink smooth="true" className="nav-link" to="/home#home">
          Home
        </NavHashLink>

        <Divider />

        <NavHashLink smooth="true" className="nav-link" to="/home#services">
          Services
        </NavHashLink>
        <Divider />

        <NavHashLink smooth="true" className="nav-link" to="/home#portfolio">
          Portfolio
        </NavHashLink>
        <Divider />

        <NavHashLink smooth="true" className="nav-link" to="/home#skills">
          Languages & Tools
        </NavHashLink>

        <Divider />
        <NavHashLink smooth="true" className="nav-link" to="/home#blog">
          Blog
        </NavHashLink>

        <Divider />

        <NavHashLink smooth="true" className="nav-link" to="/home#about">
          About Me
        </NavHashLink>

        <Divider />

        <NavHashLink smooth="true" className="nav-link" to="/home#contact">
          Contact Me
        </NavHashLink>

        <Divider />
      </nav>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="inherit"
        sx={{ bgcolor: "#1c272c", boxShadow: 2, py: 1 }}
      >
        <Toolbar>
          {/* desktop menu  */}
          <Container>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link to="/">
                <img className="logo" src={logo} alt="" />
              </Link>

              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <nav
                  className="navbar"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#home"
                  >
                    Home
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#services"
                  >
                    Services
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#portfolio"
                  >
                    Portfolio
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#skills"
                  >
                    Languages & Tools
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#blog"
                  >
                    Blog
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#about"
                  >
                    About Me
                  </NavHashLink>
                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#contact"
                  >
                    Contact Me
                  </NavHashLink>
                </nav>
              </Box>
            </Box>
          </Container>
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            color="info"
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "70%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navigation.propTypes = {
  window: PropTypes.func,
};

export default Navigation;
