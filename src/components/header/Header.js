import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from '../../assets/images/logo.png'


const useStyles = makeStyles((theme) => ({
  root: {
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   height:'100vh'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
    appBarBtn: {
    color: "#ffff",
    fontFamily:"MontserratBold",
  },
    appBar: {
    color: "transparent",
    background: "none",
    paddingLeft:"5%",
    paddingRight:"5%",
    paddingTop:"10px",
  },
  logo:{
    height:"50px"
  },
  appBarWrapper:{
    // width:'80%',
    // margin: '0 auto'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar classes={classes.appBarWrapper}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img className={classes.logo} src={Logo}></img>
          </IconButton>
          <Typography variant="h6" className={classes.title}>

          </Typography>
          <Button className={classes.appBarBtn}>Home</Button>
          <Button className={classes.appBarBtn}>Request Invitation</Button>
        </Toolbar>
      </AppBar>
   
    </div>
  );
}


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Grid from '@material-ui/core/Grid';

// import Logo from '../../assets/images/logo.png'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   appBar: {
//     color: "transparent",
//     background: "none",
//   },
//   logo: {
//     paddingTop: "20px",
//     paddingLeft: "10%",
//     flexGrow:1
//     // width: "20px%",
//     // height: "20px",
//     // flexGrow: '1',
//   },
//   appBarBtn: {
//     color: "#ffff"
//   }

// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar className={classes.appBar}>
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton}>
//             <img className={classes.logo} src={Logo}></img>
//           </IconButton>

//           <Grid justify="flex-end">
//             <Button className={classes.appBarBtn} >Home</Button>
//             <Button className={classes.appBarBtn}>Request Invitation</Button>
//           </Grid>



//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }