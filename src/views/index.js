//Don't add any code here. At the end, this file will be deleted.
//file to test API on console
import React from 'react';
import '../index.css';
import useCategories from '../controller/useCategories';
import useProducts from '../controller/useProducts';
import useProductById from '../controller/useProductById';
import usePromotions from '../controller/usePromotions';

function TestAPI() {

	const {categories, errorCategories} = useCategories();
	const {products, errorProducts} = useProducts();
	const {product, errorProduct} = useProductById(3);
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
			{categoriesSection}
		</>
	);
}

export default TestAPI;
