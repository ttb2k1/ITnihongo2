import React, { useEffect, useState } from "react";
import ManagementService from "../../../../Services/ManagementService";
import './CarInfo.css';
const CarInfo = ({ qrcode }) => {
    const [data, setData] = useState([])
    const [time, setTime] = useState("")
    console.log(qrcode);
    useEffect(() => {
        const idUser = { user_id: qrcode }
        ManagementService.getUserByQR(idUser).then((res) => {
            setData(res.data.data)
            var dateTime = new Date();
            const day = dateTime.getDate()
            const month = dateTime.getMonth() + 1
            const year = dateTime.getFullYear();
            const daytime = (day + "/" + month + "/" + year)
            console.log(daytime);
            setTime(daytime)
        }).catch((err) => {
            console.log(err);
        })
    }, [qrcode])

    return (
        <form className="car-info-form">
            <div className="title-car-info"> CAR INFORMATION </div>
            <div className="car-name">
                <label className="title-car-name"> Car name </label>
                <input
                    type="text"
                    value={data.vehicle_type}
                    disabled
                />
            </div>
            <div className="car-number">
                <label className="title-car-number"> Car number </label>
                <input
                    type="text"
                    disabled
                    value={data.vehicle_plates}
                />
            </div>
            <div className="car-owner">
                <label className="title-car-owner">Car owner's name </label>
                <input
                    type="text"
                    value={data.name}
                    disabled
                />
            </div>
            <div className="time-parking">
                <label className="title-time-parking">Time parking </label>
                <input
                    type="text"
                    value={time}
                    disabled
                />
            </div>
        </form>
    )
}
export default CarInfo;