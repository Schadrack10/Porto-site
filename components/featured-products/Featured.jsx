import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FeaturedProd from "./FeaturedProd";

const container = {
  minHeight: "400px",
  // display: "flex",
  // flexWrap: "wrap",
};
const header = {
  width: "100%",
  padding: "10px 30px",
  // border:"1px solid red"
};
const item = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0",
};

const Featured = () => {
  return (
    <Box sx={container}>
      <Box sx={header}>
        <fieldset
          style={{
            width: "100%",
            margin: "30px 0",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "0",
            borderRight: "0",
            borderLeft: "0",
            border: "1px double lightgrey",
          }}
        >
          <legend
            style={{
              margin: "0 auto",
              position: "absolute",
              width: "250px",
              zIndex: "1",
              background: "#fff",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{ fontWeight: "bolder" }}
            >
              FEATURED PRODUCTS
            </Typography>
          </legend>
        </fieldset>
      </Box>

      <Grid container>
        <Grid item md={3} sm={6} xs={12} sx={item}>
          <FeaturedProd
            img="product.png"
            title="Porto Fashion Bag"
            category="product"
            stars={4}
            price="$ 98.99"
          />
        </Grid>
        <Grid item md={3} sm={6} xs={12} sx={item}>
          <FeaturedProd
            img="product.png"
            title="Porto Fashion Bag"
            category="product"
            stars={4}
            price="$ 98.99"
          />
        </Grid>

        <Grid item md={3} sm={6} xs={12} sx={item}>
          <FeaturedProd
            img="product.png"
            title="Porto Fashion Bag"
            category="product"
            stars={4}
            price="$ 98.99"
          />
        </Grid>
        <Grid item md={3} sm={6} xs={12} sx={item}>
          <FeaturedProd
            img="product.png"
            title="Porto Fashion Bag"
            category="product"
            stars={4}
            price="$ 98.99"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Featured;
