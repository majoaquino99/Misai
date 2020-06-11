import React, { useState } from 'react';
import HeaderCustomer from '../HeaderCustomer';
import ProductsList from '../ProductsComponent/ProductsList';
import CategoriesList from '../CategoriesComponent/CategoriesList';
import PromotionsList from '../PromotionsComponent/PromotionsList';
import DetailedProduct from '../DetailedProductComponent/DetailedProduct'
import {  makeStyles }  from '@material-ui/core/styles';
import  mockCategories  from '../mockCategories';
import mockPromotions from '../mockPromotions';
import productById from '../DetailedProductComponent/productId'

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
	const [value, setValue] = useState({
		categoryId: '',
		productId:'',
	})

    const handleShowProducts = (e) => {
		e.preventDefault();
		const selectedValue = e.currentTarget.value;
		setValue({
			...value,
			categoryId: selectedValue,
		});
		setView(1)
	}
	/* console.log(value); */

	const handleDetailedProduct = (e) => {
		e.preventDefault();
		const selectedValue = e.target.value;
		setValue({
			...value,
			productId: selectedValue,
		});
		setView(2)
		console.log(value);

	}

 	const goBack = () => {
        const aux = view - 1;
        setView(aux);
	};


    return(
        <div className= {classes.Page}>

            <HeaderCustomer mockCategories={mockCategories} handleShowProducts={handleShowProducts}/>
            <div style={{marginTop: "140px"}}>
				{view === 0
				?
				(
					<>
						{/* Aqui pueden moverle pa ver sus componentes */}
						<PromotionsList mockPromotions={mockPromotions}/>
						<CategoriesList mockCategories={mockCategories}/>
					</>
				) : null}
				{view === 1
				?
				(
					<ProductsList  goBack={goBack} handleDetailedProduct={handleDetailedProduct}/>
				) : null}
				{view === 2
				?
				(
					<DetailedProduct productById={productById} goBack={goBack}/>
				) : null}
            </div>
        </div>
    )

};

export default HomePage;

