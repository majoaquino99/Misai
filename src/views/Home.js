import React from 'react';
import '../index.css';
import HomePage from '../components/Customer/HomeComponent/HomePage';

import useCategories from '../controller/useCategories';
import useProducts from '../controller/useProducts';
import useProductById from '../controller/useProductById';
import usePromotions from '../controller/usePromotions';
// import Women from './v/Women'
// import Man from './v/Man'


function Home() {

	const {categories, errorCategories} = useCategories();
	const {products, errorProducts} = useProducts();
	const {product, errorProduct} = useProductById(1);
	const {promotions, errorPromotion} = usePromotions();
	console.log(product)
	console.log(categories);
	console.log(products);
	console.log(promotions);

	let categoriesSection = (<h1>Loading</h1>);
	if (categories.length > 0) {
		categoriesSection = categories.map((category) => {
			return (
				<div>
					{category.categoryID}, {category.description}
				</div>
			);
		});
	}

	return (
		<>
			<HomePage />
			{categoriesSection}
		</>
	);
}

export default Home;
