import React, { useEffect } from 'react';
import axios from 'axios';

const AllProducts = () => {
    //const [allProducts, setAllProducts] = useState([]);

    const fetchDataAllProducts = () => {
        const allProducts = 'https://genericapiv1.azurewebsites.net/v1/shop/products';

        const getAllProducts = axios.get(allProducts)

        axios.all([getAllProducts ])
        .then(axios.spread((...allData) => {

            const getAllProducts = allData[0]

        console.log(getAllProducts)
        
      })
    )
    }
    useEffect(() => {
        fetchDataAllProducts()
      }, [])

      return (
          <div>

          </div>
      )
    
}

export default AllProducts;