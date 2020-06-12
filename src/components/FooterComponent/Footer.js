// Aquí irá el footer, borrar este comentario al finalizar componente
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CopyrightIcon from '@material-ui/icons/Copyright';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
	footer: {
		display: 'flex',
        justifyContent:'center',
        background: "#C8A79C",
        alignItems: "center",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
    }
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.footer}>
		<CopyrightIcon style={{ fontSize: 15 }} />	<Typography variant="body2" component="h2">
      2020     MADE WITH LOVE BY MISAI
</Typography>
		</div>
	);
};

export default Footer;