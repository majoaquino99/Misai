import React from 'react';

const CategoriesList = ({mockCategories}) => {
	return (
		<div>
			<ul>
				{mockCategories.map(category => (
				<li key={category.description}>{category.description}</li>
				))}
			</ul>

		</div>
	);
}

export default CategoriesList;
