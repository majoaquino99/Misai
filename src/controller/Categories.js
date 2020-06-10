import React, { useEffect } from 'react';
import axios from 'axios';

const AllCategories = () => {
    //const [categories, setCategories] = useState([]);

    const fetchDataCategories = () => {
        const categoriesAPI = 'https://genericapiv1.azurewebsites.net/v1/shop/categories';

        const getCategoriesAPI = axios.get(categoriesAPI)

        axios.all([getCategoriesAPI ])
        .then(axios.spread((...allData) => {

        const allDataCategories =  allData[0]

        console.log(allDataCategories)
        
      })
    )
    }
    useEffect(() => {
        fetchDataCategories()
      }, [])

      return (
          <div>

          </div>
      )
    
}

export default AllCategories;