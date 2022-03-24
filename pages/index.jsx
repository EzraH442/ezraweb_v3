import React from "react";

import SEO from "../componenents/seo";
import Header from "../componenents/header";
import Footer from "../componenents/footer";
import Banner from "../componenents/homepage/banner";

import ThreeColumns from "../componenents/homepage/triple-column";
import PersonalInfo from "../componenents/homepage/personalinfo";

import left from "../images/column2.jpg";
import right from "../images/right.jpg";
import summit from "../images/summit.jpg";

const HomePage = () => (
    <div>
        <SEO
            title="Home"
            description="Ezra's Website Homepage!"
            pathname=""
        />
        <Header />
        <Banner />
        <ThreeColumns
            pos={1}
            title="Backpacking"
            text="I like to go backpacking!"
            images={{
                image1: {
                    src: { left },
                    alt: "Backpacking across a large scree field",
                },
                image2: {
                    src: { right },
                    alt: "Great views from the top of a mountain",
                },
            }}
        />

        <ThreeColumns
            pos={3}
            title="Scrambling"
            text="I also love climbing mountains!"
            images={{
                image1: {
                    src: { summit },
                    alt: "Backpacking across a large scree field",
                },
                image2: {
                    src: { summit },
                    alt: "Great views from the top of a mountain",
                },
            }}
        />
        <PersonalInfo />
        <Footer />
    </div>
);

export default HomePage;
