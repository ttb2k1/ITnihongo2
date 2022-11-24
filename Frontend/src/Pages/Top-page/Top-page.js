import React from "react";
import {Grid, Item} from '@mui/material';

// import './Top-page.css';
import ButtonAppBar from "./components/ButtonAppBar";
import Map from "./components/Map";
import Parking from "./components/Parking";
import Footer from "./components/Footer";
const TopPage = () => {
    return (
        <div className="Top-page">
            <div><ButtonAppBar/></div>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <div><Map/></div>
                </Grid>
                <Grid item xs={4}>
                    <div><Parking/></div>
                </Grid>
            </Grid>
            <div><Footer/></div>
            
        </div>
    );
}
export default TopPage