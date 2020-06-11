import { useEffect, useState } from 'react';
import axios from 'axios';

const useProductById = (productId) => {
    const [product, setProduct] = useState();
    const [errorProduct, setErrorProduct] = useState(null)

    useEffect(() => {
        const fetchDataProductById = () => {
            const getProductByIdAPI = `https://genericapiv1.azurewebsites.net/v1/shop/products/${productId}`;    
            const getProductById = axios.get(getProductByIdAPI)
            axios.all([getProductById])
                .then(axios.spread((...allData) => {                    
                    setProduct(allData[0].data)
                })
                ).catch((e) => {
                    setErrorProduct(e)
                })
        }
        fetchDataProductById()
    }, [], productId)

    return {
        product,
        errorProduct
    }
}

export default useProductById;