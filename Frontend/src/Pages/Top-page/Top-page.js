import React from "react";
import './Top-page.css';
import ButtonAppBar from "./components/ButtonAppBar";
import Map from "./components/Map";
import Parking from "./components/Parking";
import Footer from "./components/Footer";
const TopPage = () => {
    return (
        <div className="Top-page">
            <ButtonAppBar/>
            <Map/>
            <Parking/>
            <Footer/>
        </div>
    );
}
export default TopPage