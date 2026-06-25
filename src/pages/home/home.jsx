import React from "react";
import "./home.css";

import Hero from "../../components/hero/hero";
import WhyChooseUs from "../../components/whyChooseUS/whyChooseUs";

function Home () {
    return(
        <div className="home-container">
            <Hero />
            <WhyChooseUs />
        </div>
    )
}

export default Home;