import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const footer = {
  minHeight: "400px",
  background: "#222",
  padding: "35px 0 ",
};
const heading = {
  color: "white",
  fontSize: "16px",
  marginBottom: 3,
};
const gridContainer = {
  // border:"1px solid red",
  height: "80%",
};

const item = {
  // border:"1px solid white",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  // alignItems:"center",
  // justifyContent:""

  padding: "0 40px",
};
const footerBlock = {
  // border:"1px solid red",
  margin: "10px 0",
  display: "flex",
  flexDirection: "column",
};

const Footer = () => {
  return (
    <footer style={footer}>
      <Grid container sx={gridContainer}>
        <Grid item md={3} sm={6} xs={12} sx={item}>
          <Typography variant="h6" sx={heading}>
            CONTACT INFO
          </Typography>

          <Box sx={footerBlock}>
            <Typography variant="p" fontSize={14} sx={{ color: "#f4f4f4" }}>
              ADRESS
            </Typography>
            <Typography variant="p" fontSize={13} sx={{ color: "#666" }}>
              123 street name , city,England
            </Typography>
          </Box>
          <Box sx={footerBlock}>
            <Typography variant="p" fontSize={14} sx={{ color: "#f4f4f4" }}>
              PHONE
            </Typography>
            <Typography variant="p" fontSize={13} sx={{ color: "#666" }}>
              + 123 000 456 789
            </Typography>
          </Box>
          <Box sx={footerBlock}>
            <Typography variant="p" fontSize={14} sx={{ color: "#f4f4f4" }}>
              EMAIL
            </Typography>
            <Typography variant="p" fontSize={13} sx={{ color: "#666" }}>
              Mon@gmail.com.co.za
            </Typography>
          </Box>
          <Box sx={footerBlock}>
            <Typography variant="p" fontSize={14} sx={{ color: "#f4f4f4" }}>
              WORKING DAYS/HOURS
            </Typography>
            <Typography variant="p" fontSize={13} sx={{ color: "#666" }}>
              Mon-sun/9.00AM-8,00PM
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12} sx={item}>
          <Typography variant="h6" sx={heading}>
            CUSTOMER SERVICE
          </Typography>
          <Typography variant="p" fontSize={16} sx={{ color: "#666" }}>
            {" "}
            Help & FAQs
          </Typography>
          <Typography variant="p" fontSize={16} sx={{ color: "#666" }}>
            {" "}
            Order Tracking
          </Typography>
          <Typography variant="p" fontSize={16} sx={{ color: "#666" }}>
            {" "}
            shipping & Delivery
          </Typography>
          <Typography variant="p" fontSize={16} sx={{ color: "#666" }}>
            {" "}
            Orders history
          </Typography>
          <Typography variant="p" fontSize={16} sx={{ color: "#666" }}>
            {" "}
            Advanced Search
          </Typography>
          <Typography variant="p" fontSize={16} sx={{ color: "#666" }}>
            {" "}
            My Account
          </Typography>
          <Typography variant="p" fontSize={16} sx={{ color: "#666" }}>
            {" "}
            About Us
          </Typography>
          <Typography variant="p" fontSize={16} sx={{ color: "#666" }}>
            {" "}
            Careers
          </Typography>
          <Typography variant="p" fontSize={16} sx={{ color: "#666" }}>
            {" "}
            Corporate Sales
          </Typography>
          <Typography variant="p" fontSize={16} sx={{ color: "#666" }}>
            {" "}
            Privacy
          </Typography>
        </Grid>
        <Grid item md={3} sm={6} xs={12} sx={item}>
          <Typography variant="h6" sx={heading}>
            POPULAR TAGS
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #333",
                padding: "5px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="p" fontSize={11} sx={{ color: "#999" }}>
                Bags
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12} sx={item}>
          <Typography variant="h6" sx={heading}>
            SUBSCRIBE LETTER
          </Typography>
          <Typography variant="p" fontSize={16} sx={{ color: "#666" }}>
            {" "}
            Get all the latest informationn on events , sales and offers. sign
            up everywhere
          </Typography>
          <Box
            sx={{ margin: "10px 0", display: "flex", flexDirection: "column" }}
          >
            <input
              type="text"
              placeholder="Email address"
              style={{
                background: "#444",
                border: "none",
                borderRadius: "20px",
                margin: "6px 0",
                width: "230px",
                padding: "10px",
              }}
            />
            <button
              style={{
                background: "blue",
                color: "white",
                border: "none",
                borderRadius: "20px",
                margin: "10px 0",
                padding: "5px",
                width: "150px",
              }}
            >
              SUBSCRIBE
            </button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ padding: "0 40px", marginTop: "20px" }}>
        <hr style={{ border: "1px solid lightgrey" }} />
        <Grid container>
          <Grid item md={6} sm={6} xs={12}>
            <Typography variant="p" sx={{ color: "#777", fontSize: "13px" }}>
              Porto eCommerce 2020 All rights reserved
            </Typography>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <FacebookIcon fontSize="small" sx={{ color: "#777",margin:"0 2px" }} />
              <TwitterIcon fontSize="small" sx={{ color: "#777" ,margin:"0 2px"}} />
              <LinkedInIcon fontSize="small" sx={{ color: "#777" ,margin:"0 2px"}} />
              <InstagramIcon fontSize="small" sx={{ color: "#777",margin:"0 2px" }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
