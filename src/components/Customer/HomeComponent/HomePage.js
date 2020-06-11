//view promotions and categories
import React, { useState } from 'react';
import HeaderCustomer from '../HeaderCustomer';
import ProductsList from '../ProductsComponent/ProductsList';
import CategoriesList from '../CategoriesComponent/CategoriesList';
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
	// render condicional de vistas
	const [view, setView] = useState(0);
	const [id, setId] = useState(0);

	// destructuring API
	const {categories, errorCategories} = useCategories();
	const {promotions, errorPromotions} = usePromotions();
	const {products, errorProducts} = useProducts();
	const {product, errorProduct} = useProductById(id);







	// onClick functions pasadas como props a sus componentes respectivos

	const [selectedCategory, setSelectedCategory] = useState(0);
	// tu decides cual es el mejor valor por defecto

  const handleShowProducts = (e) => {
		e.preventDefault();
		const selectedValue = e.currentTarget.value;
		setSelectedCategory(parseInt(selectedValue, 10))
		// la guardamos //para que es el 10? si usaran eslint :P se quejaria, porque
		// parseInt recomienda pasar la base en la que quieres hacer la transformacion
		//ok, entiendo, de hecho, si instale esint, pero tuvimos problemas con la version y tuvimos que eliminarlo.
		// listo entonces?
		// si, listo! ya me quedo claro para explicarselo a mis compañeras y realizar el siguiente filtro de producto
		//mil gracias mariano

		// buenisimo majo, buenas noches y muchos exitos!!!
		// muchas gracias, y te deso los mismos exitos, eres el mejor <3 :) todas estamos muy agradecidas
		// :) :P
		setView(1)
	}
//un momento, si, perdona, se trabo un poco mi maquina, pero si te sigo, y si te estoy enteniendo
// ntp, vamos abajo a donde llamamos al componente ProductsList (linea 102)

	const handleDetailedProduct = (e) => {
		e.preventDefault();
		const selectedValue = e.currentTarget.value;
		setId(selectedValue);
		setView(2)
	}


 	const goBack = () => {
        const aux = view - 1;
        setView(aux);
	};

	const filteredData = products.filter((c) => c.categoryId === selectedCategory);



    return(
        <div className= {classes.Page}>

            <HeaderCustomer categoriesSection={categories} handleShowProducts={handleShowProducts}/>
            <div style={{marginTop: "140px"}}>
				{view === 0
				?
				(
					<>
						{/* Aqui pueden moverle pa ver sus componentes */}
						<PromotionsList promotionsSection={promotions}/>
						<ProductsList productsList={products}/>

					</>
				) : null}
				{view === 1
				?
				(
					//wow, todo tiene sentido ahora... espera, q no esta funcionando... ok,parseInt es pporque es numero, cierto?
					// si el value lo estas seteando como string, pero en la lista estan guardados como ints
					// YA FUNCIONA!
					// chequea porfa
					// filtramos la lista!
					//ok! *que emocion* si, ya lo probé! Si funciona muy bien... ok!!

					// vamos a meter un pequenio cambio para que sea mas chevere, en lugar de tener q hacer el parseInt aqui, lo hacemos arriba
					// a la hora de setear la categoriaSelccionada para q siempre sea un numero... por si la necesitamos en algun otro lugar
					<>
					<Button onClick={goBack} className={classes.btn} style={{marginTop: "20px"}}> <ArrowBackIosIcon style={{ fontSize: 15 }}/> back </Button>
					<ProductsList  productsList={filteredData} goBack={goBack} handleDetailedProduct={handleDetailedProduct}/>
					</>
				) : null}
				{view === 2
				?
				(
					<DetailedProduct productById={product} goBack={goBack}/>
				) : null}
            </div>
        </div>
    )

};

export default HomePage;

