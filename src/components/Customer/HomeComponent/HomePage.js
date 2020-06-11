//view promotions and categories
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderCustomer from '../HeaderCustomer';
import ProductsList from '../ProductsComponent/ProductsList';
import PromotionsList from '../PromotionsComponent/PromotionsList';
import DetailedProduct from '../DetailedProductComponent/DetailedProduct'
import {  makeStyles }  from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

// Mock Data
// import  mockCategories  from '../mockCategories';
// import mockPromotions from '../mockPromotions';
// import productById from '../DetailedProductComponent/productId'
// import productsListByCategory from '../ProductsComponent/ListOfProducts';

// API Data
import useCategories from '../../../controller/useCategories';
import useProducts from '../../../controller/useProducts';
import useProductById from '../../../controller/useProductById';
import usePromotions from '../../../controller/usePromotions';



const useStyles = makeStyles(() => ({
	Page: {
		display: 'flex',
		flexDirection: 'column',
    }
}));


const HomePage = () => {
	const classes = useStyles();
	const history = useHistory();

	// render condicional of views
	const [view, setView] = useState(0);
	const [id, setId] = useState(0);

	// destructuring API
	const {categories, errorCategories} = useCategories();
	const {promotions, errorPromotions} = usePromotions();
	const {products, errorProducts} = useProducts();
	const {product, errorProduct} = useProductById(id);

	const [selectedCategory, setSelectedCategory] = useState(0);

	const handleLoginView = (e) => {
		e.preventDefault();
		history.push('/login');
	}

	const handleShowProducts = (e) => {
		e.preventDefault();
		const selectedValue = e.currentTarget.value;
		setSelectedCategory(parseInt(selectedValue, 10));
		setView(2)
	}

	const handleDetailedProduct = (e) => {
		e.preventDefault();
		const selectedValue = e.currentTarget.value;
		setId(selectedValue);
		setView(3)
	}
	const handleAux = (e) => {
		e.preventDefault();
		const selectedValue = e.currentTarget.value;
		setId(selectedValue);
		setView(1)
	}
	const filteredData = products.filter((c) => c.categoryId === selectedCategory);


 	const  goToProductsByCategories = () => {
        setView(2);
	};
	const goHome = () => {
        setView(0);
	};


    return(
        <div className= {classes.Page}>
            <HeaderCustomer
			categoriesSection={categories}
			handleShowProducts={handleShowProducts}
			handleLoginView={handleLoginView}
			/>
            <div style={{marginTop: "140px"}}>
				{view === 0
				?
				(
					<>
						{/* Aqui pueden moverle pa ver sus componentes */}
						<PromotionsList promotionsSection={promotions}/>
						<ProductsList productsList={products}  handleDetailedProduct={handleAux}/>

					</>
				) : null}
				{view === 1
				?
				(
					<>
						<Button onClick={goHome} className={classes.btn} style={{marginTop: "20px"}}> <ArrowBackIosIcon style={{fontSize: 15 }}/> Back </Button>
						<DetailedProduct productById={product} goBack={goHome}/>
					</>
				) : null}
				{view === 2
				?
				(
					<>
						<Button onClick={goHome} className={classes.btn} style={{marginTop: "20px"}}> <ArrowBackIosIcon style={{fontSize: 15 }}/> Back </Button>
						<ProductsList  productsList={filteredData} handleDetailedProduct={handleDetailedProduct}/>
					</>
				) : null}
				{view === 3
				?
				(
					<>
						<Button onClick={goToProductsByCategories} className={classes.btn} style={{marginTop: "20px"}}>
							<ArrowBackIosIcon style={{fontSize: 15 }}/> Back
						</Button>
						<DetailedProduct productById={product}/>
					</>
				) : null}
            </div>
        </div>
    )

};

export default HomePage;

