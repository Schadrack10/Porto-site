import React from 'react'
import Typography from "@mui/material/Typography";




const img = {
  width:"100px",
  height:"100px"
}


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
            flexWrap:"wrap",
            // justifyContent:"space-around"
            }}>

            
    

          <div style={{ width:"250px",flex:"1",margin:"0 10px"}}>
          <img src='fashionpic-one.jpg' style={{width:"100%",height:"200px",}}/>
          <p style={{fontWeight:"bold",textAlign:"center"}}>NEW FEMALE TREND</p>
          <button
          style={{
            border:"none",
            color:"white",
            backgroundColor:"black",
            padding:"20px",
            width:"100%"
            }}>VIEW MORE</button>
          </div>
          <div style={{ width:"250px",flex:"1",margin:"0 10px"}}>
          <img src='fashionpic-four.jpg' style={{width:"100%",height:"200px",}}/>
          <p style={{fontWeight:"bold",textAlign:"center"}}>NEW FEMALE TREND</p>
          <button
          style={{
            border:"none",
            color:"white",
            backgroundColor:"black",
            padding:"20px",
            width:"100%"
            }}>VIEW MORE</button>
          </div>
          <div style={{ width:"250px",flex:"1",margin:"0 10px"}}>
          <img src='fashionpic-two.jpg' style={{width:"100%",height:"200px",}}/>
          <p style={{fontWeight:"bold",textAlign:"center"}}>NEW FEMALE TREND</p>
          <button
          style={{
            border:"none",
            color:"white",
            backgroundColor:"black",
            padding:"20px",
            width:"100%"
            }}>VIEW MORE</button>
          </div>
          <div style={{width:"250px",flex:"1",margin:"0 10px"}}>
          <img src='fashionpic-three.jpg' style={{width:"100%",height:"200px",}}/>
          <p style={{fontWeight:"bold",textAlign:"center"}}>NEW FEMALE TREND</p>
          <button
          style={{
            border:"none",
            color:"white",
            backgroundColor:"black",
            padding:"20px",
            width:"100%"
            }}>VIEW MORE</button>
          </div>
             
       
      
     


        </div>
    </div>
  )
}

export default Latest