import React, { useState } from 'react';
import HeaderCustomer from '../HeaderCustomer';
import ProductsList from '../ProductsComponent/ProductsList';
import CategoriesList from '../CategoriesComponent/CategoriesList';
import PromotionsList from '../PromotionsComponent/PromotionsList';
import {  makeStyles }  from '@material-ui/core/styles';
import  mockCategories  from '../mockCategories';
import mockPromotions from '../mockPromotions';
//view promotions and categories
//view lista de productos
const useStyles = makeStyles(() => ({
	Page: {
		display: 'flex',
		flexDirection: 'column',
    }
}));


const HomePage = () => {
    const classes = useStyles();
	const [view, setView] = useState(0);
	const [value, setValue] = useState()

    const handleShowProducts = (e) => {
		e.preventDefault();
		const selectedValue = e.currentTarget.value;
		setValue()
        setView(1)
	}
/* 	const goBack = () => {
        const aux = view - 1;
        setView(aux);
	}; */

    return(
        <div className= {classes.Page}>

            <HeaderCustomer mockCategories={mockCategories} handleShowProducts={handleShowProducts}/>
            <div>
            {view === 0
            ?
            (
                <div style={{marginTop: "140px"}}>
                {/* Aqui pueden moverle pa ver sus componentes */}
                <PromotionsList mockPromotions={mockPromotions}/>
                <CategoriesList mockCategories={mockCategories}/>

                </div>
            ) : null}
            {view === 1
            ?
            (
                <ProductsList/>
            ) : null}
            </div>
        </div>
    )

};

export default HomePage;

