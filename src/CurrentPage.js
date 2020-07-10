import React, { Suspense } from 'react';
import { PAGE_NAMES } from "./Components/Constants.js";

const AboutPage = React.lazy(() => import('./Components/About/About'));
const BlogPage = React.lazy(() => import('./Components/Blog/Blog'));
const ExpereincePage = React.lazy(() => import('./Components/Experience/Experience'));

const CurrentPage = ({ currentPage, newRoute }) => {
    if (currentPage === PAGE_NAMES.ABOUT) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <AboutPage newRoute={newRoute} />
            </Suspense>
        );
    }
    else if (currentPage === PAGE_NAMES.BLOG) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <BlogPage newRoute={newRoute} />
            </Suspense>
        );
    }
    else if (currentPage === PAGE_NAMES.EXPERIENCE) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <ExpereincePage newRoute={newRoute} />
            </Suspense>
        );
    }
      else {
        return (
            <div id="title">
                <span id="mainTitle">bixel.dev</span>
                {/* <hr />
                <span id="subTitle">
                    <div>To Be Continued</div>
                </span> */}
            </div>
        );
    }

}

export default CurrentPage;