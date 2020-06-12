import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import UpdateProduct from '../DataManipulation/UpdateProduct';


const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	btn: {
		margin: "1px",
		color: "black",
		border: "1px solid #c1bebd",
	},
	title: {
		color: "#9A9594",
		background: "#c1bebd",
		margin: "5px",
	},
	divbtn: {
		display: "flex",
		justifyContent: "flex-end",
	},
});

const ProductsList = ({productsList}) => {
	const classes = useStyles();

	const [flag, setFlag] = useState(false);

	const handleAddProduct = (e) => {
		e.preventDefault();
		setFlag(true)
	}
	const handleProductList = (e) => {
		e.preventDefault();
		setFlag(false)
	}

	const products = productsList;

	const data = products.map((data) => (
		<TableRow key={data.productId}>
			<TableCell component="th" scope="row">
				{data.description}
			</TableCell>
			<TableCell align="center">{data.categoryId}</TableCell>
			<TableCell align="center">{data.price}</TableCell>
			<TableCell align="center">
				{" "}
				<Button className={classes.btn}>
					<EditIcon style={{ fontSize: 20 }} />
				</Button>{" "}
			</TableCell>
			<TableCell align="center">
				<Button className={classes.btn}>
					<DeleteIcon style={{ fontSize: 20 }} />
				</Button>
			</TableCell>
		</TableRow>
	));
	return (
		<div style={{ textAlign: "center " }}>
		{flag === false ? (
			<>
				<div className={classes.divbtn}>
					<Button className={classes.btn} onClick={handleAddProduct}>
						Add product <NoteAddIcon style={{ fontSize: 20 }} />{" "}
					</Button>
				</div>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="caption table">
						<TableHead className={classes.title}>
							<TableRow>
								<TableCell>Description</TableCell>
								<TableCell align="center">Category</TableCell>
								<TableCell align="center">Price</TableCell>
								<TableCell align="center">Edit</TableCell>
								<TableCell align="center">Delete</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{data}</TableBody>
					</Table>
				</TableContainer>
			</>

		) : null}
		{flag === true
		?
			(
				<>
				<Button onClick={handleProductList} className={classes.btn} style={{marginTop: "20px"}}> <ArrowBackIosIcon style={{fontSize: 15 }}/> Back </Button>
				<UpdateProduct setFlag={setFlag}/>
				</>
			)
		: null}

		</div>
	);
};

export default ProductsList;
