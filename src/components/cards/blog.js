import React from 'react';

function Blog() {
  return (
    <div className="container">
        <section className="l-cards">
			<div className="l-cards__heading">
				<h4>Cards + Blog Posts </h4>
			</div>
			<div className="cards cards--blog">
				<article className="card grid-4">
					<a href="post.html">
						<figure className="card__media">
							<img src="images/thumbs/1.jpg" alt="title" className="card__image" />
						</figure>
						<div className="card__body">
							<div className="card__category">
								category
							</div>
							<div className="card__title" title="title">
								<span>title</span>
							</div>
						</div>
						<div className="card__footer">
							<div className="card__author">author</div>
							<div className="card__date">5 hours ago</div>
						</div>
					</a>
				</article>
			</div>
		</section>
    </div>
  );
}

export default Blog;