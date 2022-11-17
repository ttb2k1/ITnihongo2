import React from "react";
import './TableHistory.css';
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
const TableHistory = () => {
    const data = [
        { Name_vehice: "Hyndai Santafe ",Type_vehice:"Hyndai", Car_number: "43AB-10032", Name_owner: "Mr. Duy" },
        { Name_vehice: "Kia Morning ",Type_vehice:"Kia", Car_number: "54CB-00811", Name_owner: "Mr. Phuoc" },
        { Name_vehice: "Toyota Camry ",Type_vehice:"Toyota", Car_number: "43AB-93003", Name_owner: "Mr. Trieu" },
    ]
    return(
        <div className="App">
            <table>
                <tr>
                    <th>Vehicle Name</th>
                    <th>Vehicle Type</th>
                    <th>Car Number</th>
                    <th>Name Owner</th>
                    <th>Action</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.Name_vehice}</td>
                            <td>{val.Type_vehice}</td>
                            <td>{val.Car_number}</td>
                            <td>{val.Name_owner}</td>
                            <td>
                                <AiOutlineEdit/>
                                <AiOutlineDelete/>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default TableHistory;