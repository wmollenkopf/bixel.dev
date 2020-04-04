import React, { Suspense } from 'react';
import { PAGE_NAMES } from "./Components/Constants.js";

const AboutPage = React.lazy(() => import('./Components/About/About'));

const CurrentPage = ({ currentPage, newRoute }) => {
    if (currentPage === PAGE_NAMES.ABOUT) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <AboutPage newRoute={newRoute} />
            </Suspense>
        );
    } else {
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