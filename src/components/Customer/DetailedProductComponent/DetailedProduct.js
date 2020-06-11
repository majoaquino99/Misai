//Monse, detailed product component
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles}  from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { FacebookShareCount, PinterestShareCount, } from "react-share";
//import { FacebookIcon, PinterestIcon, } from "react-share";

const useStyles = makeStyles((theme) => ({
	Container: {
		display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70vh',
    width:'100vh'
    },
    text:{
      margin: "1em"
    },
    divImg:{
      display: 'flex',
      flexDirection: 'Column',
      alignItems: 'center',
      height: '60vh',
      width:'40vh',    
    },
    divDetails:{
      display: 'flex',
      flexDirection: 'Column',
      alignItems: 'center',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      '& label.Mui-focused': {
            color: '#C8A79C',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#C8A79C',
            },
            '&:hover fieldset': {
              borderColor: '#C8A79C',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#C8A79C',
            },
          }
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },    
    selectEmpty: {
      marginTop: theme.spacing(2),
      color: "#C8A79C",
      border: ' #C8A79C',
    },
    btn:{
      margin: "10px",
      color: "black",
      '&:hover': {	
        border:"1px solid black",
        color:"black"}
    },  
}));

const DetailedProduct = ({productById}) => {
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    quantity: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    console.log(event.target.value)
  };
  
    return(
        <React.Fragment>
        <Button className={classes.btn} style={{marginTop: "20px"}}> <ArrowBackIosIcon style={{ fontSize: 15 }}/> back </Button>
        <CssBaseline />
        <Container className={classes.Container} maxWidth="sm" >
        <div className={classes.divImg}> 
        <img src={productById.picture} alt='Logo Misai' width={250}/>
        <div>
        <Typography  variant="subtitle1" > Share with :</Typography>
        {/* <FacebookShareCount url={productById.picture}>
         {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
         </FacebookShareCount> */}
        <Button > <FacebookIcon style={{ fontSize: 30 }} /> </Button>
        <Button > <PinterestIcon style={{ fontSize: 30 }} /> </Button>
        </div>
        </div> 
        <div className={classes.divDetails}> 
        <Typography className={classes.text} variant="h5" > {productById.description} </Typography>
        <Typography className={classes.text} variant="subtitle1" > Color: {productById.colors} </Typography>
        <Typography className={classes.text} variant="subtitle1" > Sizes: {productById.sizes} </Typography>
        <Typography className={classes.text} variant="subtitle1" > Price: ${productById.price} USD</Typography>
        {/*Quantity */}
         <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Quantity</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Quantity"
          inputProps={{
            name: 'Quantity',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </Select>
      </FormControl>
          {/* Quantity */}
        
        
       
        <Button className={classes.btn} >
         <ShoppingCartIcon style={{ fontSize: 20 }} /> Add cart
        </Button>
      

        </div>
       </Container>
      </React.Fragment>
    )

};

export default DetailedProduct;
