import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

import Logo from '../../assets/images/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo:{
      width: "20%",
      height: "auto"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
            <Grid spacing={10} justify={"center"} alignItems={"center"} container>
                <Grid xs={6} item style={{ justifySelf: "flex-start" }} item> >
                    <img className={classes.logo} src={Logo}></img>
                </Grid>
                <Grid xs={6} item>
                     <Button color="inherit">Login</Button>
                </Grid>
            </Grid> 
                            
              

        </Toolbar>
      </AppBar>
    </div>
  );
}