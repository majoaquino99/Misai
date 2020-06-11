import { useEffect, useState } from 'react';
import axios from 'axios';

const usePromotions = (promotion) => {
    const [promotions, setPromotions] = useState([]);
    const [errorPromotion, setErrorPromotion] = useState(null)
    const [imagePromotions, setImagePromotions] = useState('')

    useEffect(() => {
        const fetchDataPromotions = () => {

            const host = `/v1/shop/promotions/${promotion}/image`
            const getImagePromotionsAPI = `https://genericapiv1.azurewebsites.net${host}`

            const getPromotionsAPI = 'https://genericapiv1.azurewebsites.net/v1/shop/promotions'
            const getAllPromotionss = axios.get(getPromotionsAPI)
            axios.all([getAllPromotionss])
                .then(axios.spread((...allData) => {
                    const allDataPromotionss = allData[0].data
                    setPromotions(allDataPromotionss)
                    setImagePromotions(getImagePromotionsAPI)
                })
                ).catch((e) => {
                    setErrorPromotion(e)
                })
        }
        fetchDataPromotions()
    }, [])
    return {
        promotions,
        imagePromotions,
        errorPromotion
    }
}
export default usePromotions;