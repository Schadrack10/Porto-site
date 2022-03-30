import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BrowseProduct from "./BrowseProduct";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const container = {
  // border: "1px solid red",
  minHeight: "100vh",
  width: "100%",
};
const header = {
  width: "100%",
  padding: "10px 30px",
  // border:"1px solid red"
};
const productContainer = {
  width: "100%",
  height: "auto",
  // border:"1px solid blue",
  display: "flex",
  flexWrap: "wrap",
  padding: "10px 30px ",
  justifyContent: "space-around",
};
const layer = {
  background: "#f4f4f4",
  minHeight: "240px",
  width: "100%",
};
const gridContainer = {
  height: "240px",
  width: "100%",
};
const box = {
  // border:"1px solid red",
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "column",

  padding: "20px 40px ",
  // justifyContent:"space-around"
};
// export const getStaticProps = async() => {
//     const res = await  fetch('https://fakestoreapi.com/products/1') ;
//      const data = await res.json();

//      return {
//        props:{d:data}
//      }
// }

const BrowseComp = () => {
  return (
    <Box sx={container}>
      <Box sx={header}>
        <fieldset
          style={{
            borderBottom: "0",
            borderRight: "0",
            borderLeft: "0",
            borderTop: "5px double lightgrey",
          }}
        >
          <legend style={{ margin: "0 auto", padding: "10px 10px" }}>
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              Browse Categories
            </Typography>
          </legend>
        </fieldset>
      </Box>
      <Grid container sx={productContainer}>
        <BrowseProduct title="Dress" img="product.png" text="more info" />
        <BrowseProduct title="Electronics" img="product.png" text="more info" />
        <BrowseProduct title="Clothing" img="product.png" text="more info" />
        <BrowseProduct title="products" img="product.png" text="more info" />
        <BrowseProduct title="sports" img="product.png" text="more info" />
      </Grid>
      <Box sx={layer}>
        <Grid container sx={gridContainer}>
          <Grid item md={4} sm={12} xs={12} sx={box}>
            {/* icon */}
            <HeadsetMicIcon fontSize="large" olor="primary" />
            <Typography
              variant="h6"
              fontSize={16}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
           CUSTomer support
            </Typography>
            <Typography
              variant="p"
              fontSize={14}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "capitalize",
                color: "#888",
              }}
            >
              you wont be alone
            </Typography>
            <Typography
              variant="p"
              fontSize={12}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "capitalize",
                color: "#999",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              reiciendis modi quasi laborum maiores, perspiciatis itaque in
              dolor sunt reprehenderit ipsam velit neque dolorem accusantium
              praesentium doloremque magni, asperiores hic.
            </Typography>
          </Grid>
          <Grid item md={4} sm={12} xs={12} sx={box}>
            {/* icon */}
            <HeadsetMicIcon fontSize="large" />
            <Typography
              variant="h6"
              fontSize={16}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
           fully customizable
            </Typography>
            <Typography
              variant="p"
              fontSize={14}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "capitalize",
                color: "#888",
              }}
            >
         tons of option
            </Typography>
            <Typography
              variant="p"
              fontSize={12}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "capitalize",
                color: "#999",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              reiciendis modi quasi laborum maiores, perspiciatis itaque in
              dolor sunt reprehenderit ipsam velit neque dolorem accusantium
              praesentium doloremque magni, asperiores hic.
            </Typography>
          </Grid>
          <Grid item md={4} sm={12} xs={12} sx={box}>
            {/* icon */}
            <HeadsetMicIcon fontSize="large" />
            <Typography
              variant="h6"
              fontSize={16}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
            powerful admin
            </Typography>
            <Typography
            align="center"
              variant="h6"
              fontSize={14}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "capitalize",
                color: "#888",
              }}
            >
              made to help you
            </Typography>
            <Typography
              variant="p"
              fontSize={12}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "capitalize",
                color: "#999",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              reiciendis modi quasi laborum maiores, perspiciatis itaque in
              dolor sunt reprehenderit ipsam velit neque dolorem accusantium
              praesentium doloremque magni, asperiores hic.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BrowseComp;
