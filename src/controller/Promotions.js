import React, { useEffect } from 'react';
import axios from 'axios';

const AllPromotions = () => {
    //const [promotions, setPromotions] = useState([]);

    const fetchDataPromotions = () => {
        const promotions = 'https://genericapiv1.azurewebsites.net/v1/shop/promotions'

        const getPromotions = axios.get(promotions)

        axios.all([getPromotions ])
        .then(axios.spread((...allData) => {

            const getPromotions = allData[0]

        console.log(getPromotions)
        
      })
    )
    }
    useEffect(() => {
        fetchDataPromotions()
      }, [])

      return (
          <div>

          </div>
      )
    
}

export default AllPromotions;