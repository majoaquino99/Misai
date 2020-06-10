//Monse, detailed product component
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {  makeStyles }  from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
	Container: {
		display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#cfe8fc',
    height: '70vh',
    width:'100vh'
    },
    text:{
      margin: "4px"
    },
    divImg:{
      display: 'flex',
      flexDirection: 'Column',
      backgroundColor: '#cfe8fc',
      height: '60vh',
      width:'40vh',
      border: '2px solid #C8A79C'
    },
    divDetails:{
      display: 'flex',
      flexDirection: 'Column',
      alignItems: 'center',
      border: '2px solid #C8A79C',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      color: "#C8A79C",
      border: ' #C8A79C',
      marginTop:"20px"
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      color: "#C8A79C",
      border: ' #C8A79C',
    },
    select:{
       border: '#C8A79C',
      color: "#C8A79C",
      '&:hover': {	
        border:"2px solid #cccccc",
        color:"black"
    }
  },
    btn:{
      margin: "2px",
      color: "black",
      '&:hover': {	
        border:"2px solid #C8A79C",
        color:"black"}
    }
  
}));

const DetailedProduct = ({productById}) => {
  const classes = useStyles();
    //  console.log(productById)
    // console.log(productId[0])
    // console.log(productId[0].description)
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
        <div className={classes.divImg}> Aqui la foto
        {/* <img src={productById.ById.picture}  width={200} />*/}
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