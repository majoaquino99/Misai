import { useEffect, useState } from 'react';
import axios from 'axios';

const useCategories = (categoriesId) => {
    const [categories, setCategories] = useState([]);
    const [errorCategories, setErrorCategories] = useState(null)
    const [imageCategories, setImageCategories] = useState('')

    useEffect(() => {
        const fetchDataCategories = () => {

            const host = `/v1/shop/categories/${categoriesId}/image`
            const getImageCategoriesAPI = `https://genericapiv1.azurewebsites.net${host}`


            const categoriesAPI = 'https://genericapiv1.azurewebsites.net/v1/shop/categories';
            const getCategoriesAPI = axios.get(categoriesAPI)
            axios.all([getCategoriesAPI])
                .then(axios.spread((...allData) => {
                    const allDataCategories = allData[0].data
                    setCategories(allDataCategories)
                    setImageCategories(getImageCategoriesAPI)
                })
                ).catch((e) => {
                    setErrorCategories(e)
                })
        };
        fetchDataCategories()
    }, [])
    return {
        categories,
        imageCategories,
        errorCategories
    }
}
export default useCategories;