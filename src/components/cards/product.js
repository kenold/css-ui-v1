import React, { Component } from 'react';
import ProductData from '../../data/products.json';

class Product extends Component {
	render() {
		return (
			<div className="container">
				<section className="l-cards">
					<div className="l-cards__heading">
						<h4>Cards Overlay + Icon/Product</h4>
					</div>
					<div className="cards">
						{ProductData.map((product) => (
							<article key={product.id} className="card card--overlay-icon grid-4">
								<a href="product.html">
									<figure className="card__media">
										<img src={"images/products/" + product.id + ".jpg"} alt={product.title} className="card__image" />
									</figure>
									<div className="card__icon"><i className="far fa-heart"></i></div>
									<div className="card__body">
										<div className="card__category">
											{product.category}
										</div>
										<div className="card__title" title="{product.title}">
											<span>{product.title}</span>
										</div>
									</div>
									<div className="card__footer">${product.price}</div>
								</a>
							</article>
						))}
					</div>
				</section>
			</div>
		);
	}

}

export default Product;