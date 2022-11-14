import React from "react";
import './Table.css';
const Table = () => {
    const data = [
        { Car_name: "Hyndai Santafe ", Car_number: "43AB-10032", Name_owner: "Mr. Duy" },
        { Car_name: "Kia Morning ", Car_number: "54CB-00811", Name_owner: "Mr. Phuoc" },
        { Car_name: "Toyota Camry ", Car_number: "43AB-93003", Name_owner: "Mr. Trieu" },
    ]
    return(
        <div className="App">
            <table>
                <tr>
                    <th>Car Name</th>
                    <th>Car Number</th>
                    <th>Name Owner</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.Car_name}</td>
                            <td>{val.Car_number}</td>
                            <td>{val.Name_owner}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default Table;