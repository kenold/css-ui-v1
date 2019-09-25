import React, { Component } from 'react';
import BlogCode from "../../components/codes/blog";
import PostData from '../../data/posts.json';

class Blog extends Component {
	render() {
		return (
			<div className="container">
				<section className="l-cards">
					<div className="l-cards__heading">
						<h4>Cards + Blog Posts </h4>
					</div>
					<div className="cards cards--blog">
						{PostData.map((post) => (
							<article key={post.id} className="card grid-4">
								<a href="post.html">
									<figure className="card__media">
										<img src={"images/thumbs/" + post.id + ".jpg"} alt={post.title} className="card__image" />
									</figure>
									<div className="card__body">
										<div className="card__category">{post.category}</div>
										<div className="card__title" title={post.title}>
											<span>{post.title}</span>
										</div>
									</div>
									<div className="card__footer">
										<div className="card__author">{post.author}</div>
										<div className="card__date">5 hours ago</div>
									</div>
								</a>
							</article>
						))}
					</div>
				</section>

				<section className="code">
					<BlogCode />
				</section>
			</div>
		);
	}

}

export default Blog;