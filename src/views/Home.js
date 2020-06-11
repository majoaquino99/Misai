import React from 'react';
import '../index.css';
import HomePage from '../components/Customer/HomeComponent/HomePage';

import useCategories from '../controller/useCategories';
import useProducts from '../controller/useProducts';
import useProductById from '../controller/useProductById';
import usePromotions from '../controller/usePromotions';

//import useImageCategories from '../controller/useImage'
// import Women from './v/Women'
// import Man from './v/Man'



function Home() {

	const {categories, imageCategories, errorCategories} = useCategories(1);
	const {products, imageProductos, errorProducts} = useProducts(3);
	const {product, errorProduct} = useProductById(1);
	const {promotions, imagePromotions, errorPromotion} = usePromotions(4);
	//const {imageCategories, errorImage} = useImageCategories();

	//console.log(product)
	console.log(categories);
	//console.log(products);
	//console.log(promotions);
	console.log(imagePromotions)

	let categoriesSection = (<h1>Loading</h1>);
	if (categories.length > 0) {
		categoriesSection = categories.map((category) => {
			return (
				<div>
					{category.categoryID}, {category.description}, {imageCategories}
				</div>
			);
		});
	}


	return (
		<>
			<HomePage />
		</>
	);
}

export default Home;
