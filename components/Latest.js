import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";




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

function Latest() {
  return (
    <div style={{ marginTop: 30 , width:'100%' }}>
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
          <legend style={{ margin: "0 auto", position: "absolute", width: "250px", zIndex: "1", background: "#fff" }}>
            <Typography variant="h6" align="center" sx={{ fontWeight: "bolder" }}>
              LATEST NEWS
            </Typography>
          </legend>
        </fieldset>
      </Box>


      <Grid container>
        <Grid item md={3} sm={6} xs={12} sx={item}>
          <div style={{ width: "250px", flex: "1", margin: "0 10px" }}>
            <img src='fashionpic-one.jpg' style={{ width: "100%", height: "200px",objectFit:"cover" }} />
            <p style={{ fontWeight: "bold", textAlign: "center" }}>NEW FEMALE TREND</p>
            <button
              style={{
                border: "none",
                color: "white",
                backgroundColor: "black",
                padding: "20px",
                width: "100%"
              }}>VIEW MORE</button>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12} sx={item}>
          <div style={{ width: "250px", flex: "1", margin: "0 10px" }}>
            <img src='fashionpic-four.jpg' style={{ width: "100%", height: "200px",objectFit:"cover" }} />
            <p style={{ fontWeight: "bold", textAlign: "center" }}>NEW FEMALE TREND</p>
            <button
              style={{
                border: "none",
                color: "white",
                backgroundColor: "black",
                padding: "20px",
                width: "100%"
              }}>VIEW MORE</button>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12} sx={item}>

          <div style={{ width: "250px", flex: "1", margin: "0 10px" }}>
            <img src='fashionpic-two.jpg' style={{ width: "100%", height: "200px",objectFit:"cover" }} />
            <p style={{ fontWeight: "bold", textAlign: "center" }}>NEW FEMALE TREND</p>
            <button
              style={{
                border: "none",
                color: "white",
                backgroundColor: "black",
                padding: "20px",
                width: "100%"
              }}>VIEW MORE</button>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12} sx={item}>
          <div style={{ width: "250px", flex: "1", margin: "0 10px" }}>
            <img src='fashionpic-three.jpg' style={{ width: "100%", height: "200px",objectFit:"cover" }} />
            <p style={{ fontWeight: "bold", textAlign: "center" }}>NEW FEMALE TREND</p>
            <button
              style={{
                border: "none",
                color: "white",
                backgroundColor: "black",
                padding: "20px",
                width: "100%"
              }}>VIEW MORE</button>
          </div>
        </Grid>
      </Grid>



      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          // justifyContent:"space-around"
        }}>







      </div>
    </div>
  )
}

export default Latest