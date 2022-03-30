import {
  Button,
  Grid,
  Box,
  Typography,
  Stack,
  Divider,
  Badge,
} from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Dropdown, DropdownButtonProps } from "react-bootstrap";
import { Countries } from "./Countries";
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function NavInput() {
  const [currency, setCurrency] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        // p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderRadius: "16px",
        background: "rgba(0,0,0,0.1)",
        // background: "transparent",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <Dropdown>
          <Dropdown.Toggle
            variant="outlined"
            id="dropdown-basic"
            value={country}
            onChange={handleCountry}
          >
            All Categories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">{""}</Dropdown.Item>
            {Countries.map((country, index) => {
              return (
                <Dropdown.Item key={index} href="#/action-1">
                  {country.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </IconButton>
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}

const NavSearchRow = (props) => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          sm={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/logo.jpg"
            alt=""
            height="auto"
            style={{
              objectFit: "contain",
              objectPosition: "center",
              width: "65%",
            }}
          />
        </Grid>
        <Grid
          item
          sm={10}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container>
            <Grid item sm={6}>
              <NavInput />
            </Grid>
            <Grid
              item
              sm={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  color: "#aaa",
                }}
              >
                <LocalPhoneOutlinedIcon
                  sx={{
                    marginRight: "8px",
                    height: "50px",
                    fontSize: "50px",
                    color: "#111",
                  }}
                />
                <Stack>
                  <Typography
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    CALL US NOW
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "21px",
                      fontWeight: "900",
                      color: "#111",
                    }}
                  >
                    (123) 456-7890
                  </Typography>
                </Stack>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "50%",
                }}
              >
                {/* <FavoriteBorderIcon sx={{ marginRight: "8px" }} /> */}
                <IconButton>
                  <FavoriteBorderIcon
                    sx={{
                      fontSize: "28px",
                    }}
                  />
                </IconButton>
                <IconButton>
                  <Badge badgeContent={4} color="error">
                    <ShoppingBagOutlinedIcon
                      sx={{
                        fontSize: "28px",
                      }}
                    />
                  </Badge>
                </IconButton>
                <IconButton>
                  <PersonOutlineIcon
                    sx={{
                      fontSize: "28px",
                    }}
                  />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavSearchRow;
