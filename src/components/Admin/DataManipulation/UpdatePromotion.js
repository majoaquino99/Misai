import React from 'react';
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
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "20px",
		boxShadow: "0 0 20px #9A9594",
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
	btnback: {
		margin: "5px",
		color: "black",
		border: "1px solid #c1bebd",
	},
	divbtn: {
		display: "flex",
		justifyContent: "flex-end",
	},
	title: {
		display: "flex",
		justifyContent: "center",
		color: "938A95",
	},
}));

const UpdatePromotion = () =>{
	const classes = useStyles();
	return(
		<div>
			<Button className={classes.btnback} style={{ marginTop: "20px" }}>
				<ArrowBackIosIcon style={{ fontSize: 30 }} /> back
			</Button>

			<form className={classes.root}>
				<Typography className={classes.title} variant="h4" gutterBottom>
					{" "}
					Add Category{" "}
				</Typography>
				<TextField
					id="description"
					label="Description"
					variant="outlined"
				/>
				<TextField id="picture" label="Picture" variant="outlined" />
				<AddAPhotoIcon style={{ width: 100 }} />
				<div className={classes.divbtn}>
					<Button style={{ width: 10 }} className={classes.btn}>
						<CheckCircleIcon style={{ fontSize: 30 }} />
					</Button>
					<Button style={{ width: 10 }} className={classes.btn}>
						<CancelIcon style={{ fontSize: 30 }} />
					</Button>
				</div>
			</form>
		</div>
	)
}

export default UpdatePromotion;
