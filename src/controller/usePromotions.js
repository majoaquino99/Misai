import { useEffect, useState } from 'react';
import axios from 'axios';

const usePromotions = (promotion) => {
    const [promotions, setPromotions] = useState([]);
	const [errorPromotion, setErrorPromotion] = useState(null)

    useEffect(() => {
        const fetchDataPromotions = () => {

            const getPromotionsAPI = 'https://genericapiv1.azurewebsites.net/v1/shop/promotions'
            const getAllPromotionss = axios.get(getPromotionsAPI)
            axios.all([getAllPromotionss])
                .then(axios.spread((...allData) => {
                    const allDataPromotionss = allData[0].data
                    setPromotions(allDataPromotionss)
                })
                ).catch((e) => {
                    setErrorPromotion(e)
                })
        }
        fetchDataPromotions()
    }, [])
    return {
        promotions,
        errorPromotion
    }
}
export default usePromotions;
