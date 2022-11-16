import React, {useState} from "react";
import './Management-page.css';
import Header from "../../Components/Header-Management-page/Header";
import WebcamCapture from "./components/Webcam/Webcam";
import CarInfo from "./components/CarInfo/CarInfo";
const ManagementPage = () => {
    const [rotate ,setRotate] = useState(false);
    console.log("retate situatus : ",rotate);
    rotate?document.body.style.overflow="hidden":document.body.style.overflow="auto";
    return (
        <div>
            <Header/>
            <div className="main-page">
                <WebcamCapture/>
                <CarInfo/>
            </div>
        </div>
    )
}
export default ManagementPage;