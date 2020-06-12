import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = (product) => {
    const [products, setProducts] = useState([]);
    const [errorProducts, setErrorProducts] = useState(null)

    useEffect(() => {
        const fetchDataProducts = () => {
            const getProductsAPI = 'https://genericapiv1.azurewebsites.net/v1/shop/products';
            const getAllProducts = axios.get(getProductsAPI)
            axios.all([getAllProducts])
                .then(axios.spread((...allData) => {
                    const allDataProducts = allData[0].data
                    setProducts(allDataProducts)
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
    }
}
export default useProducts;

