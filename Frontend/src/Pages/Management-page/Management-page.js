import React, {useState} from "react";
import './Management-page.css';
import Header from "../../Components/Header-Management-page/Header";
import CarInfo from "./components/CarInfo/CarInfo";
import QRScanner from "./components/QRScanner/QRScanner";
const ManagementPage = () => {
    const [rotate ,setRotate] = useState(false);
    console.log("retate situatus : ",rotate);
    rotate?document.body.style.overflow="hidden":document.body.style.overflow="auto";
    return (
        <div>
            <Header/>
            <QRScanner/>
        </div>
    )
}
export default ManagementPage;