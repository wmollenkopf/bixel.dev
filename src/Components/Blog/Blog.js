import React, { Component } from 'react';
import blogEntries from './entries.json';
import { BLOG } from "../Constants.js";
import "./Blog.css";

class Blog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pages: 0,
            currentPage: 0,
            postsPerPage: BLOG.POSTS_PER_PAGE,
            currentEntry: null
        }
    }


    componentDidMount() {
        // fetch(BlogFile).then((response) => response.text()).then((text) => {
        //     let posts = text.split('_POSTSEPARATOR_');

        //     this.setState({ markup: posts })
        //     // Determine the number of posts that should be displayed per page.
        //     // This is done initially by a max number of a constatn from BLOG.POSTS_PER_PAGE on page init
        //     // This can be adjusted by the user later via UI and state manip
        //     // NOTE: Will round up, so if 5 posts per page and there are 6 posts, it will report 2 pages worth of posts
        //     // If there's 3 posts with 5 per page, it'll still say at least 1 page of posts
        //     let numOfPosts = Math.ceil(posts.length / this.state.postsPerPage);
        //     this.setState({ pages: numOfPosts })
        // })
             //this.setState({ pages: numOfPosts })
    }

    render = () => {
        console.log(blogEntries);
            return (
                <div id="backgroundContainer">
            <div id="innerBackgroundContainer">
                    {blogEntries.map((post, index) => (
                        <div className="postContainer" key={index}>
                            <div className="abilityNameContainer">
                                <h2>{post.title}</h2>
                            </div>
                            <div className="break-row"></div>

                            {post.content.paragraphs.map((paragraph, index) => (
                                <div key={99999+index} className={paragraph.type}>
                                    {paragraph.text}
                                </div>
                         ))}
                        </div>
                    ))}
                </div>
                </div>
            );
      
    }

}

export default Blog;