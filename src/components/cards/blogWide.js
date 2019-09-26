import React, { Component } from 'react';
import PostData from '../../data/posts.json';

class BlogWide extends Component {
	render() {
		return (
			<section className="l-cards container">
				<div className="l-cards__heading">
					<h4>Cards + Blog Posts Wide </h4>
				</div>
				<div className="cards cards--blog">
					{PostData.map((post) => (
						<article key={post.id} className="card card--wide">
							<a href="post.html">
								<figure className="card__media">
									<img src={"images/thumbs/" + post.id + ".jpg"} alt={post.title} className="card__image" />
								</figure>
								<div className="card__body">
									<div className="card__category">
										{post.category}
									</div>
									<div className="card__title" title={post.title}>
										<span>{post.title}</span>
									</div>
									<div className="card__text">{post.excerpt}</div>
								</div>
							</a>
						</article>
					))}
				</div>
			</section>
		);
	}

}

export default BlogWide;