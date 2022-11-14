import React from "react";
import './Management-page.css';
import Header from "../../components/Header-Management-page/Header";
import Table from "./components/Table/Table"
import WebcamCapture from "./components/Webcam/Webcam";
import CarInfo from "./components/CarInfo/CarInfo";
const ManagementPage = () => {
    return (
        <div>
            <Header/>
            <div className="Mainpage">
                <WebcamCapture/>
                <CarInfo/>
                <label className="history-car"> HISTORY </label>
                <Table/>
            </div>
        </div>
    )
}
export default ManagementPage;