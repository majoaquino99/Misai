import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import productsListByCategory from "./MockProducts"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import NoteAddIcon from '@material-ui/icons/NoteAdd';


function createData(description, category, price, edit, fdelete) {
	return { description, category, price, edit, fdelete };
  } 

  const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
  ];
  const useStyles = makeStyles({
	table: {
	  minWidth: 650, 
	},
	btn:{
		margin: "1px",
		color: "black",	
		  border:"1px solid #c1bebd",		 
	  },  
	  title:{
		  color:"#9A9594",
		  background:'#c1bebd',
		  margin: "5px"	  
	  },
	  divbtn:{
		  display:"flex",
		  justifyContent:"flex-end",
		  
	  }
	  
  });


const ProductsList = () =>{
	const classes = useStyles();

		console.log({productsListByCategory})
	const products = productsListByCategory
	
	
	const data = products.map((data) => 
	<TableRow key={data.name}>
	<TableCell component="th" scope="row">
	  {data.description}
	</TableCell>
	<TableCell align="center">{data.categoryId}</TableCell>
	<TableCell align="center">{data.price}</TableCell>
	<TableCell align="center">  <Button className={classes.btn} >
              <EditIcon style={{ fontSize: 20 }} />
            </Button>   </TableCell>
	<TableCell align="center"><Button className={classes.btn} >
              <DeleteIcon style={{ fontSize: 20 }} />
            </Button></TableCell>
  </TableRow> )
	  return (
		  <div style={{ textAlign: "center "}}>
		  <div className={classes.divbtn}>
		  <Button className={classes.btn} >
              <NoteAddIcon style={{ fontSize: 20 }} /> </Button>
			  </div>
		<TableContainer component={Paper}>
		 <Table className={classes.table} aria-label="caption table">
        <TableHead className={classes.title}>
          <TableRow >
            <TableCell>Description</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data}
        </TableBody>
      </Table>
		</TableContainer>
		</div>
	  );
	}

export default ProductsList;