import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Blog from './components/cards/blog';

function App() {
  return (
    <div className="App">
    	<div class="container">
			<section class="intro">
				<h1>CSS UI Components</h1>
				<h3>More info here</h3>
			</section>
			<ul>
				<li><a href="card.html">Cards UI</a></li>
			</ul>
		</div>
    </div>
  );
}

export default App;
