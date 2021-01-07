import logo from './logo.svg';
import lg from "./assets/images/lg.png"
import ContainerBg from "./assets/images/container.png"
import mouserIcon from "./assets/images/mouse.png"

// import Layer1 from "./assets/images/Layer1.png"
// import pexelsstevejohnson35 from "./assets/images/pexelsstevejohnson35.png"
// import VectorSmartObjectcop from "./assets/images/VectorSmartObjectcop.png"

import React , {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { CssBaseline, Typography, Card, CardContent } from '@material-ui/core';
import FormArtist from './components/FormArtist';
import FormCollector from './components/FormCollector';
import Results from './components/FormArtist';


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
    
    [theme.breakpoints.only('sm')]: {
      height: "520vh",
    },
    [theme.breakpoints.only('xs')]: {
      height: "620vh",
    },
  },

  Box1: {
    // backgroundColor:"#8080801f",
    textAlign: "center",
    height: "10vh",
    display: "flex",
    alignItems: "center",
    width: "80%",
    fontFamily: "MontserratBlack",
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
    fontFamily: "'MontserratBold'",
    display:"none",
    [theme.breakpoints.only('sm')]: {
      display: "block",
    },
    [theme.breakpoints.only('xs')]: {
      display: "block",
    },

  },
  contentHeading: {
    color: "#257ce1",
    fontWeight: "700",
    fontFamily: "MontserratBlack"
  },
  contentSubHeading1: {
    color: 'white',
    fontFamily: "'MontserratBold'"
  },
  contentSubHeading2: {
    color: "white",
    fontFamily: "'MontserratBold'"
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

  boxBorder: {
    padding:"0% 1% !important",
    // paddingLeft: "5% !important",
    // paddingRight: "5% !important"
    // padding:"20px",

    // position:"relative",
    // padding: "2px 0 0 50px",
    // margin: "0 20px 10px 0",
    // zIndex: "0",
    // [theme.breakpoints.only('sm')]: {
      
    // },
    // [theme.breakpoints.only('xs')]: {
      
    // },

  },
  cardBox: {
    paddingTop:"20px",
    background: "transparent",
    // backgroundColor:"black",
    color: "white",
    textAlign: "center",
    border: '0.5px solid grey',
  },
  title: {
    fontSize: 14,
    color: "white",
    fontFamily: "MontserratBlack",
    paddingBottom:"10px"

  },
  box: {
    // display:"block",
    // wdith:"50%"

  },
  poweredCreativity: {
    position: 'absolute',
    top: '60vh',
    left: "50%",
    transform: 'translate(-50%,-50%)',
    [theme.breakpoints.only('sm')]: {
      top: '70vh',
    },
    [theme.breakpoints.only('xs')]: {
      top: '90vh',
    },
  },
  patronageSection: {
    position: 'absolute',
    top: '155vh', 
    left: "50%", 
    transform: 'translate(-50%,0%)', 
    width: "90%",
    paddingLeft:"100px",

    [theme.breakpoints.only('sm')]: {
      top: '175vh',
      paddingLeft:"0px",
    },
    [theme.breakpoints.only('xs')]: {
      top: '210vh',
      paddingLeft:"0px",
    },

  },
  visualise:{
    position: 'absolute', 
    top: '198vh', 
    left: "50%", 
    transform: 'translate(-50%,0%)', 
    width: "90%",
    paddingLeft:"100px",
    [theme.breakpoints.only('sm')]: {
      top: '235vh',
      paddingLeft:"0px",
    },
    [theme.breakpoints.only('xs')]: {
      top: '280vh',
      paddingLeft:"0px",
    },
  },
  trade:{
    position: 'absolute', 
    top: '233vh', 
    left: "50%", 
    transform: 'translate(-50%,0%)', 
    width: "90%",
    paddingLeft:"100px",
    [theme.breakpoints.only('sm')]: {
      top: '267vh',
      paddingLeft:"0px",
    },
    [theme.breakpoints.only('xs')]: {
      top: '320vh',
      paddingLeft:"0px",
    },
  },
  description:{
    borderLeft:"5px solid rgb(37, 124, 225)", 
    paddingLeft:"20px",

    [theme.breakpoints.only('sm')]: {
      borderLeft:"none", 
    paddingLeft:"0px",
    },
    [theme.breakpoints.only('xs')]: {
      borderLeft:"none", 
      paddingLeft:"0px",
    },
  },

  formArea:{
    position: 'absolute', 
    top: '310vh',
    width:"100%",
    padding: "0px 10%",

    [theme.breakpoints.only('sm')]: {
      top: '340vh',
    },
    [theme.breakpoints.only('xs')]: {
      top: '430vh',
    },
  },
  descBox:{
    // textAlign: "center",
    height: "10vh",
    display: "flex",
    alignItems: "center",
    width: "80%",
    fontFamily: "MontserratBlack",
    fontWeight: 'bold',
    [theme.breakpoints.only('sm')]: {
      textAlign: "center",
    },
    [theme.breakpoints.only('xs')]: {
      textAlign: "center",
    },

    form2:{

      display:"none",
    }

  }

 


}));

const form = () => {

  alert("test")

  return(<>
  
    
  </>)

}



const App = () => {
  const classes = useStyles();

  const form = () => {

    alert("test")
  
    return(<>
    
      
    </>)
  
  }

  return (
    <>
    <div className={classes.container1}>
      <CssBaseline />
      <Header />
      <Grid container>
        <Grid item className={`${classes.Box1} + ${classes.poweredCreativity}`} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <img src={lg}></img>
            </Grid>


            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

              <h2 style={{ color: "white" }}>POWERED CREATIVITY</h2>
              <h1 style={{ color: "#257ce1" }}>PATRONAGE RECOINED</h1>

              <hr className={classes.hr}></hr>

              <Typography style={{ color: "white", fontFamily: "'MontserratBold'" }}>
                Minty is for culture shapers, connoisseurs and art owners.
                We fuel the creation and appreciation of art that will define a generation.
                    </Typography>



              <Typography style={{ color: "white", fontFamily: "'MontserratBold'" }}>
                Art is powerful.  We harness technology to empower the people that power it.  </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <img src={mouserIcon}></img>
            </Grid>

          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.descBox} container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.patronageSection}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.description}>
            <div>
              <h1 className={classes.contentHeading}>PATRONAGE AND MARKETPLACE</h1>
              <hr className={classes.hrMbl}></hr>
              <Typography className={classes.contentSubHeading1} variant="h6" > Artists find patrons to fund and bring to life new ideas, connect with passionate collectors and sell your finished works.</Typography>
              <Typography className={classes.contentSubHeading2} variant="subtitle1" > Patrons, artists you love to create something new and wonderful, access exclusive perks and follow progress of your favourite artists. </Typography>
              {/* <Typography className={classes.contentSubHeading2} variant="subtitle1" > Accree exclusive perks and follow progress of your favourite artists.  </Typography> */}
            </div>

          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.visualise}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.description} >
            <div>
              <h1 className={classes.contentHeading}>VISUALISE BEST IN CLASS ART</h1>
              <hr className={classes.hrMbl}></hr>
              <Typography style={{ color: "white", fontFamily: "'MontserratBold'" }} variant="h6" > <span style={{ fontWeight: "bold" }}> Browse and discover</span>  curated creations that move the four corners of the world</Typography>
            </div>

          </Grid>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.trade}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.description}>
            <div>
              <h1 className={classes.contentHeading}>TRADE ART DIGITALLY</h1>
              <hr className={classes.hrMbl}></hr>
              <Typography className={classes.contentSubHeading1} variant="h6" > Benefit from the rising value of the art you create by receiving royalties every time one of your artworks is sold.  </Typography>
              <Typography className={classes.contentSubHeading2} variant="subtitle1" >Access our worldwide network of patrons and collectors to grow and extend your audience.</Typography>
            </div>
            
          </Grid>
          <div id="form" >  </div>
        </Grid>
      </Grid>

   

      {/* Form area */}

      <Grid container spacing={2} className={classes.formArea}>

        <Grid item  xs={1} sm={1} md={1} lg={1} xl={1}></Grid>



            <Grid  item className={classes.boxBorder} xs={10} sm={10} md={4} lg={4} xl={4}>
              <Card className={classes.cardBox}>
                <CardContent>
                  <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>ARE YOU <br />AN ART COLLECTOR ?</Typography>
                  <hr style={{ width: "15%", background: "#ffff", border: "#ffff solid", }} />
                  <Typography variant="subtitle2" style={{ fontFamily: "MontserratBold" }} >
                    Power Art's Next Big Thing
                      </Typography>
                  <br></br>
                  <FormArtist />
                </CardContent>
              </Card>
            </Grid>





        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>



        <Grid item xs={1} sm={1} lg={1} xl={1}></Grid>


        <Grid item item className={classes.boxBorder} xs={10} sm={10} md={4} lg={4} xl={4}>
          
              <Card className={classes.cardBox}>
                <CardContent>
                  <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
                    ARE YOU <br />AN ARTIST ?</Typography>
                  <hr style={{ width: "15%", border: "#ffffff solid" }} />
                  <Typography variant="subtitle2" style={{ fontFamily: "MontserratBold" }} > Let us power your creativity</Typography>
                  <br></br>

                  <FormCollector />
                  
                </CardContent>
              </Card>
            </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

      </Grid>
     
    </div>
        <Footer></Footer>
    
    </>
  );
}

export default App;
