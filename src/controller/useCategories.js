import { useEffect, useState } from 'react';
import axios from 'axios';

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [errorCategories, setErrorCategories] = useState(null)

    useEffect(() => {
        const fetchDataCategories = () => {
            const categoriesAPI = 'https://genericapiv1.azurewebsites.net/v1/shop/categories';
            const getCategoriesAPI = axios.get(categoriesAPI)
            axios.all([getCategoriesAPI])
                .then(axios.spread((...allData) => {
                    const allDataCategories = allData[0].data
                    setCategories(allDataCategories)
                })
                ).catch((e) => {
                    setErrorCategories(e)
                })
        };
        fetchDataCategories()
    }, [])
    return {
        categories,
        errorCategories
    }
}
export default useCategories;