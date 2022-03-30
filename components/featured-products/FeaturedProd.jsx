import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const product = {
  border: "1px solid #f2f2f2",
  height: "auto",
  width: "270px",
  // flex:"1",
  margin: "0 20px",
};
const imgCover = {
  height: "250px",
  background: "#f4f4f4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const centerContainer = {
  padding: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin:"8px 0"
};
const resImg = {
  width: "120px",
  height: "120px",
  objectFit: "cover",
};
const type = {
    color:"#888"
}
const pricing = {
    fontWeight:"bolder",
    fontSize:"18px"
}
const btn={
    border:"none",
    padding:"10px 20px",
    borderRadius:"8px"
}
const FeaturedProd = ({ img, starAmount, category, title, price }) => {
  return (
    <Box sx={product}>
      <Box sx={imgCover}>
        <img src={img} alt="img" style={resImg} />
      </Box>
      <Box sx={centerContainer}>
        <Typography variant="p" fontsize="14" sx={type}>{category}</Typography>
      </Box>
      <Box sx={centerContainer}>
        <StarIcon fontSize="small" />
        <StarIcon fontSize="small" />
        <StarIcon fontSize="small" />
        <StarIcon fontSize="small" />
        <StarIcon fontSize="small" />
      </Box>
      <Box sx={centerContainer}>
        <Typography variant="p" fontsize="18" >{title}</Typography>
      </Box>
      <Box sx={centerContainer}>
        <Typography variant="p" fontsize="18" sx={pricing} >{price}</Typography>
      </Box>
      <Box sx={centerContainer}>
         <button style={btn}>Add To Cart</button>
      </Box>
    </Box>
  );
};

export default FeaturedProd;
