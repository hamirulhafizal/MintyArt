import React from 'react';

import Imgftr from '../../assets/images/footer.png'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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
            <div className={classes.root}>
                {/* <Grid container className={classes.container} spacing={4} >
                    <Grid className={classes.box} xs={3} sm={3} md={3} lg={3} xl={3}  item>
                    <Typography  variant="h6" component="h2">
                        contact us <br /><br/> hello@Minty.art
                    </Typography>     
                        
                    </Grid>
                    <Grid className={classes.box} xs={3} sm={3} md={3} lg={3} xl={3}  item>
                           <img src={Imgftr} width="100%" height="auto"></img>
                    </Grid>
                    <Grid className={classes.box} xs={3} sm={3} md={3} lg={3} xl={3}  item>
                           <Grid container className={classes.containerIcon}>
                               <Grid container style={{justifyContent:"center", fontSize:"100%"}}>
                                   <Grid item>
                                       <Typography  variant="h6" component="h2">
                                              COMMUNITY
                                       </Typography>
                                   </Grid>
                               </Grid>

                            <Grid container style={{justifyContent:"center"}}>
                                <Grid className={classes.BoxIcon} item>
                                    <InstagramIcon style={{ fontSize: "xxx-large" }} ></InstagramIcon>
                                </Grid>

                                <Grid className={classes.BoxIcon} item>
                                        <YouTubeIcon style={{ fontSize: "xxx-large" }}  ></YouTubeIcon>
                                </Grid> 

                                <Grid className={classes.BoxIcon}item>
                                        <TwitterIcon style={{ fontSize: "xxx-large" }} ></TwitterIcon>
                                </Grid> 
                            </Grid>
                               


                            </Grid>   
                           
                    </Grid>
                </Grid> */}

                <Grid container className={classes.container} spacing={4} >

                    <Grid className={classes.box} item xs={12} sm={12} md={4} lg={4} xl={4} >
                            <Typography  variant="h6" component="h2">
                                contact us<br/> hello@Minty.art
                            </Typography>  
                    </Grid>
                    <Grid className={classes.box} item xs={12} sm={12} md={4} lg={4} xl={4} >
                            <img src={Imgftr} width="25%" height="auto"></img>
                    </Grid>
                    <Grid className={classes.box} item xs={12} sm={12} md={4} lg={4} xl={4} >
                        <Box>
                        <Typography  variant="h6" component="h2">
                                              COMMUNITY
                        </Typography>
                        <InstagramIcon style={{ fontSize: "xx-large" }} ></InstagramIcon>
                        <YouTubeIcon style={{ fontSize: "xx-large" }}  ></YouTubeIcon>
                        <TwitterIcon style={{ fontSize: "xx-large" }} ></TwitterIcon>

                        </Box>
                    </Grid>

                </Grid>




            </div>
        </>
    );

}

export default Footer