import logo from './logo.svg';
import BackImg from './assets/images/background.png';
import lg from "./assets/images/lg.png"
import Bg1 from "./assets/images/1.png"

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import './App.css';
import Header from './components/header/Header';


  const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
    },

    container1: {

      // backgroundImage:  "linear-gradient(360deg, #013f75b8, #000000f2),"+ `url(${Bg1})`+ "", 
      backgroundImage:   `url(${Bg1})`, 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      justifyContent:"center",
      alignItems:"center",
      height: "100vh",
      flexDirection:"row"
    },
    Box1:{
      // border: "5px solid red",
      // backgroundColor:"#8080801f",
      textAlign:"center",
      height:"50%",
      display:"infline-flex",
      justifyContent:"flex-start",
      alignItems:"center"
    },
    hr: {
      width:"3%"
    }
  }));

const App = () => {
          const classes = useStyles();

          return (
            <div className="root">
              <Grid className={classes.container1} container >
                  <Grid className={classes.Box1}  xs={4}  sm={5} md={6} lg={6} xl={6} item >
                    <Grid container spacing={10}>
                        <Grid item xs={12}  sm={12} md={12} lg={12} xl={12}>
                             <img src={lg}></img>
                          </Grid>
                        <Grid container  spacing={8}>
                                <Grid item xs={12}  sm={12} md={12} lg={12} xl={12}>
                                  <h2 style={{color:"white"}}>POWERED CREATIVITY</h2>
                                  <h1 style={{color:"#257ce1"}}>PATRONAGE RECOINED</h1>
                                  
                                  <hr className={classes.hr}></hr>

                                  <p style={{color:"white"}}> Minty is for culture shapers, connoisseurs and art owners.
                                    We fuel the creation and appreciation of art that will define a generation.
                                    Art is powerful.  We harness technology to empower the people that power it.  </p>
                                </Grid>
                        </Grid>
                      </Grid>
                </Grid>
              </Grid>
              {/* <Header/> */}
            </div>
          );
}

export default App;
