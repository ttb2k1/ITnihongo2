import React, {useEffect, useState} from "react";
import './CarInfo.css';
const CarInfo = (props) => {
    const [name, setName] = useState("");
    const [status,setStatus] = useState('0');
    const {key} = props;
    useEffect(()=>{
        console.log(key);
    },[status]);
    return (
            <form className="car-info-form">
                <div className="title-car-info"> CAR INFORMATION </div>
                <div className="car-name">
                    <label className="title-car-name"> Car name </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="car-number">
                    <label className="title-car-number"> Car number </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="car-owner">
                    <label className="title-car-owner">Car owner's name </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="time-parking">
                    <label className="title-time-parking">Time parking </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <label className="QR-status"> QR code </label>
            </form>
    )
}
export default CarInfo;