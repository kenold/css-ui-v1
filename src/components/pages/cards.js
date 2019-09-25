import React, { Component } from 'react';
import Blog from '../../components/cards/blog'
import Product from '../../components/cards/product'
import Movie from '../../components/cards/movie'
import Video from '../../components/cards/video'
import BlogWide from '../../components/cards/blogWide'

class Cards extends Component {
    render() {
        return (
            <div className="container">
                <Blog />
                <Movie />
                <Product />
                <Video />
                <BlogWide />
            </div>
        );
    }
}

export default Cards;
