import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const PromotionsList = ({promotionsSection}) => {
	const style = {
		height:'400px',
		width: 'auto',
		background:'transparent'
	}

	return (
		<div>
			<Carousel
				centerMode
				infiniteLoop
				showThumbs={false}>

				{promotionsSection.map(promotion => (
					<div key={promotion.promotionID} >
						<img
						alt={promotion.description}
						src={`https://genericapiv1.azurewebsites.net/v1/shop/promotions/${promotion.promotionID}/image`}
						style={style}
						/>
						<h1 className="legend">{promotion.description}</h1>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default PromotionsList;

/* style={{ display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'}} */


