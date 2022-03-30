import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BrowseProduct from "./BrowseProduct";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

const container = {
  // background:"red",
  minHeight: "100vh",
  width: "100%",
  marginTop:20
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
  minHeight: "240px",
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


const BrowseComp = () => {
  return (
    <Box sx={container}>
      <Box sx={header}>
        <fieldset
          style={{
            width:"100%",
            margin:"30px 0",
             
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            borderBottom: "0",
            borderRight: "0",
            borderLeft: "0",
            border: "1px double lightgrey",
          }}
        >
          <legend style={{ margin: "0 auto",position:"absolute",width:"250px",zIndex:"1",background:"#fff"}}>
            <Typography variant="h6" align="center" sx={{ fontWeight: "bolder" }}>
              BROWSE CATEGORIES
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
            <HeadsetMicIcon fontSize="large" color="primary" />
            <Typography
              variant="h6"
              fontSize={16}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "uppercase",
                margin:"15px 0"
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
                margin:"15px 0"
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
                textAlign:"justify"
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              reiciendis modi quasi laborum maiores, perspiciatis itaque in
              dolor sunt reprehenderit ipsam velit neque dolorem accusantium
              spiciatis itaque in
              dolor sunt reprehenderit ipsam velit neque dolorem 
            </Typography>
          </Grid>
          <Grid item md={4} sm={12} xs={12} sx={box}>
            {/* icon */}
            <LibraryBooksIcon fontSize="large" color="primary" />
            <Typography
              variant="h6"
              fontSize={16}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "uppercase",
                margin:"15px 0"
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
                margin:"15px 0"
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
                textAlign:"justify"
              }}
            >
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              reiciendis modi quasi laborum maiores, perspiciatis itaque in
              dolor sunt reprehenderit ipsam velit neque dolorem accusantium
              spiciatis itaque in
              dolor sunt reprehenderit ipsam velit neque dolorem 
             
            </Typography>
          </Grid>
          <Grid item md={4} sm={12} xs={12} sx={box}>
            {/* icon */}
            <SupervisorAccountIcon fontSize="large" color="primary" sx={{}}/>
            <Typography
              variant="h6"
              fontSize={16}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "uppercase",
                margin:"15px 0"
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
                margin:"15px 0"
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
                textAlign:"justify"
              }}
            >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              reiciendis modi quasi laborum maiores, perspiciatis itaque in
              dolor sunt reprehenderit ipsam velit neque dolorem accusantium
              spiciatis itaque in
              dolor sunt reprehenderit ipsam velit neque dolorem 
          
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BrowseComp;
