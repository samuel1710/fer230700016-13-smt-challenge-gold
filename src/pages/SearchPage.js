import React from "react";
import NavbarHeader from "../header/Navbar";
import SectionFooter from "../footer/Footer";
import SearchCarSection from "../HasilPencarian/SearchCar";
import SectionMobil from "../Component/HeroSection";
import '../styles/styles.css';

const SearchPage = () => {

    return (

        <div>
            <NavbarHeader/>
            <SectionMobil/>
            <SearchCarSection/>
            <SectionFooter/>
           

        </div>
    )

}

export default  SearchPage