import React from 'react';

import Imgftr from '../../assets/images/footer.png'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({

root:{
    flexGrow:1,
},
container:{
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"#257ce1",
    padding:"0% 1% !important",
    textAlign:"center",
    color:"white"
   
},
box:{
    //  border: "5px solid red",
   
},
containerIcon:{
    display:"flex",
    justifyContent:"center",
},
BoxIcon:{
    color:"black",
}


}));

const Footer = () => {

    const classes = useStyles();

    return(
        <>
        <footer>
            <div className={classes.root}>

                <Grid container className={classes.container} >
                <Grid container style={{padding:"1%", margin:"0%"}} spacing={4}>
                    <Grid className={classes.box} item style={{display: "flex",justifyContent: "center",alignItems: "center"}}  xs={12} sm={12} md={4} lg={4} xl={4} >
                            <Typography onClick={event =>  window.open('hello@minty.art','_blank')} style={{fontFamily: "'MontserratBold'", fontSize: "90%"}} variant="h6" component="h2">
                               CONTACT US<br/> hello@minty.art
                               
                               {/* <a href="mailto:hello@minty.art"></a> */}
                               
                            </Typography>  
                    </Grid>
                    <Grid className={classes.box} item xs={12} sm={12} md={4} lg={4} xl={4} >
                            <img src={Imgftr} width="35%" height="auto"></img>
                    </Grid>
                    <Grid className={classes.box} item style={{display: "flex",justifyContent: "center",alignItems: "center"}}   xs={12} sm={12} md={4} lg={4} xl={4} >
        
                    <div style={{justifyContent: "center",alignItems: "center"}}>

                            <Grid container style={{display:"block"}}>
                                <Grid item>
                                     <Typography style={{fontFamily: "'MontserratBold'", fontSize: "90%"}} variant="h6" component="h2">
                                                    COMMUNITY
                                        </Typography>
                                </Grid>
                                <Grid item style={{display: "flex", justifyContent: "space-between"}}>
                                <InstagramIcon  onClick={event =>  window.open('https://www.instagram.com/minty_nft/','_blank')} target="#blank"  style={{ fontSize: "x-large" }} ></InstagramIcon>
                                <YouTubeIcon  onClick={event =>  window.open('https://www.youtube.com/channel/UCBS5ZY7WbUBJXepQ8ReXyFw','_blank')} target="#blank"  style={{ fontSize: "x-large" }} ></YouTubeIcon>
                                <TwitterIcon  onClick={event =>  window.open('https://twitter.com/minty_nft','_blank')} target="#blank"  style={{ fontSize: "x-large" }} ></TwitterIcon>
                                </Grid>

                            </Grid>
                        </div>
                    </Grid>
                    </Grid>
                </Grid>




            </div>
        
            </footer>
        </>
    );

}

export default Footer