import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Products Component receives an object with Image, price, and Description depending
// on the value received by categories
// You need to create an infinite scroll grid including 5-6 products on each row
// Condition the image size to be the same for each one

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		margin: "10px",
	},
	listContainer: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
	},
	btn: {
		margin: "10px",
		color: "black",
		"&:hover": {
			border: "1px solid black",
			color: "black",
		},
	},
});

const ProductsList = ({ productsList, handleDetailedProduct }) => {
	const classes = useStyles();

	const products = productsList;

	const data = products.map((data) => (
		<Card key={data.productId} className={classes.root}>
			<CardMedia
				component="img"
				alt="img"
				height="300"
				width="50"
				image={data.picture}
				title="img"
			/>
			<CardContent>
				<Typography gutterBottom variant="subtitle1" component="h2">
					${data.price}
					<Button
						className={classes.btn}
						value={data.productId}
						onClick={handleDetailedProduct}
					>
						View
					</Button>
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{data.description}
				</Typography>
			</CardContent>
		</Card>
	));

	return <div className={classes.listContainer}>{data}</div>;
};

export default ProductsList;
