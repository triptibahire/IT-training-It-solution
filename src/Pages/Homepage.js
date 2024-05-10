import React from "react";
// import Header from "../Components/Header";
import ImageSlideShow from "../Components/ImageSlideShow";
import FAQs from "../Components/FAQs";
import Footer from "../Components/Footer";
import TalkWithUs from "../Components/TalkWithUs";
import NewSection from "../Components/NewSection";
import ContentSec from "../Components/ContentSec";
import Testimonials from "../Components/Testimonials";

// import Team from "./Team";
import Header from "../Components/Header";

function Homepage() {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* <Navbar /> */}

            {/* Image slideshow */}
            <ImageSlideShow />

            <div className="flex flex-row justify-center">
                <ContentSec />

                {/* Talk with us */}
                <TalkWithUs />
            </div>

            {/* New Section */}
            <NewSection />

            {/* Frequently Asked Questions */}
            <FAQs />
            <Testimonials />

            {/* Footer */}
            <Footer />
            {/* <Team /> */}
        </div>
    );
}

export default Homepage;
