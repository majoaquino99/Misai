import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = (product) => {
    const [products, setProducts] = useState([]);
    const [errorProducts, setErrorProducts] = useState(null)
    const [imageProductos, setImageProducts] = useState('')

    
    useEffect(() => {
        const fetchDataProducts = () => {

            const host = `/v1/shop/products/${product}/image`
            const getImageCategoriesAPI = `https://genericapiv1.azurewebsites.net${host}`;

            const getProductsAPI = 'https://genericapiv1.azurewebsites.net/v1/shop/products';
            const getAllProducts = axios.get(getProductsAPI)
            axios.all([getAllProducts])
                .then(axios.spread((...allData) => {
                    const allDataProducts = allData[0].data
                    setProducts(allDataProducts)
                    setImageProducts(getImageCategoriesAPI)
                })
                ).catch((e) => {
                    setErrorProducts(e)
                })
        }
        fetchDataProducts()
    }, [])
    return {
        products,
        errorProducts,
        imageProductos
    }
}
export default useProducts;

