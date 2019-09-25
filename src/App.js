import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Cards from './components/pages/cards';

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
							<li><Link to="/cards">Cards UI</Link></li>
						</ul>
					</div>

					<Route exact path="/cards" component={Cards} />
				</div>
			</Router>
		);
	}

}

export default App;
