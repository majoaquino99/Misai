import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from 'axios';
import useToken from '../../../controller/useToken'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "20px",
		boxShadow: "0 0 20px #9A9594",
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
		
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
			"& label.Mui-focused": {
				color: "#C8A79C",
			},
			"& .MuiOutlinedInput-root": {
				"& fieldset": {
					borderColor: "#C8A79C",
				},
				"&:hover fieldset": {
					borderColor: "#C8A79C",
				},
				"&.Mui-focused fieldset": {
					borderColor: "#C8A79C",
				},
			},
		},
	},
	margin: {
		margin: theme.spacing(1),
	},
	title: {
		color: "938A95",
		textAlign: "center",
		width:"100%"
	},
	btn: {
		margin: "1px",
		color: "black",
		border: "1px solid #c1bebd",
	},
	divbtn: {
		display: "flex",
		justifyContent: "flex-end",
	},
	btnback: {
		margin: "5px",
		color: "black",
		border: "1px solid #c1bebd",
	},
	
}));

const UpdateProduct = () => {
	const { token } = useToken()
	const [description, setDescription] = useState('')
	const [colors, setColors] = useState('')
	const [sizes, setSizes] = useState('')
	const [price, setPrice] = useState('')

	const submitNewProduct = () => {
		axios.post('https://genericapiv1.azurewebsites.net/v1/shop/products',
			{
				description,
				colors,
				sizes,
				price
			},
			{
				headers: { Authorization: `Bearer ${token}` }
			})
			.then(function (response) {
				console.log(response);
			})

	}


	const classes = useStyles();
	const [Active, setActive] = React.useState("");

	const handleChange = (event) => {
		setActive(event.target.value);
	};

	const handleDescription = (e) => {
		setDescription(e.target.value)
	};

	const handleColors = (e) => {
		setColors(e.target.value)
	};

	const handleSizes = (e) => {
		setSizes(e.target.value)
	};

	const handlePrice = (e) => {
		setSizes(e.target.value)
	};

	const time = Date.now();
	//DIA En que se creo y dia en que se edito
	//console.log(time);
	return (
		<div>
			<Button className={classes.btnback} style={{ marginTop: "20px" }}>
				{" "}
				<ArrowBackIosIcon style={{ fontSize: 15 }} /> back{" "}
			</Button>
		<div>
			<form className={classes.root} noValidate>
				<Typography className={classes.title} variant="h4" gutterBottom>
					{" "}
					Add Product{" "}
				</Typography>
				<TextField
					id="oproductId"
					label="Product Id"
					variant="outlined"
				/>
				<TextField
					id="description"
					label="Description"
					variant="outlined"
					value = { description }
					onChange={handleDescription}
				/>
				<TextField
					id="categoryId"
					label="CategoryId"
					variant="outlined"
				/>
				<TextField id="colors" label="Colors" value = { colors } onChange={handleColors} variant="outlined" />
				<TextField id="sizes" label="Sizes" value = { sizes } onChange={handleSizes} variant="outlined" />
				<TextField id="price" label="Price" value = { price } onChange={handlePrice} variant="outlined" />
				<TextField id="picture" label="Picture" variant="outlined" />
				<div> 
				<InputLabel id="demo-simple-select-label">Active</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={Active}
					onChange={handleChange}
				>
					<MenuItem value={"ture"}>True</MenuItem>
					<MenuItem value={"false"}>False</MenuItem>
				</Select>
				</div>
				<div className={classes.divbtn}>
					<Button style={{ width: 10 }} onClick={submitNewProduct} className={classes.btn}>
						{" "}
						<CheckCircleIcon style={{ fontSize: 30 }} />{" "}
					</Button>
					<Button style={{ width: 10 }} className={classes.btn}>
						{" "}
						<CancelIcon style={{ fontSize: 30 }} />{" "}
					</Button>
				</div>
			</form>
			</div>
		</div>
	);
};

export default UpdateProduct;
