import React, { useEffect } from 'react';
import axios from 'axios';

const DataProductId = () => {
    //const [productsId, setProductsId] = useState([]);

    const fetchDataProductsId = (id) => {
        const productsId = 'https://genericapiv1.azurewebsites.net/v1/shop/products/1';

        const getProductsId = axios.get(productsId)

        axios.all([getProductsId ])
        .then(axios.spread((...allData) => {

            const getAllProductsId = allData[0].data

        console.log(getAllProductsId)
        
      })
    )
    }
    useEffect(() => {
        fetchDataProductsId()
      }, [])

      return (
          <div>

          </div>
      )
    
}

export default DataProductId;