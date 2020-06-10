import React, { useState } from 'react';
import HeaderCustomer from '../HeaderCustomer';
import ProductsList from '../ProductsComponent/ProductsList';
import CategoriesList from '../CategoriesComponent/CategoriesList';
import PromotionsList from '../PromotionsComponent/PromotionsList';
import {  makeStyles }  from '@material-ui/core/styles';

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

  /*   const handleChangeState = () => {
        setView(1)
    }
 */

    return(
        <div className= {classes.Page}>

            <HeaderCustomer/>
            <div>
            {view === 0
            ?
            (
                <div style={{marginTop: "200px"}}>
                {/* Aqui pueden moverle pa ver sus componentes */}
                <PromotionsList/>
                <CategoriesList />

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

