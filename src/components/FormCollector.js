import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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




const FormSubmit = (e) => {


    e.preventDefault();

    $.ajax({
        type: 'post',
        url: '/mail/',
        data: $('form').serialize(),

        success: function () {

         document.getElementById("formfield2").style.display = "none";

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
         alert(textStatus);
    }});


    return(
        <>

        </>

    );
}

const FormCollector = () => {

    const classes = useStyles();

    const Results = () => (
        <div id="results" style={{color:"white"}} className="search-results">
            <p>
            Thank you!
            </p> 
        </div>
      )

    const FormClick1 = () => setShowResults(false)
    const [showResults, setShowResults] = useState(true)

    return (
        <>
            <form 
            onSubmit={FormSubmit}
            id="form"
            style={{display:"block"}}
            >
                <input type="hidden" name="patron" value="yes" />
                <input type="hidden" name="source" value="patron page 7 JAN 2020" />
           
                <Grid container className={classes.formBox} spacing={2} id="formfield2" >
                
                                    <Grid item>
                                    <CssTextField InputLabelProps={{ style: { color: '#FFFFFF',  fontFamily:"MontserratBlack",fontWeight: 'bold', }, }}  
                                            className={classes.customField}
                                            label="Name"
                                            type="text"
                                            name="first_name"
                                        >
                                        </CssTextField>
                                
                                    </Grid>
                                    <Grid item>
                                        <CssTextField InputLabelProps={{ style: { color: '#FFFFFF', fontFamily:"MontserratBlack" }, }}
                                            className={classes.customField}
                                            id="E-mail"
                                            label="E-mail"
                                            type="email"
                                            name="email"
                                            required 
                                            />
                                    </Grid>
                                    <br></br>
                                    
                                    <Button className={classes.ButtonBox}
                                    type="submit"
                                    onClick={FormClick1}
                                    >SUBMIT</Button>
                                </Grid> 
              
                   { showResults ?  null : <Results />}
                
            </form>
        </>

    );

}


export default FormCollector 