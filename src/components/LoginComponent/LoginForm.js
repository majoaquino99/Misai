import React, { useState, useContext, useCallback } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

/* borrar h1 al terminar modal login */

const useStyles = makeStyles((theme) => ({
	form: {
		"& > *": {
			margin: theme.spacing(2),
			width: "25ch",
			color: "#9A9594",
		},
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		"& label.Mui-focused": {
			color: "#938A95",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#938A95",
			},
			"&:hover fieldset": {
				borderColor: "#938A95",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#938A95",
			},
		},
	},
	div: {
		margin: "20px",
		borderRadius: "10px",
		boxShadow: "0 0 20px #9A9594",
		height: "60&",
	},
	btn: {
		margin: "10px",
		color: "#938A95",
		"&:hover": {
			backgroundColor: "#938A95",
			color: "white",
		},
	},
}));

const LoginForm = () => {
	const classes = useStyles();
	/* const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); */
	const [error, setError] = useState("");
	const history = useHistory();

	const handleLogin = (event) => {
		event.preventDefault();
		const { email, password } = event.target.elements;
		if (email.value === "admin" && password.value === "Adm1n@2020") {
			console.log(email.value, password.value);
			history.push("/admin");
		} else {
			setError("Incorrect information, try again");
		}
	};

	/* const handleForm = (e) => {
    e.preventDefault();
    console.log(email.value, password.value)
  };
 */

	return (
		<div className={classes.div}>
			<form
				className={classes.form}
				noValidate
				autoComplete="off"
				onSubmit={handleLogin}
			>
				<Typography variant="h3" gutterBottom style={{ width: 310 }}>
					{" "}
					Hello, Admin !{" "}
				</Typography>
				<TextField id="email" label="Email" variant="outlined" />
				<TextField
					id="password"
					label="Password"
					type="password"
					variant="outlined"
				/>
				<Button className={classes.btn} type="submit">
					{" "}
					Login{" "}
				</Button>
				<span> {error} </span>
			</form>
		</div>
	);
};

export default LoginForm;
