import React from "react";
import NavbarHeader from "../header/Navbar";
import BannerSection from "../Component/Banner";
import SectionMobil from "../Component/HeroSection";
import SectionServices from "../Component/Services";
import WhyUsSection from "../Component/WhyUs";
import TestimonialCarousel from "../Component/Testimony";
import FaqSection from "../Component/Faq";
import SectionFooter from "../footer/Footer";
import  '../styles/styles.css';

const LandingPage = () => {

    return (

        <div>
            <NavbarHeader/>
            <SectionMobil/>
            <SectionServices/>
            <WhyUsSection/>
            <TestimonialCarousel/>
            <BannerSection/>
            <FaqSection/>
            <SectionFooter/>
           

        </div>
    )

}

export default  LandingPage