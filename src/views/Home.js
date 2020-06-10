import React from 'react';
import '../index.css';
import HomePage from '../components/Customer/HomeComponent/HomePage';
import AllCategories from '../controller/Categories'
import DataProductId from '../controller/Product_id'
import AllProducts from '../controller/Products'
import AllPromotions from '../controller/Promotions'

// import Women from './v/Women'
// import Man from './v/Man'


function Home() {
	return (
		<>
			<HomePage/>		
			<AllCategories />
			<DataProductId />
			<AllProducts />	
			<AllPromotions />
		</>
	);
}

export default Home;
