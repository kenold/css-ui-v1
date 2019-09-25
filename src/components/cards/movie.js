import React, { Component } from 'react';
import MovieData from '../../data/movies.json';

class Blog extends Component {
	render() {
		return (
			<div className="container">
				<section className="l-cards">
					<div className="l-cards__heading">
						<h4>Cards Overlay + Movies</h4>
					</div>
					<div className="cards">
						{MovieData.map((movie) => (
							<article key={movie.id} className="card card--overlay grid-3">
								<a href="movie.html">
									<figure className="card__media">
										{/* TODO: rename movie thumbs */}
										<img src={"images/thumbs/movie-" + movie.id + ".png"} alt="movie.title" className="card__image" />>
									</figure>
									<div className="darken"></div>
								</a>
								<div className="card__body">
									<div className="separator"></div>
									<div className="card__title" title={movie.title}>
										{movie.title}
									</div>
									<div className="card__text">{movie.excerpt}</div>
									<ul className="card__actions cta">
										<li className="cta__play"><a href="movie-play.html"><i className="fas fa-play"></i> Play</a></li>
										<li className="cta__favorite"><a href="movie-favorite.html"><i className="far fa-heart"></i> Favorite</a></li>
										<li className="cta__download"><a href="movie-download.html"><i className="fas fa-download"></i> Download</a></li>
									</ul>
								</div>
							</article>
						))}
					</div>
				</section>
			</div>
		);
	}

}

export default Blog;