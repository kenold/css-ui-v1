import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';

import './App.scss';
import Home from './components/home';
import Cards from './components/pages/cards';

library.add(faHeart, faPlay);

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div className="container">
						<section className="intro">
							<h1>CSS UI Components</h1>
							<h3>More info here</h3>
						</section>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/cards">Cards UI</Link></li>
						</ul>
					</div>

					<Route exact path="/" component={Home} />
					<Route path="/cards" component={Cards} />
				</div>
			</Router>
		);
	}

}

export default App;
