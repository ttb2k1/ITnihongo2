import React, { useEffect } from "react";
import './TableHistory.css';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import ManagementService from "../../../../Services/ManagementService";
const TableHistory = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        try {
            ManagementService.getListHistory().then((res) => {
                setData(res.data.data)
                console.log(res.data.data);
            })

        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <div className="App">
            <table>
                <tr>
                    <th>Vehical Owner</th>
                    <th>Vehicle Type</th>
                    <th>Plate Type</th>
                    <th>Time Checkin</th>
                    <th>Time Checkout</th>
                </tr>
                {data?.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.vehicle_type}</td>
                            <td>{item.vehicle_plates}</td>
                            <td>{(item.checkin_time + "").split('T')[1].substring(0, 8) + " " + (item.checkin_time + "").split('T')[0].split('-').reverse().join('/')}</td>
                            <td>{(item.checkout_time + "").split('T')[1].substring(0, 8) + " " + (item.checkout_time + "").split('T')[0].split('-').reverse().join('/')}</td>
                            <td>
                                <AiOutlineEdit />
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default TableHistory;