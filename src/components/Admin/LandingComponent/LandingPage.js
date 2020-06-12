import React, { useState } from 'react';
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




const LandingPage = () => {
	const [view, setView] = useState(0);

	const goBack = () => {
        const aux = view - 1;
        setView(aux);
	};


	return(
		<>
			<HeaderAdmin/>
			<div style={{margin: "40px"}}>
				{view === 0
				?
				(
					<Products/>
					
				)
				: null }
				{view === 1
				?
				(

					<Categories/>
				)
				: null }
				{view === 2
				?
				(

					<Promotions/>
				)
				: null }
				{view === 3
				?
				(
					<Analytics/>
				)
				: null }
			</div>
		</>
	)
};

export default LandingPage;
