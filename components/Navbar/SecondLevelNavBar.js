import React from "react";
import { Button, Grid, Box, Typography, Stack, IconButton ,Tooltip } from "@mui/material";
import { Dropdown, DropdownButtonProps } from "react-bootstrap";

const navLinks = [
  "Track Order",
  "About",
  "Our Stores",
  "Blog",
  "Contact",
  "Help & FAQs",
  "Help & FAQs",
];

const SecondLevelNavBar = (props) => {
  const [country, setCountry] = React.useState("");

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "65%",
          padding: "8px 32px",
        }}
      >
        <Grid container>
          <Grid item sm={1.6}>
            <Typography
              align={"center"}
              sx={{
                fontSize: "14px",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="outlined"
                  id="dropdown-basic"
                  value={country}
                  onChange={handleCountry}
                >
                  Home
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {navLinks.map((country, index) => {
                    return (
                      <Dropdown.Item key={index} href="#/action-1">
                        {country}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Typography>
          </Grid>
          <Grid item sm={1.6}>
            <Typography
              align={"center"}
              sx={{
                fontSize: "14px",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="outlined"
                  id="dropdown-basic"
                  value={country}
                  onChange={handleCountry}
                >
                  Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {navLinks.map((country, index) => {
                    return (
                      <Dropdown.Item key={index} href="#/action-1">
                        {country}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Typography>
          </Grid>
          <Grid item sm={1.6}>
            <Typography
              align={"center"}
              sx={{
                fontSize: "14px",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="outlined"
                  id="dropdown-basic"
                  value={country}
                  onChange={handleCountry}
                >
                  Products
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {navLinks.map((country, index) => {
                    return (
                      <Dropdown.Item key={index} href="#/action-1">
                        {country}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Typography>
          </Grid>
          <Grid item sm={1.6}>
            <Typography
              align={"center"}
              sx={{
                fontSize: "14px",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="outlined"
                  id="dropdown-basic"
                  value={country}
                  onChange={handleCountry}
                >
                  Pages
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {navLinks.map((country, index) => {
                    return (
                      <Dropdown.Item key={index} href="#/action-1">
                        {country}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Typography>
          </Grid>

          <Grid item sm={1.6}>
            <Typography
              align={"center"}
              sx={{
                fontSize: "14px",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="outlined"
                  id="dropdown-basic"
                  value={country}
                  onChange={handleCountry}
                >
                  Blog
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {navLinks.map((country, index) => {
                    return (
                      <Dropdown.Item key={index} href="#/action-1">
                        {country}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Typography>
          </Grid>
          <Grid item sm={1.6}>
            <Typography
              align={"center"}
              sx={{
                fontSize: "14px",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="outlined"
                  id="dropdown-basic"
                  value={country}
                  onChange={handleCountry}
                >
                  About Us
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {navLinks.map((country, index) => {
                    return (
                      <Dropdown.Item key={index} href="#/action-1">
                        {country}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Button sx={{
            color:'#111'
        }}>Fresh Orders</Button>
        <Tooltip title="Delete">
          <IconButton>
        <Button sx={{
            color:'#111'
        }}>New Stuff</Button>
          </IconButton>
        </Tooltip>
      </Box>
    </div>
  );
};

export default SecondLevelNavBar;
