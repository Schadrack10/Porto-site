import React from 'react'
import Typography from "@mui/material/Typography";

function Latest() {
  return (
    <div style={{marginTop:"80px",}}>
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
          <legend style={{ margin: "0 30px auto",position:"absolute",width:"250px",zIndex:"1",background:"#fff"}}>
            <Typography variant="h6" align="center" sx={{ fontWeight: "bolder" }}>
             LATEST NEWS
            </Typography>
          </legend>
        </fieldset>

        <div 
        style={{
            display:"flex",
            marginLeft:"10px",
            marginTop:"30px",
            }}>

            
          <div style={{marginLeft:"30px",}}>
              <img src='fashionpic-one.jpg' style={{width:"280px",height:"200px",}}/>
              <p style={{fontWeight:"bold",}}>GLOW UP'S</p>
              <button 
              style={{
                  border:"none",
                  color:"white",
                  backgroundColor:"black",
                  height:"50px",
                  }}>VIEW MORE</button>
          </div>

          <div style={{marginLeft:"30px",}}>
          <img src='fashionpic-two.jpg' style={{width:"290px",height:"200px",}}/>
          <p style={{fontWeight:"bold",}}>NEW FEMALE TREND</p>
          <button
          style={{
            border:"none",
            color:"white",
            backgroundColor:"black",
            height:"50px",
            }}>VIEW MORE</button>
          </div>

          <div style={{marginLeft:"30px",}}>
          <img src='fashionpic-three.jpg' style={{width:"290px",height:"200px",}}/>
          <p style={{fontWeight:"bold",}}>FASHION HATS</p>
          <button
          style={{
            border:"none",
            color:"white",
            backgroundColor:"black",
            height:"50px",
            }}>VIEW MORE</button>
          </div>

          <div style={{marginLeft:"30px",}}>
          <img src='fashionpic-four.jpg' style={{width:"290px",height:"200px",}}/>
          <p style={{fontWeight:"bold",}}>NEW MEN TREND</p>
          <button
          style={{
            border:"none",
            color:"white",
            backgroundColor:"black",
            height:"50px",
            }}>VIEW MORE</button>
          </div>


        </div>
    </div>
  )
}

export default Latest