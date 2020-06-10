//Monse, detailed product component
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {  makeStyles }  from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FacebookIcon from '@material-ui/icons/Facebook';

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
      '& label.Mui-focused': {
        color: '#C8A79C',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#C8A79C',
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
      },
      margin: theme.spacing(1),
      minWidth: 120,
      marginTop:"20px"
      
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

  //State selector
    const [state, setState] = React.useState({
      cant: '',
      total: 'hai',
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
        <CssBaseline />
        <Container className={classes.Container} maxWidth="sm" >
        <div className={classes.divImg}> 
        <img src={productById.picture} alt='Logo Misai' width={250}/>
        {/* <img src={productById.ById.picture}  width={200} />*/}
        <Typography className={classes.text} variant="subtitle1" > Share with :</Typography>
        <Button> <FacebookIcon style={{ fontSize: 30 }} /> </Button>
        </div> 
        <div className={classes.divDetails}> 
        <Typography className={classes.text} variant="h5" > {productById.description} </Typography>
        <Typography className={classes.text} variant="subtitle1" > Color: {productById.colors} </Typography>
        <Typography className={classes.text} variant="subtitle1" > Sizes: {productById.sizes} </Typography>
        <Typography className={classes.text} variant="subtitle1" > Price: ${productById.price} USD</Typography>

        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.select} htmlFor="outlined-cant-native-simple">Cant</InputLabel>
        <Select
          className={classes.select}
          native
          value={state.cant}
          onChange={handleChange}
          label="Cant"
          inputProps={{
            name: 'cant',
            id: 'outlined-cant-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </Select>

        <Button className={classes.btn} >
         <ShoppingCartIcon style={{ fontSize: 20 }} /> Add cart
        </Button>
      </FormControl>

        </div>
       </Container>
      </React.Fragment>
    )

};

export default DetailedProduct;