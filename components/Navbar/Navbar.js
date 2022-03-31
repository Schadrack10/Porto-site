import { Button, Grid, Box, Typography, Stack, Divider } from "@mui/material";
import NavbarSpecial from "./NavbarSpecial";
import { Countries } from "./Countries";
import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/YouTube";
import { Dropdown, DropdownButtonProps } from "react-bootstrap";
import NavSearchRow from "./NavSearchRow";
import SecondLevelNavBar from "./SecondLevelNavBar";

const navLinks = [
  "Track Order",
  "About",
  "Our Stores",
  "Blog",
  "Contact",
  "Help & FAQs",
  "Help & FAQs",
];

const currency_code = [
  "AFA",
  "ALL",
  "BGN",
  "BIF",
  "FJD",
  "GMD",
  "GEL",
  "GTQ",
  "GNF",
  "GYD",
  "HTG",
  "HNL",
  "HKD",
  "HUF",
  "ISK",
  "INR",
];

export const Navbar = () => {
  const [currency, setCurrency] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box>
      <Stack
        sx={{
          height: "200px",
        }}
      >
        <NavbarSpecial />
        <Box
          sx={{
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container>
            <Grid
              item
              sm={3.5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                align={"center"}
                sx={{
                  fontSize: "12px",
                }}
              >
                FREE RETURNS. STANDARD SHIPPING ORDERS $99+{" "}
              </Typography>
            </Grid>
            <Grid
              item
              sm={8.5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // background: "yellow",
              }}
            >
              <Grid container>
                {navLinks.map((link, index) => {
                  return (
                    <Grid key={index} item sm={1.6}>
                      <Typography
                        align={"center"}
                        sx={{
                          fontSize: "14px",
                        }}
                      >
                        {link}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>

              <Dropdown>
                <Dropdown.Toggle
                  variant="outlined"
                  id="dropdown-basic"
                  value={country}
                  onChange={handleCountry}
                >
                  USD
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {currency_code.map((currency, index) => {
                    return (
                      <Dropdown.Item key={index} href="#/action-1">
                        {currency}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle
                  variant="outlined"
                  id="dropdown-basic"
                  value={country}
                  onChange={handleCountry}
                >
                  Country
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {Countries.map((country, index) => {
                    return (
                      <Dropdown.Item key={index} href="#/action-1">
                        {country.name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
              <InstagramIcon sx={{ marginRight: "8px" }} />
              <FacebookIcon sx={{ marginRight: "8px" }} />
              <YoutubeIcon sx={{ marginRight: "8px" }} />
            </Grid>
          </Grid>
        </Box>

        <Divider />
        <NavSearchRow />
        <SecondLevelNavBar />
      </Stack>
    </Box>
  );
};
