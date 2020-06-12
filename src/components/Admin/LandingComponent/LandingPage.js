import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderAdmin from '../HeaderAdmin'
import Analytics from '../Analytics'
// Inventory
import Products from '../Inventory/Products';
import Categories from '../Inventory/Categories';
import Promotions from '../Inventory/Promotions';
// Manipulation
import UpdateProduct from '../DataManipulation/UpdateProduct';
import UpdateCategory from '../DataManipulation/UpdateCategory';
import UpdatePromotion from '../DataManipulation/UpdatePromotion';
import usePromotions from '../../../controller/usePromotions';
import useProducts from '../../../controller/useProducts';
import useCategories from '../../../controller/useCategories';




const LandingPage = () => {
	const [view, setView] = useState(0);
	const history = useHistory();
	const {promotions, errorPromotions} = usePromotions();
	const {products, errorProducts} = useProducts();
	const {categories, imageCategories, errorCategories} = useCategories();


	/* const goBack = () => {
        const aux = view - 1;
        setView(aux);
	};
 */


	const handleProductsInventory = (e) => {
		e.preventDefault();
		setView(0)
	}
	const handleCategoriesInventory = (e) => {
		e.preventDefault();
		setView(1)
	}
	const handlePromotionsInventory = (e) => {
		e.preventDefault();
		setView(2)
	}
	const handleLogout = (e) => {
		e.preventDefault();
		history.push('/');
	}


	return(
		<>
			<HeaderAdmin
				handleProductsInventory={handleProductsInventory}
				handleCategoriesInventory={handleCategoriesInventory}
				handlePromotionsInventory={handlePromotionsInventory}
				handleLogout= {handleLogout}
				/>
			<div style={{margin: "140px"}}>
				{view === 0
				?
				(
					<Products productsList={products} />

				)
				: null }
				{view === 1
				?
				(

					<Categories categoriesList={categories}/>
				)
				: null }
				{view === 2
				?
				(

					<Promotions promotionsData={promotions}/>
				)
				: null }
			</div>
		</>
	)
};

export default LandingPage;
