import React from 'react';
import ReactDOM from 'react-dom';

import { Grid, Button, TextField } from "@material-ui/core";

import { makeStyles, withStyles } from '@material-ui/core/styles';


const CssTextField = withStyles({
    root: {
        "& .MuiInput-underline:before": {
            borderBottomColor: "#FFFFFF"
        },
        "& .MuiInput-underline:hover:after": {
            borderBottomColor: "#FFFFFF"
        },
        "& .MuiInput-underline:": {
            borderBottomColor: "#FFFFFF"
        },
        "& label.Mui-focused": {
            borderBottomColor: "#FFFFFF"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#FFFFFF"
        },
        "& .MuiInputBase-input":{
            color: "#FFFFFF"
        }
    }
})(TextField);


const useStyles = makeStyles((theme) => ({

    formBox: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    },
    ButtonBox: {
        justifyContent: "center",
        color: "#257ce1",
        backgroundColor: "none",
        border: '0.5px solid #257ce1',
        width: "25%",
        alignSelf: "center",
        paddingBottom: "40px",
        fontFamily:"MontserratBlack"
        // marginBottom: "8px",
        // bottom: "auto",
    },
    customField:{
        color:"#FFFFFF"
    },
}

));

const FormCat = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)

    
    return(
        <div>
            <input  type="submit" value="search" onClick={onClick} />
            {showResults ? <Result /> : null}
            
        </div>
    )
}

const Result = () => (
    <div id="results" className="search-result">
        <script type="/script">
        
        </script>

        some


    </div>
)

const Form = () => {

    const classes = useStyles();
    return (
        <>
            <form>
                {/* <input type="hidden" name="artist" value="yes" />
                <input type="hidden" name="source" value="artist page 18 Dec 2020" /> */}
                <Grid container className={classes.formBox} spacing={2}>
                    <Grid item>
                        {/* <TextField id="standard-basic" label="Name" InputLabelProps={{style: { color: '#fff' },}} color={'#fff'} /> */}
                        <CssTextField InputLabelProps={{ style: { color: '#FFFFFF',  fontFamily:"MontserratBlack",fontWeight: 'bold', }, }}  
                            className={classes.customField}
                            id="Name"
                            label="Name"
                        />
                    </Grid>
                    <Grid item>
                        {/* <TextField id="standard-basic" label="E-mail" InputLabelProps={{style: { color: '#fff' },}} /> */}
                        <CssTextField InputLabelProps={{ style: { color: '#FFFFFF', fontFamily:"MontserratBlack" }, }}
                            className={classes.customField}
                            id="E-mail"
                            label="E-mail" />
                    </Grid>
                    <br></br>
                    
                    <Button className={classes.ButtonBox}>SUBMIT</Button>
                    {/* < FormCat/> */}
                </Grid>
            </form>
            <script>

            </script>
        </>

    );

}


export default Form 