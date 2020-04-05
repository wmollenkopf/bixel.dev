import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import BlogFile from './Blog.md';
import { BLOG } from "../Constants.js";


class Blog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            markup: null,
            pages: 0,
            currentPage: 0,
            postsPerPage: BLOG.POSTS_PER_PAGE
        }
    }


    componentDidMount() {
        fetch(BlogFile).then((response) => response.text()).then((text) => {
            let posts = text.split('_POSTSEPARATOR_');

            this.setState({ markup: posts })
            // Determine the number of posts that should be displayed per page.
            // This is done initially by a max number of a constatn from BLOG.POSTS_PER_PAGE on page init
            // This can be adjusted by the user later via UI and state manip
            // NOTE: Will round up, so if 5 posts per page and there are 6 posts, it will report 2 pages worth of posts
            // If there's 3 posts with 5 per page, it'll still say at least 1 page of posts
            let numOfPosts = Math.ceil(posts.length / this.state.postsPerPage);
            this.setState({ pages: numOfPosts })
        })
    }

    render = () => {
        if (this.state.markup) {
            return (
                <div className="content">
                    {this.state.markup.map((post, index) => (
                        <ReactMarkdown key={index} source={post} />
                    ))}
                </div>
            );
        } else {
            return (<div></div>);
        }

    }

}

export default Blog;