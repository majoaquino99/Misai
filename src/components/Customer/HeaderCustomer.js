import React from 'react';
// import Women from '../views/v/Women'
import logo from '../../assets/images/Logo-Misai.svg';
import { fade , makeStyles }  from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import LabelIcon from '@material-ui/icons/Label';


const useStyles = makeStyles((theme) => ({
	header: {
		flexGrow: 1,
	},
	nav:{
		background:"#ffffff",
		borderBottomStyle:"solid",
		borderBottomColor:"#C8A79C",
		borderBottomWidth:"8px",		
	},
	img: {
		marginRight: theme.spacing(1),	
	},
	bar:{
		display: "flex",
		flexDirection: "row",	 
		justifyContent: 'space-between',
	},
	button2:{
		alignItems: "left",
		color:"black",
		'&:hover': {
		color:"#C8A79C",
	},
		},
	button:{
		color:"#C8A79C",
		'&:hover': {
			backgroundColor: "#C8A79C",
			color:"white",
	},
		},
	links:{
		display: "flex",
		flexDirection: "row",	 
		justifyContent: 'center',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
		  backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
			width: '20%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: '20%',
			
		},
	},  
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color:"black"
	  },
	  
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		borderRadius: theme.shape.borderRadius,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
			width: '20ch',
			},
		},
		'&:hover': {	
			border:"1px solid #cccccc",
			color:"black",
		},
	},
}));

const HeaderCustomer = () => {
	const classes = useStyles();	

	return (
		<div className={classes.header} >
			<AppBar className={classes.nav}>
				<Toolbar className={classes.bar}>
					<img src={logo} alt='Logo Misai' width={100} />
					 <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder= " Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
					<div>
						<Button> <ShoppingCartIcon style={{ fontSize: 30 }} /> </Button>
						<Button   className={classes.button}>Admin </Button>
					</div>
				</Toolbar>
				<Toolbar className={classes.links}>
					<Button className={classes.button2} > 
						<LabelIcon/> All discount
					</Button>
                    <form>				
                        <Button  type="submit" className={classes.button} >
                            WOMAN 
                        </Button> 
                        <Button  type="submit" className={classes.button} >
                            Hand Bags
                        </Button>
                        <Button  type="submit" className={classes.button} >
                            Shoes
                        </Button>
                             <Button  type="submit" className={classes.button} >
                            Jewerly & accesories
                        </Button>
                        <Button  type="submit" className={classes.button} >
                            Kids
                        </Button>
                        <Button  type="submit" className={classes.button} >
                            Home
                        </Button>
                    </form>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default HeaderCustomer;