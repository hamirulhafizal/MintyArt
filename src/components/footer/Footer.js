import React from 'react';

import Imgftr from '../../assets/images/footer.png'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid';
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
    flexDirection: "row"
},
box:{
    display:"flex",
    justifyContent:"center",
     alignItems:"center",
     color:"white",
     height:"inherit",
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
        <footer>
            <div className={classes.root}>
                <Grid container className={classes.container} spacing={4} >
                    <Grid className={classes.box} xs={3} sm={3} md={3} lg={3} xl={3}  item>
                    <Typography  variant="h5" component="h2">
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
                                       <Typography  variant="h5" component="h2">
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
                </Grid>
            </div>
        </footer>
    );

}

export default Footer