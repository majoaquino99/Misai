import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


/* borrar h1 al terminar modal login */

const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(2),
            width: '25ch',
            color: '#9A9594',      
          },
      display: "flex",
      flexDirection:"column",
      alignItems: 'center',
      justifyContent: 'center',
      '& label.Mui-focused': {
        color: '#938A95',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#938A95',
        },
        '&:hover fieldset': {
          borderColor: '#938A95',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#938A95',
        },
      }
    },
    div:{
        margin: "20px",
        borderRadius: "10px",
        boxShadow: '0 0 20px #9A9594',
        height: "60&"
    },
    btn:{
        margin: "10px",
        color: "#938A95",
        '&:hover': {
            backgroundColor: "#938A95",
			color:"white",}
          
      },
  }));

const LoginForm = () => {
    const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');
 

 
  const handleForm = (e) => {
    e.preventDefault();
    console.log(email, password)
  };


    return(       
       <div className={classes.div}> 
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleForm} >
        <Typography variant="h3" gutterBottom style={{width:310}}> Hello, Admin ! </Typography>
        <TextField  label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
        <TextField   label="Password" type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
        <Button className={classes.btn}  type='submit'  > Login </Button>
        <span>   </span>
      </form>
      </div>
    );
};

export default LoginForm;

// POST
//     https://genericapiv1.azurewebsites.net/oauth/token
// BODY
//     grant_type=password&username=admin&password=Adm1n@2020&app=AAD
// OUTPUT
//     {
//         "access_token": "5GsiX-t6ZTxGz_gYYIwSGYEr2iM7TTjMxC_xhshZj2E5WU83uoTG5mxrZ_vWCB-aMAdS20TsOpQdYuNpEhk56fTs8zf-2pYB4N-0YCRcIsphDSz_HmJYbg1bMRF2KJ4HMZp4jBSxEQ2C1A0G0fmPCrWXqCCO-GYPFOJDxbcKy94CD8rdl8BLZw_CY4x4edRzsFKiDfNjEIPXEWT9YVyNilj1YiG3FCDxJ2FE4-A8Got2L5RTWP4SxV8yxMZWFRBtJnIDQFKrFGadhlcNctUwpikRCQywr3vHiR9z64w-SzYE2dimxXsFsQfEV_RjIhzof7ZuNXLTmf5QBBL80NzQOqOG_Im07k73CkpQFwfy-J1eFbQn29I9KfW4CI_GUu-nNT8zaFcWtEmVa4--Aj8Ts8FRgIof2zkVU9Ejzz9SULI",
//         "token_type": "bearer",
//         "expires_in": 43199,
//         "refresh_token": "81dbccb1-033e-476c-ae77-025cc857dd07",
//         "userName": "System  Admin ",
//         ".issued": "Wed, 10 Jun 2020 11:27:12 GMT",
//         ".expires": "Wed, 10 Jun 2020 23:27:12 GMT"
//     }