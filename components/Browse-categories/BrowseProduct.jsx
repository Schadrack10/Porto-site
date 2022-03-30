import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



const container = {
    // border:"1px solid yellow",
    height:"230px",
    width:"220px",
}
const imageContainer = {
    background:"#f4f4f4",
    height:"70%",
    width:"100%",
    borderRadius:"240px 240px 0 0",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"

}
const textContainer = {
    // border:"1px solid orange ",
    height:"30%",
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"
}


const BrowseProduct = ({img,title,text}) => {
  return (
    <Box sx={container}>
      <Box sx={imageContainer}>
          <img src={img} alt="product-image" style={{width:"90px",height:"90px",objectFit:"cover"}} />
      </Box>
      <Box sx={textContainer}>
           <Typography variant="h6" fontSize={15} sx={{color:"#000",fontWeight:"bold",textTransform:"uppercase"}}>{title}</Typography>
           <Typography variant="p" fontSize={12} sx={{color:"#999"}}>{text}</Typography>
      </Box>
    </Box>
  )
}

export default BrowseProduct