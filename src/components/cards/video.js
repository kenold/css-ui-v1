import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoData from '../../data/videos.json';
import $ from "jquery";

class Video extends Component {
	render() {
		// slick carousel
		// $('.carousel-3').slick({
		// 	mobileFirst: true,
		// 	slidesToShow: 1.5,
		// 	slidesToScroll: 1,
		// 	arrows: false,
		// 	infinite: false,
		// 	responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 			slidesToShow: 3.5,
		// 			slidesToScroll: 1,
		// 			arrows: true,
		// 		}
		// 		},
		// 		{
		// 		breakpoint: 600,
		// 		settings: {
		// 			slidesToShow: 2.5,
		// 			slidesToScroll: 1
		// 		}
		// 		}
		// 	]
		// });
		return (
			<div className="container">
				<section className="l-cards">
					<div className="l-cards__heading">
						<h4>Cards + Video </h4>
					</div>
					<div className="cards carousel-3">
						{VideoData.map((video) => (
							<article key={video.id} className="card card--video">
								<a href="video.html">
									<figure className="card__media">
										<img src={"images/thumbs/video-" + video.id + ".jpg"} alt={video.title} className="card__image" />
										<div className="card__label">{video.duration}</div>
									</figure>
									<div className="card__icon"><FontAwesomeIcon icon="play"/></div>
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