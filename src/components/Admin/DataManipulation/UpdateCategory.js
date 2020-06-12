import React, { useState } from 'react';
import axios from 'axios';
import useToken from '../../../controller/useToken'


const UpdateCategory = () => {
	const { token } = useToken()
	const [description, setDescription] = useState('')

	const submitValue = () => {
		axios.post('https://genericapiv1.azurewebsites.net/v1/shop/categories',
	         {
				description
			 },
			{
				headers: { Authorization: `Bearer ${token}`} 
			})
			.then(function (response) {
				console.log(response);
			})

	}

	return (
		<>
			<h1>Category</h1>
			<div>
				<label htmlFor="description">Description</label>
				<input type="text" onChange={e => setDescription(e.target.value)}  name="description" />

			<button onClick={submitValue} >Submi</button>
			</div>
		</>
	)
}

export default UpdateCategory;
