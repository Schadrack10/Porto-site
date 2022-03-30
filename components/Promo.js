import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Grid from "@mui/material/Grid";

const Promo = () => {
  return (
    <div>

      <Grid container sx={{padding:"20px 0"}}>
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
          }}
          sm={12}
          xs={12}
        >
          <div style={{width:"50px",padding:"0 10px"}}>
          <LocalShippingIcon />
          </div>
          <div>
            <h5
              style={{
                margin: "0",
              }}
            >
              FREE SHIPPING & RETURN
            </h5>
            <p
              style={{
                margin: "0",
              }}
            >
              Free shiiping on all orders over $99
            </p>
          </div>
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
            borderRight:"1px solid lightgrey",
            borderLeft:"1px solid lightgrey",
          }}
          sm={12}
          xs={12}
        >
                 <div style={{width:"50px",padding:"0 10px"}}>
                 <MonetizationOnOutlinedIcon />
          </div>
          <div>
            <h5
              style={{
                margin: "0",
              }}
            >
             MONEY BACK GURANTEE
            </h5>
            <p
              style={{
                margin: "0",
              }}
            >
              100% money back gurantee
            </p>
          </div>
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
          }}
          sm={12}
          xs={12}
        >
                    <div style={{width:"50px",padding:"0 10px"}}>
                    <AccessTimeIcon />
          </div>
          <div>
            <h5
              style={{
                margin: "0",
              }}
            >
              ONLINE SUPPORT 24/7
            </h5>
            <p
              style={{
                margin: "0",
              }}
            >
             Lorem ipsum dolor sit amet
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
          }}
          sm={12}
          xs={12}
        >
         <img src="download.jpg"/>
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "180px",
          }}
          sm={12}
          xs={12}
        >
           <img src="download (1).jpg" />
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "180px",
          }}
          sm={12}
          xs={12}
        >
          <img src="picone.jpg" 
          style={{
            width:"370px",
             height:"150px",
        
             }} />
        </Grid>
      </Grid>

    </div>

  );
};

export default Promo;
