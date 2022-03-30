import React from "react";
import { Button, Grid, Box, Typography, Stack } from "@mui/material";
import SquareButton from "../SquareButton";

const NavbarSpecial = (props) => {
  return (
    <Box
      sx={{
        height: "48px",
        background: "blue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#eee",
        fontWeight: "600",
      }}
    >
      <Typography
        align={"center"}
        sx={{
          fontSize: "16px",
        }}
      >
        {" "}
        Get Up to <strong> 40% OFF </strong>New-Season Styles
      </Typography>
      <SquareButton text={"MEN"} />
      <SquareButton text={"WOMEN"} />

      <Typography
        align={"center"}
        sx={{
          fontSize: "12px",
          margin: "0 4px",
        }}
      >
        *Limited Stock Only
      </Typography>
    </Box>
  );
};

export default NavbarSpecial;
