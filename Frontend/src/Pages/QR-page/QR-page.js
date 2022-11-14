import React from 'react'
import HeaderHomePage from "../../components/Header_home-page/Header-home-page";
import './QR-page.scss';

const QRPage = () => {
    return (
        <div className='qrContainer'>
            <HeaderHomePage />
            <div className="qr-content">
                <img className='image' src="https://vinacheck.vn/media/2019/05/ma-qr-code_vinacheck.vm_001.jpg"></img>
            </div>
        </div>
    )
}

export default QRPage