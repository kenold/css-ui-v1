import React, { Component } from 'react';
import VideoData from '../../data/videos.json';

class Video extends Component {
	render() {
		return (
			<div className="container">
				<section className="l-cards">
					<div className="l-cards__heading">
						<h4>Cards + Video </h4>
					</div>
					<div className="cards">
						{VideoData.map((video) => (
							<article key={video.id} className="card card--video">
								<a href="video.html">
									<figure className="card__media">
										<img src={"images/thumbs/video-" + video.id + ".jpg"} alt={video.title} className="card__image" />
										<div className="card__label">{video.duration}</div>
									</figure>
									<div className="card__icon"><i className="fas fa-play"></i></div>
									<div className="card__body">
										<div className="card__title" title={video.title}>
											<span>{video.title}</span>
										</div>
										<div className="card__subtitle">{video.artist}</div>
									</div>
								</a>
							</article>
						))}
					</div>
				</section>
			</div>
		);
	}

}

export default Video;