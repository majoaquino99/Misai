import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CategoriesList({mockCategories}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
	  {mockCategories.map(category => (
		<Grid item xs>
          <Paper key={category.categoryId} className={classes.paper}>{category.description}</Paper>
        </Grid>
		))}
      </Grid>
    </div>
  );
}
