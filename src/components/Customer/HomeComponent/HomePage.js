import React, { useState } from 'react';
import HeaderCustomer from '../HeaderCustomer';
import ProductsList from '../ProductsComponent/ProductsList';
import CategoriesList from '../CategoriesComponent/CategoriesList';
import PromotionsList from '../PromotionsComponent/PromotionsList';
import DetailedProduct from '../DetailedProductComponent/DetailedProduct'
import {  makeStyles }  from '@material-ui/core/styles';
import productById from '../DetailedProductComponent/productId'

//view promotions and categories
//view lista de productos
const useStyles = makeStyles((theme) => ({
	Page: {
		display: 'flex',
		flexDirection: 'column',
    }
}));
const HomePage = () => {
    const classes = useStyles();
    const [view, setView] = useState(0);

    const handleChangeState = () => {
        setView(1)
    }


    return(
        <div className= {classes.Page}>
       
        </div>
    )

};

export default HomePage;

