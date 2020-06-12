import React, { useState } from 'react';
import logo from '../../assets/images/Logo-Misai.svg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    nav:{
      background:"#ffffff",
      borderBottomStyle:"solid",
      borderBottomColor:"#938A95",
      borderBottomWidth:"8px",
    },
    img: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
      color:"#000000",
    },
    button:{
      color:"#000000",
      '&:hover': {
      backgroundColor: "#C8A79C",
      color:"white",
      },
    },
}));

const HeaderAdmin = ({handleProductsInventory, handleCategoriesInventory,
	handlePromotionsInventory, handleLogout}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
	setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


 /*  function handleClickWomen(){
    history.push("/Women")
  }

  function handleClickMan(){
    history.push("/Man")
  } */
	return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <img src={logo} alt='Logo Misai' width={200} />
          <Typography variant="h6" className={classes.title}>
           Admin
          </Typography>

          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon />
          </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
             onClose={handleClose}
            >
            <MenuItem onClick={handleProductsInventory}>Inventory</MenuItem>
            <MenuItem onClick={handlePromotionsInventory}>Promotions</MenuItem>
            <MenuItem onClick={handleCategoriesInventory}>Categories</MenuItem>
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
	);
}

export default HeaderAdmin;
