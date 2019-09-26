import React, { Component } from 'react';
import Prism from 'prismjs';
import '../../assets/css/prism.css';

const code = `
<div class="card">
    <a href="...">
        <figure class="card__media">
            <img src="..." alt="" class="card__image" />
        </figure>
        <div class="card__body">
            <div class="card__category">Blog</div>
            <div class="card__title">Card Title</div>
        </div>
        <div class="card__footer">
            <div class="card__author">Jane Doe</div>
            <div class="card__date">5 hours ago</div>
        </div>
    </a>
</div>
`.trim()

class BlogCode extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }
    render() {
        return (
            <pre>
                <code className="language-html">
                    {code}
                </code>
            </pre>
        );
    }
}

export default BlogCode
