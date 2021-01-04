import logo from './logo.svg';
import lg from "./assets/images/lg.png"
import ContainerBg from "./assets/images/container.png"
import mouserIcon from "./assets/images/mouse.png"

// import Layer1 from "./assets/images/Layer1.png"
// import pexelsstevejohnson35 from "./assets/images/pexelsstevejohnson35.png"
// import VectorSmartObjectcop from "./assets/images/VectorSmartObjectcop.png"

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { CssBaseline, Typography,Card, CardContent } from '@material-ui/core';
import Form from './components/Form';



const useStyles = makeStyles((theme) => ({

  root: {
    // flexGrow: 1,

    left: "0px",
    top: "0px",
    // position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    // height: "4000px",
    // zIndex: 0,
    // backgroundImage: `url(${ContainerBg})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // minHeight:"455vh",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // width:"100%",


  },

  container1: {
    // backgroundImage:  "linear-gradient(360deg, #013f75b8, #000000f2),"+ `url(${Bg1})`+ "", 
    backgroundImage: `url(${ContainerBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "455vh",
    width: "100%",
    // minWidth:"1300px",
    backgroundSize: "cover",
    left: "0px",
    top: "0px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  Box1: {
    // backgroundColor:"#8080801f",
    textAlign: "center",
    height: "10vh",
    display: "flex",
    alignItems: "center",
    width: "70%",
    fontFamily:"MontserratBlack",
    fontWeight: 'bold',
  },
  hr: {
    width: "4%",
    background: "#FFFFFF",
    border: "#FFFFFF solid"
  },
  hrMbl: {
    width: "6%",
    background: "#257ce1",
    border: "#257ce1 solid",
    fontFamily:"'MontserratBold'"

  },
  contentHeading: {
    color: "#257ce1",
    fontWeight: "700",
    fontFamily:"MontserratBlack"
  },
  contentSubHeading1: {
    color: 'white',
    fontFamily:"'MontserratBold'"
  },
  contentSubHeading2: {
    color: "white",
    fontFamily:"'MontserratBold'"
  },



  Layer1: {
    width: "100%",
    left: "0px",
    top: "0px",
    position: "absolute",
    height: "auto",
    zIndex: 1,
  },
  pexelsstevejohnson35: {
    left: "0px",
    top: "0px",
    position: "absolute",
    width: "100%",
    height: "1194px",
    zIndex: "2"
  },
  VectorSmartObjectcop: {
    display: "flex",
    left: "590px",
    top: "784px",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    zIndex: "3",
  },
  
  boxBorder:{
    // padding:"20px",
    
    // position:"relative",
    // padding: "2px 0 0 50px",
    // margin: "0 20px 10px 0",
    // zIndex: "0",
  },
  cardBox:{
    background:"transparent",
    // backgroundColor:"black",
    color:"white",
    textAlign:"center",
    border:'0.5px solid grey',
  },
  title: {
    fontSize: 14,
    color:"white",
    fontFamily:"MontserratBlack",
    
  },

}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container1}>
      <CssBaseline />
      <Header />
      <Grid container>
        <Grid item className={classes.Box1} xs={12} sm={12} md={12} lg={12} xl={12} style={{ position: 'absolute', top: '60%', left: "50%", transform: 'translate(-50%,-50%)' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <img src={lg}></img>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <h2 style={{ color: "white" }}>POWERED CREATIVITY</h2>
              <h1 style={{ color: "#257ce1" }}>PATRONAGE RECOINED</h1>

              <hr className={classes.hr}></hr>

              <Typography style={{ color: "white" , fontFamily:"'MontserratBold'"}}> Minty is for culture shapers, connoisseurs and art owners.
              We fuel the creation and appreciation of art that will define a generation.
              </Typography>
              <Typography style={{ color: "white"  , fontFamily:"'MontserratBold'"}}>
                  Art is powerful.  We harness technology to empower the people that power it.  </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <img src={mouserIcon}></img>
            </Grid>

          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.Box1} container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ position: 'absolute', top: '153vh', left: "50%", transform: 'translate(-50%,0%)', width: "100%" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1 className={classes.contentHeading}>PATRONAGE</h1>
            <hr className={classes.hrMbl}></hr>
            <Typography className={classes.contentSubHeading1} variant="h6" > Get you creation sponsored by cnnoisseurs and fine collectors</Typography>
            <Typography className={classes.contentSubHeading2} variant="subtitle1" > Become a patron of the next art moments.  </Typography>
            <Typography className={classes.contentSubHeading2} variant="subtitle1" > Accree exclusive perks and follow progress of your favotire artists.  </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ position: 'absolute', top: '193vh', left: "50%", transform: 'translate(-50%,0%)', width: "100%" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1 className={classes.contentHeading}>VISUALISE BEST IN CLASS ART</h1>
            <hr className={classes.hrMbl}></hr>
            <Typography style={{ color: "white" }} variant="h6" > <span style={{ fontWeight: "bold" }}> Browse and discover</span>  curated creations that moves the four corners of the world</Typography>


          </Grid>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ position: 'absolute', top: '233vh', left: "50%", transform: 'translate(-50%,0%)', width: "100%" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1 className={classes.contentHeading}>TRADE ART DIGITALLY</h1>
            <hr className={classes.hrMbl}></hr>
            <Typography className={classes.contentSubHeading1} variant="h6" > Unlock new streams for creators, and offers exclusive reward incentives to colectors.</Typography>
            <Typography className={classes.contentSubHeading2} variant="subtitle1" > Buy, trade and exchange collectibles on the second market. </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Form area */}
      <Grid container spacing={2} style={{ position: 'absolute', top: '305vh' }} >

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

          <Grid item className={classes.boxBorder}  xs={10} sm={10} md={4} lg={4} xl={4}>
            <Card className={classes.cardBox}>
              <CardContent>
                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>ARE YOU <br />AN ART COLLECTOR ?</Typography>
                <hr style={{ width: "10%",  background: "#ffff",border: "#ffff solid", }} />
                <Typography style={{fontFamily:"MontserratBold"}}>
                  
                   Power Art's Next Big hing
                   </Typography>
                <br></br>
                <Form />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>


          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item item className={classes.boxBorder}  xs={10} sm={10} md={4} lg={4} xl={4}>
          <Card className={classes.cardBox}>
            <Grid item>
              <Card className={classes.cardBox}>
                <CardContent>
                  <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
                    ARE YOU <br />AN ARTIST ?</Typography>
                  <hr style={{ width: "10%",  background: "#ffff",border: "#ffff solid",  fontFamily:"Walkway !important",fontWeight: 'bold', }} />
                  <Typography variant="subtitle2" style={{fontFamily:"MontserratBold"}} > Let us power your creativity</Typography>
                  <br></br>
                  <Form />
                </CardContent>
              </Card>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

      </Grid>
    </div>
  );
}

export default App;
