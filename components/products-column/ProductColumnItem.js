import { Button, Grid, Box, Typography, Stack, Divider } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const ProductColumnItem = ({ img, title , price}) => {
  return (
    <Box
      sx={{
        height: "100px",
        // background: "green",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={5}
          sx={{
            // backgroundImage: {img},
            background: "#fff",
            backgroundSize: "contain",
            height: "100px",
            width: "100%",
          }}
        >
          <img
            src={img}
            alt=""
            width="100%"
            height="100px"
            style={{ objectFit: "contain" }}
          />
        </Grid>
        <Grid item xs={7}>
          <Stack sx={{
                p:'8px'
          }} >
            <Typography noWrap={true} sx={{
              margin:"4px 0px"
            }}>{title}</Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
            </Box>
            <Typography noWrap={true} sx={{
              margin:"8px 0px"
            }}>{"$"}{price}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductColumnItem;
