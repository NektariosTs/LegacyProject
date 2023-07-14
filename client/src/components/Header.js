import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooks";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
function Header() {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="about" label="About Us" />

            <Tab LinkComponent={NavLink} to="add" label="Add product" />
            <Tab LinkComponent={NavLink} to="books" label="Library" />
            <Button className="log-out" onClick={logout}>
              Logout
            </Button>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
