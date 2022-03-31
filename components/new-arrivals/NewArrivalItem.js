import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const product = {
  border: "1px solid #f2f2f2",
  height: "auto",
  width: "270px",
  maxHeight: "450px",
  // flex:"1",
  margin: "0 20px",
};
const imgCover = {
  height: "250px",
  background: "#f4f4f4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position:'relative',
  padding:'8px',
};
const centerContainer = {
  padding: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "8px 0",
};
const resImg = {
  width: "120px",
  height: "120px",
  objectFit: "cover",
};
const type = {
  color: "#888",
};
const pricing = {
  fontWeight: "bolder",
  fontSize: "18px",
};
const btn = {
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
};
const NewArrivalItem = ({ img, starAmount, category, title, price }) => {
  return (
    <Box sx={product}>
      <Box sx={imgCover}>
        <Button
          sx={{
            position: "absolute",
            background: "red",
            top:"8px",
            left:"8px",
            color:'#eee',
            fontWeight:900
          }}
        >
          HOT
        </Button>
        <img src={img} alt="img" style={resImg} />
      </Box>
      <Box sx={centerContainer}>
        <Typography variant="p" fontSize="14" sx={type}>
          {category}
        </Typography>
      </Box>
      <Box sx={centerContainer}>
        <StarIcon fontSize="small" />
        <StarIcon fontSize="small" />
        <StarIcon fontSize="small" />
        <StarIcon fontSize="small" />
        <StarIcon fontSize="small" />
      </Box>
      <Box sx={centerContainer}>
        <Typography variant="p" fontSize="18">
          {title}
        </Typography>
      </Box>
      <Box sx={centerContainer}>
        <Typography variant="p" fontSize="18" sx={pricing}>
          {price}
        </Typography>
      </Box>
      <Box sx={centerContainer}>
        <button style={btn}>Add To Cart</button>
      </Box>
    </Box>
  );
};

export default NewArrivalItem;
